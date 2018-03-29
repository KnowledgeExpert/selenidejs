"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionDoesNotMatchError_1 = require("../errors/conditionDoesNotMatchError");
class Condition {
    constructor(params) {
        this.toString = params.toString;
        this.matches = params.matches;
    }
    and(...conditions) {
        return new Condition({
            toString: function () {
                return conditions.map(condition => condition.toString()).join(' AND ');
            },
            matches: async function (entity) {
                try {
                    await Promise.all(conditions.map(async (condition) => await condition.matches(entity)));
                    return entity;
                }
                catch (ignored) {
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
            }
        });
    }
    static not(condition) {
        return new Condition({
            toString: function () {
                return `not ${condition.toString()}`;
            },
            matches: async function (entity) {
                try {
                    await condition.matches(entity);
                }
                catch (error) {
                    return entity;
                }
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(this.toString());
            }
        });
    }
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map