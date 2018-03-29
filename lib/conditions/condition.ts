import {ConditionDoesNotMatchError} from "../errors/conditionDoesNotMatchError";

export class Condition<T> {
    readonly matches: (entity: T) => Promise<T>;
    readonly toString: () => string;

    constructor(params: { toString: () => string, matches: (entity: T) => Promise<T> }) {
        this.toString = params.toString;
        this.matches = params.matches;
    }

    public and<T>(...conditions: Condition<T>[]): Condition<T> {
        return new Condition<T>({
            toString: function () {
                return conditions.map(condition => condition.toString()).join(' AND ');
            },
            matches: async function (entity: T) {
                try {
                    await Promise.all(conditions.map(async (condition) => await condition.matches(entity)));
                    return entity;
                } catch (ignored) {
                }
                throw new ConditionDoesNotMatchError(this.toString());
            }
        });
    }

    public static not<T>(condition: Condition<T>): Condition<T> {
        return new Condition<T>({
            toString: function () {
                return `not ${condition.toString()}`;
            },
            matches: async function (entity: T) {
                try {
                    await condition.matches(entity);
                } catch (error) {
                    return entity;
                }
                throw new ConditionDoesNotMatchError(this.toString());
            }
        });
    }
}