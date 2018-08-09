export declare class Condition<T> {
    static not<T>(condition: Condition<T>): Condition<T>;
    readonly matches: (entity: T) => Promise<T>;
    readonly toString: () => string;
    constructor(params: {
        matches: (entity: T) => Promise<T>;
        toString: () => string;
    });
    and<T>(...conditions: Array<Condition<T>>): Condition<T>;
}
