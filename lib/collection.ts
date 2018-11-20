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
import { Actions } from './actions';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
import { ElementsBuilder } from './elementsBuilder';
import { HookExecutor } from './hooks/hookExecutor';
import { Locator } from './locators/locator';
import { Wait } from './wait';


export class Collection {

    private readonly driver: Driver;
    private readonly locator: Locator<Promise<WebElement[]>> | Locator<WebElement[]>;
    private readonly wait: Wait<Collection>;

    constructor(locator: Locator<Promise<WebElement[]>> | Locator<WebElement[]>, driver: Driver) {
        this.locator = locator;
        this.driver = driver;
        this.wait = new Wait(this, this.driver.configuration, new HookExecutor<Collection>(driver, this));
    }

    async should(condition: Condition<Collection>, timeout?: number): Promise<Collection> {
        return this.wait.shouldMatch(condition, timeout);
    }

    async shouldNot(condition: Condition<Collection>, timeout?: number): Promise<Collection> {
        return this.should(Condition.not(condition), timeout);
    }

    async is(condition: Condition<Collection>, timeout?: number): Promise<boolean> {
        return this.wait.isMatch(condition, timeout);
    }

    async isNot(condition: Condition<Collection>, timeout?: number): Promise<boolean> {
        return this.is(Condition.not(condition), timeout);
    }

    get(index: number): Element {
        return ElementsBuilder.nth(index)(this);
    }

    first(): Element {
        return this.get(0);
    }

    filter(condition: Condition<Element>): Collection {
        return ElementsBuilder.filtered(condition)(this);
    }

    filterBy(condition: Condition<Element>): Collection {
        return this.filter(condition);
    }

    findBy(condition: Condition<Element>): Element {
        return ElementsBuilder.find(condition)(this);
    }

    async size(): Promise<number> {
        return Actions.size(this);
    }

    async getWebElements(): Promise<WebElement[]> {
        return this.locator.find();
    }

    toString() {
        return this.locator.toString();
    }

}
