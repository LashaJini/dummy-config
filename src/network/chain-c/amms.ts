import { AmmName } from "../../amms";
import { ProtocolName, protocols } from "../../protocols";

export const amms = [
  {
    id: 9,
    name: AmmName.Amm9,
    protocol: protocols[ProtocolName.Gamma],
    factoryAddresses: ["0xccc1"],
  },
  {
    id: 10,
    name: AmmName.Amm10,
    protocol: protocols[ProtocolName.Theta],
    factoryAddresses: ["0xccc2"],
  },
  {
    id: 11,
    name: AmmName.Amm11,
    protocol: protocols[ProtocolName.Alpha],
    factoryAddresses: ["0xccc3"],
    related: 9,
  },
  {
    id: 12,
    name: AmmName.Amm12,
    protocol: protocols[ProtocolName.Beta],
    factoryAddresses: ["0xccc4"],
  },
  {
    id: 998,
    name: AmmName.Amm17,
    protocol: protocols[ProtocolName.A],
    factoryAddresses: ["0xccc5"],
  },
  {
    id: 999,
    name: AmmName.Amm18,
    protocol: protocols[ProtocolName.A],
    factoryAddresses: ["0xccc5"],
  },
  {
    id: 1111,
    name: AmmName.Amm23,
    protocol: protocols[ProtocolName.D],
    factoryAddresses: ["0xccc6"],
  },
];
