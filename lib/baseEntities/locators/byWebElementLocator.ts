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
import { Utils } from '../../utils';
import { Driver } from '../driver';
import { Element } from '../element';
import { Locator } from './locator';


export class ByWebElementLocator implements Locator<Promise<WebElement>> {

    private readonly by: By;
    private readonly searchContext: Element | Driver;

    constructor(by: By, searchContext: Element | Driver) {
        this.by = by;
        this.searchContext = searchContext;
    }

    async find(): Promise<WebElement> {
        const context = Utils.isDriver(this.searchContext)
            ? (this.searchContext as Driver).webdriver
            : await (this.searchContext as Element).getWebElement();
        const elements = await context.findElements(this.by);

        if (elements.length === 0) {
            throw new Error(`No elements found using ${this.toString()}`);
        }

        return elements[0];
    }

    toString(): string {
        return `${Utils.isDriver(this.searchContext) ? 'browser' : this.searchContext.toString()}.find(${this.by})`;
    }

}
