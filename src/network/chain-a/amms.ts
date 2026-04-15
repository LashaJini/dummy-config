import { AmmName } from "../../amms";
import { ProtocolName, protocols } from "../../protocols";

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
];
