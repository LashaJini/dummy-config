export * from './types';

import { Protocol, ProtocolName } from './types';

export const protocols: { [key in ProtocolName]: Protocol } = {
  [ProtocolName.Alpha]: {
    id: 1,
    name: ProtocolName.Alpha,
    hasPermanentPools: false,
  },
  [ProtocolName.Beta]: {
    id: 2,
    name: ProtocolName.Beta,
    hasPermanentPools: false,
  },
  [ProtocolName.Gamma]: {
    id: 3,
    name: ProtocolName.Gamma,
    hasPermanentPools: true,
  },
  [ProtocolName.Delta]: {
    id: 4,
    name: ProtocolName.Delta,
    hasPermanentPools: false,
  },
  [ProtocolName.Epsilon]: {
    id: 5,
    name: ProtocolName.Epsilon,
    hasPermanentPools: false,
  },
  [ProtocolName.Zeta]: {
    id: 6,
    name: ProtocolName.Zeta,
    hasPermanentPools: false,
  },
  [ProtocolName.Eta]: {
    id: 7,
    name: ProtocolName.Eta,
    hasPermanentPools: true,
  },
  [ProtocolName.Theta]: {
    id: 8,
    name: ProtocolName.Theta,
    hasPermanentPools: false,
  },
  [ProtocolName.Iota]: {
    id: 9,
    name: ProtocolName.Iota,
    hasPermanentPools: false,
  },
  [ProtocolName.Kappa]: {
    id: 10,
    name: ProtocolName.Kappa,
    hasPermanentPools: true,
  },
};
