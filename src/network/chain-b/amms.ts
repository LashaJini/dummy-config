import { AmmName } from "../../amms";
import { ProtocolName, protocols } from "../../protocols";

export const amms = [
  {
    id: 5,
    name: AmmName.Amm5,
    protocol: protocols[ProtocolName.Alpha],
    factoryAddresses: ["0xbbb1"],
  },
  {
    id: 6,
    name: AmmName.Amm6,
    protocol: protocols[ProtocolName.Epsilon],
    factoryAddresses: ["0xbbb2"],
    related: 5,
  },
  {
    id: 7,
    name: AmmName.Amm7,
    protocol: protocols[ProtocolName.Zeta],
    factoryAddresses: ["0xbbb3"],
  },
  {
    id: 8,
    name: AmmName.Amm8,
    protocol: protocols[ProtocolName.Eta],
    factoryAddresses: ["0xbbb4"],
  },
  {
    id: 15,
    name: AmmName.Amm15,
    protocol: protocols[ProtocolName.Zeta],
    factoryAddresses: ["0xbbb5"],
  },
  {
    id: -500,
    name: AmmName.Amm19,
    protocol: protocols[ProtocolName.Zeta],
    factoryAddresses: ["0xbbb5"],
  },
  {
    id: 1000,
    name: AmmName.Amm21,
    protocol: protocols[ProtocolName.D],
    factoryAddresses: ["0xbbb6"],
  },
  {
    id: 1001,
    name: AmmName.Amm22,
    protocol: protocols[ProtocolName.E],
    factoryAddresses: ["0xbbb7"],
  },
];
