import { Equal } from "./Equal";
import { Expect } from "./Expect";

/**
 * `Length` takes an array and returns its length.
 */
type Length<T extends any[]> = T["length"];

export type Test1 = Expect<Equal<Length<[1, 2, 3]>, 3>>; // 3
export type Test2 = Expect<Equal<Length<[string, 2, object]>, 3>>; // 3
export type Test3 = Expect<Equal<Length<[]>, 0>>; // 0
export type Test4 = Expect<Equal<Length<[1]>, 1>>; // 1
