export declare class ConditionDoesNotMatchError extends Error {
    constructor(message: string);
}
export declare class FailedToMatchConditionWithReasonError extends ConditionDoesNotMatchError {
    constructor(expected: string, reason: Error);
}
