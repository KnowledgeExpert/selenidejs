export class ConditionDoesNotMatchError extends Error {
    constructor(message: string) {
        super(message);
    }
}