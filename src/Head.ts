import { Equal } from "./Equal";
import { Expect } from "./Expect";

/**
 * `Head` takes an array and returns its first element.
 */
type Head<Array extends any[]> = Array extends [infer H, ...any[]] ? H : never;

export type Test1 = Expect<Equal<Head<[1, 2, 3]>, 1>>; // 1
export type Test2 = Expect<Equal<Head<[string, 2, object]>, string>>; // string
