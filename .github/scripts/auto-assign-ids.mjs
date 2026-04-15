#!/usr/bin/env node

// Auto-assign sequential IDs to newly added AMMs and protocols.
//
// Compares HEAD vs HEAD~1 to find new `id:` entries from the latest merge,
// then reassigns them sequentially from max_existing + 1.
// Also updates `related:` references that point to reassigned AMM IDs.

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

const srcDir = path.resolve(process.argv[2] || '.', 'src');
const protocolFile = path.join(srcDir, 'protocols', 'index.ts');
const ammGlob = path.join(srcDir, 'network', '*', 'amms.ts');

function getAmmFiles() {
  try {
    return execSync(`ls ${ammGlob} 2>/dev/null`, { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
  } catch {
    return [];
  }
}

function extractIds(content) {
  return [...content.matchAll(/\bid:\s*(\d+)/g)].map((m) => parseInt(m[1]));
}

function getDiffAddedIds(filePaths) {
  if (filePaths.length === 0) return new Set();

  try {
    const diff = execSync(
      `git diff HEAD~1 HEAD -- ${filePaths.map((f) => `"${f}"`).join(' ')}`,
      { encoding: 'utf8' },
    );

    const addedIds = new Set();
    const removedIds = new Set();
    for (const line of diff.split('\n')) {
      if (line.startsWith('+') && !line.startsWith('+++')) {
        const match = line.match(/\bid:\s*(\d+)/);
        if (match) addedIds.add(parseInt(match[1]));
      } else if (line.startsWith('-') && !line.startsWith('---')) {
        const match = line.match(/\bid:\s*(\d+)/);
        if (match) removedIds.add(parseInt(match[1]));
      }
    }

    // IDs in both added and removed lines are modifications (e.g. reformatted by linter), not new entries
    for (const id of removedIds) {
      addedIds.delete(id);
    }
    return addedIds;
  } catch {
    return new Set();
  }
}

function reassignIds(filePaths, kind) {
  if (filePaths.length === 0) {
    console.log(`No ${kind} files found, skipping.`);
    return false;
  }

  const newIds = getDiffAddedIds(filePaths);
  if (newIds.size === 0) {
    console.log(`No new ${kind} IDs found in diff.`);
    return false;
  }

  console.log(`New ${kind} IDs in diff: ${[...newIds].join(', ')}`);

  // All IDs across all files
  const allIds = new Set();
  for (const f of filePaths) {
    for (const id of extractIds(readFileSync(f, 'utf8'))) {
      allIds.add(id);
    }
  }

  // max of existing (non-new) IDs
  const existingIds = [...allIds].filter((id) => !newIds.has(id));
  const maxExisting = existingIds.length > 0 ? Math.max(...existingIds) : 0;
  console.log(`Max existing ${kind} ID: ${maxExisting}`);

  // Ordered by appearance across files (deterministic assignment)
  const orderedNewIds = [];
  for (const f of filePaths) {
    for (const id of extractIds(readFileSync(f, 'utf8'))) {
      if (newIds.has(id) && !orderedNewIds.includes(id)) {
        orderedNewIds.push(id);
      }
    }
  }

  // Build old -> new mapping
  const idMap = new Map();
  let nextId = maxExisting + 1;
  for (const oldId of orderedNewIds) {
    idMap.set(oldId, nextId);
    console.log(`  ${kind} ID: ${oldId} -> ${nextId}`);
    nextId++;
  }

  // Single-pass regex replace to avoid collision between old/new IDs.
  // Matches all "id: N" and "related: N" where N is any old ID, and
  // replaces in one shot via a callback.
  const oldIdPattern = orderedNewIds.join('|');
  const regex = new RegExp(
    `\\b(id|related):\\s*(${oldIdPattern})\\b`,
    'g',
  );

  let anyFileChanged = false;
  for (const f of filePaths) {
    const original = readFileSync(f, 'utf8');
    const updated = original.replace(regex, (match, field, oldIdStr) => {
      const newId = idMap.get(parseInt(oldIdStr));
      return newId !== undefined ? `${field}: ${newId}` : match;
    });

    if (updated !== original) {
      writeFileSync(f, updated);
      console.log(`  Updated: ${f}`);
      anyFileChanged = true;
    }
  }

  return anyFileChanged;
}

// --- main ---

console.log('=== Auto-assigning protocol IDs ===');
const protocolFiles = existsSync(protocolFile) ? [protocolFile] : [];
const protocolChanged = reassignIds(protocolFiles, 'protocol');

console.log('');
console.log('=== Auto-assigning AMM IDs ===');
const ammFiles = getAmmFiles();
const ammChanged = reassignIds(ammFiles, 'AMM');

console.log('');
if (protocolChanged || ammChanged) {
  console.log('Files were updated.');
} else {
  console.log('No changes needed.');
}
