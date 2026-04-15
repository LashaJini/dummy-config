import { Protocol } from "../protocols";

export enum AmmName {
  Amm1 = "amm-1",
  Amm2 = "amm-2",
  Amm3 = "amm-3",
  Amm4 = "amm-4",
  Amm5 = "amm-5",
  Amm6 = "amm-6",
  Amm7 = "amm-7",
  Amm8 = "amm-8",
  Amm9 = "amm-9",
  Amm10 = "amm-10",
  Amm11 = "amm-11",
  Amm12 = "amm-12",
  Amm13 = "amm-13",
  Amm14 = "amm-14",
  Amm15 = "amm-15",
  Amm16 = "amm-16",
  Amm17 = "amm-17",
  Amm18 = "amm-18",
  Amm19 = "amm-19",
  Amm20 = "amm-20",
  Amm21 = "amm-21",
  Amm22 = "amm-22",
  Amm23 = "amm-23",
}

export interface Amm {
  id: number;
  name: AmmName;
  protocol: Protocol;
  factoryAddresses?: string[];
  related?: number;
  routerAddress?: string;
}
