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
import { Locator } from './locator';

export class CashedWebElementLocator implements Locator<Promise<WebElement>> {

    constructor(private readonly cash: WebElement,
                private readonly description: string) {
        this.cash = cash;
        this.description = description;
    }

    async find(): Promise<WebElement> {
        return this.cash;
    }

    toString(): string {  // todo: do we really need this toString()?
        return this.description;
    }
}
