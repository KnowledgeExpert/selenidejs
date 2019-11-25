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

import { By, WebElement } from 'selenium-webdriver';
import { Collection } from '../collection';
import { Locator } from './locator';


export class ElementsInEachByLocator implements Locator<Promise<WebElement[]>> {

    constructor(
        private readonly by: By,
        private readonly collection: Collection
    ) {
        this.by = by;
        this.collection = collection;
    }

    async find(): Promise<WebElement[]> {
        const rootElements = await this.collection.getWebElements();
        const innerElements = [];
        for (const rootElement of rootElements) {
            const childs = await rootElement.findElements(this.by);
            innerElements.push(...(childs || []));
        }
        return innerElements;
    }

    toString(): string {
        return `${this.collection.toString()}.all(${this.by})`;
    }
}
