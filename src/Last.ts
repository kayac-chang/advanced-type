import type { Equal } from "./Equal";
import type { Expect } from "./Expect";

/**
 * `Last` takes an array and returns its last element.
 */
export type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

export type Test1 = Expect<Equal<Last<[1, 2, 3]>, 3>>; // 3
export type Test2 = Expect<Equal<Last<[string, 2, object]>, object>>; // object
export type Test3 = Expect<Equal<Last<[]>, never>>; // never
export type Test4 = Expect<Equal<Last<[1]>, 1>>; // 1
