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
import { Locator } from './locator';
import { Browser } from '../browser';


export class BrowserWebElementsByLocator implements Locator<Promise<WebElement[]>> {

    constructor(private readonly by: By,
                private readonly browser: Browser) {
        this.by = by;
        this.browser = browser;
    }

    async find(): Promise<WebElement[]> {
        return this.browser.driver.findElements(this.by);
    }

    toString(): string {
        return `${this.browser}.all(${this.by})`;
    }
}
