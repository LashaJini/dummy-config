export enum ProtocolName {
  Alpha = "alpha",
  Beta = "beta",
  Gamma = "gamma",
  Delta = "delta",
  Epsilon = "epsilon",
  Zeta = "zeta",
  Eta = "eta",
  Theta = "theta",
  Iota = "iota",
  Kappa = "kappa",
  A = "A",
}

export type Protocol = {
  id: number;
  name: ProtocolName;
  hasPermanentPools: boolean;
  signature?: string;
};
