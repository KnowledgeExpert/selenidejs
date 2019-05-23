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

import {WebElement} from 'selenium-webdriver';
import {Locator} from './locator';
import {Collection} from '../collection';


export class ByLastWebElementLocator implements Locator<Promise<WebElement>> {

    private readonly searchContext: Collection;

    constructor(searchContext: Collection) {
        this.searchContext = searchContext;
    }

    async find(): Promise<WebElement> {
        const elements = await this.searchContext.getWebElements();
        return elements[elements.length - 1];
    }

    toString(): string {
        return `${this.searchContext.toString()}.last()`;
    }

}
