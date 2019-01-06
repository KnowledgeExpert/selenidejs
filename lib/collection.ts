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

import { WebDriver, WebElement } from 'selenium-webdriver';
import { CollectionCondition } from './conditions';
import { ElementCondition } from './conditions';
import { Browser } from './browser';
import { Configuration } from './configuration';
import { Element } from './element';
import { ByIndexedWebElementLocator } from './locators/byIndexedWebElementLocator';
import { CashedWebElementLocator } from './locators/cashedWebElementLocator';
import { FilteredByConditionWebElementsLocator } from './locators/filteredByConditionWebElementsLocator';
import { Locator } from './locators/locator';
import { Condition, Wait } from './wait';

export class Collection {

    private readonly wait: Wait<Collection>;

    constructor(private readonly locator: Locator<Promise<WebElement[]>>,
                private readonly configuration: Configuration) {
        this.locator = locator;
        this.wait = new Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
    }

    async getAsCashedArray(): Promise<Element[]> {
        return (await this.getWebElements())
            .map((it, index) => new Element(
                new CashedWebElementLocator(it, `${this}[${index}]`), this.configuration)
            );
    }

    /* With Conditions */

    async should(condition: CollectionCondition, timeout: number = this.configuration.timeout): Promise<Collection> {
        this.wait.until(condition, timeout);
        return this;
    }

    async shouldNot(condition: CollectionCondition, timeout?: number): Promise<Collection> {
        this.should(Condition.not(condition), timeout);
        return this;
    }

    async waitUntil(condition: CollectionCondition, timeout: number = this.configuration.timeout): Promise<boolean> {
        return this.wait.until(condition, timeout);
    }

    async waitUntilNot(condition: CollectionCondition, timeout: number = this.configuration.timeout): Promise<boolean> {
        return this.wait.until(Condition.not(condition), timeout);
    }

    async matches(condition: CollectionCondition): Promise<boolean> {
        return Condition.toBoolean(condition).call(this);
    }

    async matchesNot(condition: CollectionCondition): Promise<boolean> {
        return this.matches(Condition.not(condition));
    }

    /* Others... */

    get(index: number): Element {  // todo refactor to [index: number]
        return new Element(new ByIndexedWebElementLocator(index, this), this.configuration);
    }

    first(): Element {
        return this.get(0);
    }

    filterBy(condition: ElementCondition): Collection {
        return new Collection(new FilteredByConditionWebElementsLocator(condition, this), this.configuration);
    }

    findBy(condition: ElementCondition): Element {
        return new Collection(new FilteredByConditionWebElementsLocator(condition, this), this.configuration)
            .get(0);  // todo: implement through separate ByFind...Locator
    }

    // todo: do we need a count alias for size? or even count instead of size?
    /*
     * e.g. emails.size() sounds much more weird than emails.count() or emails.number()
     */
    async size(): Promise<number> {
        return (await this.getWebElements()).length;
    }

    async getWebElements(): Promise<WebElement[]> {
        return this.locator.find();
    }

    toString() {
        return this.locator.toString();
    }
}
