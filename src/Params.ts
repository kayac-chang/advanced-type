import type { Equal } from "./Equal";
import type { Expect } from "./Expect";

/**
 * `Params` takes a function type and returns its parameters as a tuple.
 */
export type Params<F extends (...args: any[]) => any> = F extends (
  ...args: infer P
) => any
  ? P
  : never;

export type Test1 = Expect<Equal<Params<() => void>, []>>; // []
export type Test2 = Expect<Equal<Params<(arg: number) => void>, [number]>>;
