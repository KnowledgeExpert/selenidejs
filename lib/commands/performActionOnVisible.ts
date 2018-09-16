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

import { Driver } from '..';
import { Element } from '../baseEntities/element';
import { OnElementFailureHook } from '../baseEntities/hooks/onElementFailureHook';
import { OnFailureHook } from '../baseEntities/hooks/onFailureHook';
import { be } from '../conditions/helpers/be';
import { CannotPerformActionError } from '../errors/cannotPerformActionError';
import { Command } from './command';

export class PerformActionOnVisible implements Command<Element> {
    async perform(element: Element, ...args: any[]): Promise<void> {
        /* tslint:disable:no-string-literal */
        const driver = element['driver'];
        /* tslint:enable:no-string-literal */
        const configuration = driver.configuration;
        const actionName = args[0];
        const action = args[1];
        const actionArgumentsStartIndex = 2;
        const actionArguments = args.slice(actionArgumentsStartIndex);

        try {
            await action(element, actionArguments);
        } catch (ignored) {
            await element.should(be.visible);
            try {
                await action(element, actionArguments);
            } catch (error) {
                error.message =
                    `For element ${element.toString()}: cannot perform ${actionName} reason: ${error.message}`;

                await this.executeOnFailureHooks(error, configuration.onFailureHooks, driver);
                await this.executeOnElementFailureHooks(error, element, configuration.onElementFailureHooks, driver);

                throw new CannotPerformActionError(error.message);
            }
        }
    }

    private async executeOnFailureHooks(error: Error, hooks: OnFailureHook[], driver: Driver) {
        for (const onFailureHook of hooks) {
            await this.tryExecuteHook(onFailureHook.bind(null, error, driver));
        }
    }

    private async executeOnElementFailureHooks(
        error: Error, element: Element, hooks: OnElementFailureHook[], driver: Driver
    ) {
        for (const onElementFailureHook of hooks) {
            await this.tryExecuteHook(onElementFailureHook.bind(null, error, driver, element));
        }
    }

    private async tryExecuteHook(hook) {
        try {
            await hook();
        } catch (error) {
            /* tslint:disable:no-console */
            console.warn(
                `Cannot perform hook '${hook.toString()}' function cause of:
                            Error message: ${error.message}
                            Error stacktrace: ${error.stackTrace}`
            );
            /* tslint:enable:no-console */
        }
    }

}
