import { Expect } from "./Expect";

/**
 * `HasTail` takes an array and returns true if it has more than one element.
 */
//prettier-ignore
type HasTail<Array extends any[]> = Array extends ([] | [any]) ? false : true;

export type Test1 = Expect<HasTail<[1, 2, 3]>>; // true
export type Test2 = Expect<HasTail<[string, 2, object]>>; // true
//@ts-expect-error
export type Test3 = Expect<HasTail<[]>>; // false
//@ts-expect-error
export type Test4 = Expect<HasTail<[1]>>; // false
