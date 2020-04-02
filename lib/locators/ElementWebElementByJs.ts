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

import { WebElement } from 'selenium-webdriver';
import { Element } from '../element';
import { Locator } from './locator';


export class ElementWebElementByJs implements Locator<Promise<WebElement>> {

    constructor(
        private readonly context: Element,
        // tslint:disable-next-line:ban-types
        private readonly script: (string | Function),
        private readonly args: any[]
    ) {
        this.context = context;
        this.script = script;
        this.args = args;
    }

    async find(): Promise<WebElement> {
        const result = await this.context.executeScript(this.script, this.args);
        if (!(result instanceof WebElement)) {
            throw new Error(
                `You should return HTMLElement object from script, but was: ${result ? result.toString() : result}`
            );
        }
        return result;
    }

    toString(): string {
        return `${this.context.toString()}.element(${this.script.toString()})`;
    }
}
