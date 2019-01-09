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
import { Utils } from '../utils';
import { Browser } from '../browser';
import { Element } from '../element';
import { Locator } from './locator';
import { SearchContext } from '../searchContext';


export class ByWebElementLocator implements Locator<Promise<WebElement>> {

    constructor(private readonly by: By,
                private readonly context: SearchContext) {
        this.by = by;
        this.context = context;
    }

    async find(): Promise<WebElement> {
        return this.context.findWebElement(this.by).catch(error => {
            throw new Error(`
            No elements found using ${this.toString()}
            Reason: ${error}
            `);
        });
    }

    toString(): string {  // todo: do we really need this toString()?
        return `${this.context.toString()}.find(${this.by})`;
    }
}
