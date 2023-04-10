import type { Equal } from "./Equal";
import type { Expect } from "./Expect";

/**
 * `Tail` takes an array and returns all but the first element.
 */
export type Tail<Array extends any[]> = Array extends [any, ...infer T]
  ? T
  : [];

export type Test1 = Expect<Equal<Tail<[1, 2, 3]>, [2, 3]>>;
export type Test2 = Expect<Equal<Tail<[string, 2, object]>, [2, object]>>;
export type Test3 = Expect<Equal<Tail<[]>, []>>;
export type Test4 = Expect<Equal<Tail<[1]>, []>>;
