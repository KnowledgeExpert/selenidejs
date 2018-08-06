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
const be_1 = require("../conditions/helpers/be");
const cannotPerformActionError_1 = require("../errors/cannotPerformActionError");
class PerformActionOnVisible {
    async perform(element, ...args) {
        const actionName = args[0];
        const action = args[1];
        const actionArguments = args.slice(2);
        const config = element.driver.config;
        try {
            // console.log('try action')
            await action(element, actionArguments);
            // console.log('try action - OK')
        }
        catch (ignored) {
            // console.log('try action - FAILED, wait until visible')
            await element.should(be_1.be.visible);
            // console.log('try action - FAILED, wait until visible - OK')
            try {
                // console.log('try action again')
                await action(element, actionArguments);
                // console.log('try action again')
            }
            catch (error) {
                error.message = `For element ${element.toString()}: cannot perform ${actionName}
                \treason: ${error.message}`;
                for (let func of config.onFailureHooks) {
                    // console.log('call onFailure hooks in action, quantity ', config.onFailureHooks.length)
                    try {
                        await func(error, element);
                    }
                    catch (hookError) {
                        console.error(`Cannot perform hook '${func.toString()}' function cause of:
                            \tError message: ${hookError.message}
                            \tError stacktrace: ${hookError.stackTrace}`);
                    }
                }
                throw new cannotPerformActionError_1.CannotPerformActionError(error.message);
            }
        }
    }
}
exports.PerformActionOnVisible = PerformActionOnVisible;
//# sourceMappingURL=performActionOnVisible.js.map