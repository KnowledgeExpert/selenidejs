export declare class Condition<T> {
    readonly matches: (entity: T) => Promise<T>;
    readonly toString: () => string;
    constructor(params: {
        matches: (entity: T) => Promise<T>;
        toString: () => string;
    });
    and<T>(...conditions: Condition<T>[]): Condition<T>;
    static not<T>(condition: Condition<T>): Condition<T>;
}
