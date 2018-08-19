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

import { Element } from '../baseEntities/element';
import { be } from '../conditions/helpers/be';
import { CannotPerformActionError } from '../errors/cannotPerformActionError';
import { Command } from './command';

export class ActionPerformer implements Command<Element> {
    async perform(element: Element, ...args: any[]): Promise<void> {
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
                await this.executeOnFailureHooks(element, error);

                throw new CannotPerformActionError(error.message);
            }
        }
    }

    private async executeOnFailureHooks(element: Element, error): Promise<void> {
        const config = element.driver.config;

        for (const func of config.onFailureHooks) {
            try {
                await func(error, element);
            } catch (hookError) {
                /* tslint:disable:no-console */
                console.warn(
                    `Cannot perform hook '${func.toString()}' function cause of:
                                Error message: ${hookError.message}
                                Error stacktrace: ${hookError.stackTrace}`);
                /* tslint:enable:no-console */
            }
        }
    }
}
