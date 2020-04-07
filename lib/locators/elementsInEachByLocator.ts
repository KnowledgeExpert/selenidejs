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
import { Collection } from '../collection';
import { Configuration } from '../configuration';
import { Element } from '../element';
import { CashedWebElementLocator } from './cashedWebElementLocator';
import { Locator } from './locator';


export class ElementsInEachByLocator implements Locator<Promise<WebElement[]>> {

    constructor(
        private readonly searchFunction: (element: Element) => Collection,
        private readonly collection: Collection,
        private readonly configuration: Configuration
    ) {
        this.searchFunction = searchFunction;
        this.collection = collection;
    }

    async find(): Promise<WebElement[]> {
        const rootElements = await this.collection.getWebElements();
        const innerElements = [];
        for (const rootElement of rootElements) {
            const wrappedRootElement = new Element(new CashedWebElementLocator(rootElement), this.configuration);
            const childElements = await this.searchFunction(wrappedRootElement).getWebElements();
            innerElements.push(...childElements);
        }
        return innerElements;
    }

    toString(): string {
        return `${this.collection.toString()}.collected(${this.searchFunction.toString()})`;
    }
}
