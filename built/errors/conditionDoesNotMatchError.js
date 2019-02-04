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
// todo: so far we don't use this Error in all "condition failed" cases... handle it somehow...
class ConditionNotMatchedError extends Error {
    constructor(message = 'condition not matched') {
        super(message);
    }
}
exports.ConditionNotMatchedError = ConditionNotMatchedError;
// todo: consider deleting
class FailedToMatchConditionWithReasonError extends ConditionNotMatchedError {
    constructor(expected, reason) {
        super(`
            Failed to match: ${expected}
            Reason: ${reason}`);
    }
}
exports.FailedToMatchConditionWithReasonError = FailedToMatchConditionWithReasonError;
//# sourceMappingURL=conditionDoesNotMatchError.js.map