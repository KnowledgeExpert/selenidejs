"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const conditionDoesNotMatchError_1 = require("./errors/conditionDoesNotMatchError");
/* tslint:disable:space-before-function-paren */
class Condition {
    constructor(description, func) {
        this.func = func;
        this.description = description;
    }
    static create(description, func) {
        return new Condition(description, func);
    }
    static not(condition) {
        const description = `not ${condition.description}`;
        const func = async (entity) => {
            await condition.func(entity).then(_ => {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
            }, ignored => {
            });
        };
        return Condition.create(description, func);
    }
    async matches(entity) {
        await this.func(entity).catch(error => {
            const message = error.message;
            if (!(error instanceof conditionDoesNotMatchError_1.ConditionDoesNotMatchError) || !error.message) {
                // if selenium OR element finding error was thrown OR my error without message
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${entity.toString()} should ${this.toString()}`);
            }
            // im not satisfied and provide my custom error
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`${entity.toString()} should ${this.toString()}, ${message}`);
        });
    }
    and(...conditions) {
        const toStrings = [this.toString(), conditions.map(condition => condition.toString())];
        const allConditions = [this, ...conditions];
        const toString = toStrings.join(' AND ');
        const newFunc = async (entity) => {
            for (const condition of allConditions) {
                await condition.func(entity)
                    .catch(error => {
                    throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
                });
            }
        };
        return Condition.create(toString, newFunc);
    }
    toString() {
        return this.description;
    }
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map