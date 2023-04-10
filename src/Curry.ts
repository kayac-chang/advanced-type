import { Drop } from "./Drop";
import { Length } from "./Length";

/**
 * `Curry` takes a function and returns a curried version of it.
 */
export type Curry<P extends any[], R> = <T extends any[]>(
  ...args: T
) => Drop<Length<T>, P> extends [] ? R : Curry<Drop<Length<T>, P>, R>;

export declare function curry<P extends any[], R>(
  fn: (...args: P) => R
): Curry<P, R>;

declare const test1: Curry<[number, string, boolean], void>;
test1(1, "2", true);
test1(1)("2", true);
test1(1, "2")(true);
test1(1)("2")(true);

declare const test2: Curry<[number, boolean, ...string[]], void>;
test2(1, true, "2", "3", "4");
test2(1)(true, "2", "3", "4");
test2(1, true)("2", "3", "4");
test2(1)(true)("2", "3", "4");
//@ts-expect-error
test2(1, true, "2")("3");
