export declare namespace predicate {
    const isTruthy: <V>(actual: V) => boolean;
    const equals: <V>(expected: V) => (actual: V) => boolean;
    const isGreaterThan: <V>(expected: V) => (actual: V) => boolean;
    const isGreaterThanOrEqual: <V>(expected: V) => (actual: V) => boolean;
    const isLessThan: <V>(expected: V) => (actual: V) => boolean;
    const isLessThanOrEqual: <V>(expected: V) => (actual: V) => boolean;
    const includes: (expected: any) => (actual: any) => any;
    const includesWord: (expected: string) => (actual: string) => boolean;
    const arrayCompareBy: (f: any) => ([x, ...xs]: any[]) => ([y, ...ys]: any[]) => any;
    const equalsToArray: ([x, ...xs]: any[]) => ([y, ...ys]: any[]) => any;
    const equalsByContainsToArray: ([x, ...xs]: any[]) => ([y, ...ys]: any[]) => any;
}
