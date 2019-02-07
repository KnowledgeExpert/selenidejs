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
import { CollectionCondition, ElementCondition } from './conditions';
import { Configuration } from './configuration';
import { Element } from './element';
import { ByIndexWebElementLocator } from './locators/byIndexWebElementLocator';
import { CashedWebElementLocator } from './locators/cashedWebElementLocator';
import { FilteredByConditionWebElementsLocator } from './locators/filteredByConditionWebElementsLocator';
import { Locator } from './locators/locator';
import { Condition, Query, Wait } from './wait';

export class Collection {

    private readonly wait: Wait<Collection>;

    constructor(private readonly locator: Locator<Promise<WebElement[]>>,
                private readonly configuration: Configuration) {
        this.locator = locator;
        this.configuration = configuration;
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
        return Condition.asPredicate(condition)(this);
    }

    async matchesNot(condition: CollectionCondition): Promise<boolean> {
        return this.matches(Condition.not(condition));
    }

    /* Others... */

    elementAt(index: number): Element {
        return new Element(new ByIndexWebElementLocator(index, this), this.configuration);
    }

    first(): Element {
        return this.elementAt(0);
    }

    filteredBy(condition: ElementCondition): Collection { // todo: think on renaming to filteredBy
        return new Collection(new FilteredByConditionWebElementsLocator(condition, this), this.configuration);
    }

    elementBy(condition: ElementCondition): Element {
        return new Collection(new FilteredByConditionWebElementsLocator(condition, this), this.configuration)
            .elementAt(0);  // todo: implement through separate ByFind...Locator
    }

    async get<R>(query: Query<Collection, R>, timeout: number = this.configuration.timeout): Promise<R> {
        return this.wait.query(query, timeout);
    }

    async getWebElements(): Promise<WebElement[]> {
        return this.locator.find();
    }

    toString() {
        return this.locator.toString();
    }
}
