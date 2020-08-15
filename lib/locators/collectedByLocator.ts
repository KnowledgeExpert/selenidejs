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
import { its } from '..';
import { Collection } from '../collection';
import { Element } from '../element';
import { Locator } from './locator';


export class CollectedByLocator implements Locator<Promise<WebElement[]>> {

    constructor(
        private readonly searchFunction: (element: Element) => Element | Collection,
        private readonly collection: Collection,
    ) {
        this.searchFunction = searchFunction;
        this.collection = collection;
    }

    async find(): Promise<WebElement[]> {
        const result = [];
        const size = await this.collection.get(its.size);
        for (let i = 0; i < size; i++) {
            const rootElement = this.collection.elementAt(i);
            const target = this.searchFunction(rootElement);
            if (target instanceof Element) {
                try {
                    const sibling = await target.getWebElement();
                    result.push(sibling);
                } catch (err) {
                    throw new Error(`Cannot find ${target.toString()}\n\t${err.message}`);
                }
            } else {
                const siblings = await target.getWebElements();
                result.push(...siblings);

            }
        }
        return result;
    }

    toString(): string {
        return `${this.collection.toString()}.collected(${this.searchFunction.toString()})`;
    }
}
