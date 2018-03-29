export class CannotPerformActionError extends Error {
    constructor(message: string) {
        super(message);
    }
}