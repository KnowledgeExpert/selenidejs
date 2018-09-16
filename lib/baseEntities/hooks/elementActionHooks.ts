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

import { Configuration } from '../configuration';
import { AfterElementActionHook } from './afterElementActionHook';
import { BeforeElementActionHook } from './beforeElementActionHook';


export function ElementActionHooks(target, methodName, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    /* tslint:disable:space-before-function-paren*/
    /* tslint:disable:no-invalid-this*/
    descriptor.value = async function () {
        let actionError;
        const configuration = this.driver.configuration as Configuration;
        await runBeforeHooks(configuration.beforeElementActionHooks, this, methodName);

        try {
            return await originalMethod.apply(this, arguments);
        } catch (error) {
            actionError = error;
            throw error;
        } finally {
            await runAfterHooks(configuration.afterElementActionHooks, actionError, this, methodName);
        }
    };
    /* tslint:enable:space-before-function-paren*/
    /* tslint:enable:no-invalid-this*/
}

async function runBeforeHooks(hooks: BeforeElementActionHook[], element, actionName) {
    for (const beforeHook of hooks) {
        try {
            await beforeHook(element, actionName);
        } catch (error) {
            logFailedHook(error, actionName);
        }
    }
}

async function runAfterHooks(hooks: AfterElementActionHook[], actionError, element, actionName) {
    for (const afterHook of hooks) {
        try {
            await afterHook(actionError ? actionError : null, element, actionName);
        } catch (error) {
            logFailedHook(error, actionName);
        }
    }
}

function logFailedHook(error: Error, actionName: string) {
    /* tslint:disable:no-console */
    console.warn(`
    Cannot perform hook on '${actionName}' action cause of:
    \n\tError message: ${error.message}
    \n\tError stacktrace: ${error.stack}`
    );
    /* tslint:enable:no-console*/
}
