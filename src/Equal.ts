import type { Expect } from "./Expect";

/**
 * `Equal` takes 2 types and returns true if they are the same.
 */
export type Equal<A, B> = (<T>() => T extends A ? 1 : 0) extends <
  T
>() => T extends B ? 1 : 0
  ? true
  : false;

export type Test1 = Expect<Equal<1, 1>>; // true
//@ts-expect-error
export type Test2 = Expect<Equal<1, 2>>; // false
//@ts-expect-error
export type Test3 = Expect<Equal<1, "string">>; // false
//@ts-expect-error
export type Test4 = Expect<Equal<1, 1 | 2>>; // false
export type Test5 = Expect<Equal<1 | 2, 1 | 2>>; // true
export type Test6 = Expect<Equal<[], []>>; // true
//@ts-expect-error
export type Test7 = Expect<Equal<[1], [2]>>; // false
