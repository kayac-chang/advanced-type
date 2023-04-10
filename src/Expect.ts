/**
 * `Expect` takes one type parameter and only type-checks if it is true.
 */
export type Expect<T extends true> = T;

export type Test1 = Expect<true>;
//@ts-expect-error
export type Test2 = Expect<false>; // Error
//@ts-expect-error
export type Test3 = Expect<1>; // Error
//@ts-expect-error
export type Test4 = Expect<"string">; // Error
//@ts-expect-error
export type Test5 = Expect<[]>; // Error
//@ts-expect-error
export type Test6 = Expect<{}>; // Error
