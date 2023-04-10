import type { Equal } from "./Equal";
import type { Expect } from "./Expect";

/**
 * `Prepend` takes an element and an array and returns a new array with the element prepended.
 */
export type Prepend<E, T extends any[]> = [E, ...T];

export type Test1 = Expect<Equal<Prepend<1, [2, 3]>, [1, 2, 3]>>;
export type Test2 = Expect<Equal<Prepend<1, []>, [1]>>;
export type Test3 = Expect<Equal<Prepend<1, [2]>, [1, 2]>>;
export type Test4 = Expect<
  Equal<
    Prepend<1, [2, 3, 4, 5, 6, 7, 8, 9, 10]>,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  >
>;
