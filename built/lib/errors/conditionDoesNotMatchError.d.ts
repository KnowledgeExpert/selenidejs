export declare class ConditionNotMatchedError extends Error {
    constructor(message?: string);
}
export declare class FailedToMatchConditionWithReasonError extends ConditionNotMatchedError {
    constructor(expected: string, reason: Error);
}
