import { AmmName } from "../../amms";
import { ProtocolName, protocols } from "../../protocols";

// JUST SOMETHING ELSE

export const amms = [
  {
    id: 1,
    name: AmmName.Amm1,
    protocol: protocols[ProtocolName.Alpha],
    factoryAddresses: ["0xaaa1"],
  },
  {
    id: 2,
    name: AmmName.Amm2,
    protocol: protocols[ProtocolName.Beta],
    factoryAddresses: ["0xaaa2"],
    related: 1,
  },
  {
    id: 3,
    name: AmmName.Amm3,
    protocol: protocols[ProtocolName.Gamma],
    factoryAddresses: ["0xaaa3"],
  },
  {
    id: 4,
    name: AmmName.Amm4,
    protocol: protocols[ProtocolName.Delta],
    factoryAddresses: ["0xaaa4"],
  },
  {
    id: 13,
    name: AmmName.Amm13,
    protocol: protocols[ProtocolName.Alpha],
    factoryAddresses: ["0xaaa5"],
  },
  {
    id: 14,
    name: AmmName.Amm14,
    protocol: protocols[ProtocolName.Beta],
    factoryAddresses: ["0xaaa6"],
    related: 13,
  },
  {
    id: 997,
    name: AmmName.Amm16,
    protocol: protocols[ProtocolName.A],
    factoryAddresses: ["0xccc5"],
  },
  {
    id: -200,
    name: AmmName.Amm20,
    protocol: protocols[ProtocolName.B],
    factoryAddresses: ["0xccc5"],
  },
  {
    id: -201,
    name: AmmName.Amm20,
    protocol: protocols[ProtocolName.C],
    factoryAddresses: ["0xccc5"],
  },
  {
    id: 1003,
    name: AmmName.Amm24,
    protocol: protocols[ProtocolName.F],
    factoryAddresses: ["0xaaa7"],
  },
  {
    id: 1004,
    name: AmmName.Amm25,
    protocol: protocols[ProtocolName.A], // TEST
    factoryAddresses: ["0xaaa8"],
    related: 1003,
  },
];
