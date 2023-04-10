import type { Equal } from "./Equal";
import type { Expect } from "./Expect";
import type { Length } from "./Length";
import type { Prepend } from "./Prepend";
import type { Tail } from "./Tail";

/**
 * `Drop` takes a number and an array and returns a new array with the first N elements removed.
 */
export type Drop<
  Num extends number,
  T extends any[],
  I extends any[] = []
> = Length<I> extends Num ? T : Drop<Num, Tail<T>, Prepend<any, I>>;

export type Test1 = Expect<Equal<Drop<1, [1, 2, 3]>, [2, 3]>>; // [2, 3]
export type Test2 = Expect<Equal<Drop<2, [1, 2, 3]>, [3]>>; // [3]
export type Test3 = Expect<Equal<Drop<3, [1, 2, 3]>, []>>; // []
export type Test4 = Expect<Equal<Drop<4, [1, 2, 3]>, []>>; // []
export type Test5 = Expect<Equal<Drop<0, [1, 2, 3]>, [1, 2, 3]>>; // [1, 2, 3]
