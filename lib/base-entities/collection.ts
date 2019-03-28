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

import {Locator} from './locators/locator';
import {ByIndexedWebElementLocator} from './locators/byIndexedWebElementLocator';
import {ByFilteredWebElementsLocator} from './locators/byFilteredWebElementsLocator';
import {By, WebElement} from 'selenium-webdriver';
import {Element} from './element';
import {CollectionCondition} from '../conditions/collectionCondition';
import {ElementCondition} from '../conditions/elementCondition';
import {Wait} from '../wait';
import {ByWebElementsLocator} from './locators/byWebElementsLocator';
import {With} from '../locators/with';
import {Condition} from '../conditions/condition';
import { Utils, toBy } from '../utils';
import { be } from '..';


export class Collection {

    private readonly locator: Locator<Promise<WebElement[]>>;

    constructor(locator: Locator<Promise<WebElement[]>>) {
        this.locator = locator;
    }

    async should(condition: CollectionCondition, timeout?: number): Promise<Collection> {
        return timeout ? await Wait.shouldMatch(this, condition, timeout) : await Wait.shouldMatch(this, condition);
    }

    async shouldNot(condition: CollectionCondition, timeout?: number): Promise<Collection> {
        return await this.should(Condition.not(condition), timeout);
    }

    async is(condition: CollectionCondition, timeout?: number): Promise<boolean> {
        return timeout ? await Wait.isMatch(this, condition, timeout) : await Wait.isMatch(this, condition);
    }

    async isNot(condition: CollectionCondition, timeout?: number): Promise<boolean> {
        return await this.is(Condition.not(condition), timeout);
    }

    async matching(condition: CollectionCondition, timeout?: number): Promise<boolean> {
        return timeout ? await Wait.isMatch(this, condition, timeout) : await Wait.isMatch(this, condition);
    }

    async matchingNot(condition: CollectionCondition, timeout?: number): Promise<boolean> {
        return await this.is(Condition.not(condition), timeout);
    }

    get(index: number): Element {
        return new Element(new ByIndexedWebElementLocator(index, this));
    }

    first(): Element {
        return this.get(0);
    }

    filter(condition: ElementCondition): Collection {
        return new Collection(new ByFilteredWebElementsLocator(condition, this));
    }

    filterBy(condition: ElementCondition): Collection {
        return this.filter(condition);
    }

    findBy(condition: ElementCondition): Element {
        return new Collection(new ByFilteredWebElementsLocator(condition, this)).get(0);
    }

    async indexOfElementBy(condition: ElementCondition): Promise<number> {
        await this.findBy(condition).should(be.visible);
        const webElements = await this.getWebElements();

        for (let i = 0; i < webElements.length; i++) {
            try {
                await condition.matches(this.get(i));
                return i;
            } catch (ignored) {
            }
        }
    }

    async size(): Promise<number> {
        return (await this.getWebElements()).length;
    }

    async getWebElements(): Promise<WebElement[]> {
        return await this.locator.find();
    }

    toString() {
        return this.locator.toString();
    }
}

export function all(cssOrXpathOrBy: string | By): Collection {
    return new Collection(new ByWebElementsLocator(toBy(cssOrXpathOrBy)));
}
