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
import { ElementCondition } from '../conditions';
import { Collection } from '../collection';
import { Locator } from './locator';
import { query } from '../queries';


export class ElementByConditionWebElementLocator implements Locator<Promise<WebElement>> {

    constructor(private readonly condition: ElementCondition,
                private readonly collection: Collection) {
        this.condition = condition;
        this.collection = collection;
    }

    async find(): Promise<WebElement> {
        const arrayOfCachedElements = await this.collection.getAsCashedArray();

        for (const element of arrayOfCachedElements) {
            if (await element.matching(this.condition)) {
                return element.getWebElement();
            }
        }

        const outerHTMLs: string[] = [];
        for (const element of arrayOfCachedElements) {
            outerHTMLs.push(await query.outerHtml(element));  // todo: can it fail with "stale element error"?
        }
        throw new Error(
            `Cannot find element by condition «${this.condition}» ` +
            `from webelements collection:\n[${outerHTMLs}]`
        );
    }

    toString(): string {
        return `${this.collection.toString()}.elementBy(${this.condition})`;
    }

}
