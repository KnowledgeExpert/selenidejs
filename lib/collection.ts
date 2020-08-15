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
import { ElementCondition } from './conditions';
import { Configuration } from './configuration';
import { Element } from './element';
import { Assertable, Entity, Matchable } from './entity';
import { ElementByConditionWebElementLocator } from './locators/byConditionWebElementLocator';
import { ByIndexWebElementLocator } from './locators/byIndexWebElementLocator';
import { CashedWebElementLocator } from './locators/cashedWebElementLocator';
import { CollectedByLocator } from './locators/collectedByLocator';
import { FilteredByConditionWebElementsLocator } from './locators/filteredByConditionWebElementsLocator';
import { Locator } from './locators/locator';
import { SlicedWebElementsLocator } from './locators/slicedWebElementsLocator';
import { Condition } from './wait';


export class Collection extends Entity implements Assertable, Matchable {

    private readonly locator: Locator<Promise<WebElement[]>>;

    constructor(locator: Locator<Promise<WebElement[]>>, configuration: Configuration) {
        super(configuration);
        this.locator = locator;
    }

    with(customConfig: Partial<Configuration>): Collection {
        return new Collection(this.locator, new Configuration({ ...this.configuration, ...customConfig }));
    }

    // todo: should not we move it to queries?, or rename to asCashedArray() ?
    async getAsCashedArray(): Promise<Element[]> { // todo: rename to ...Cached, todo: why do we need get?
        return (await this.getWebElements())
            .map((it, index) => new Element(
                new CashedWebElementLocator(it, `${this}[${index}]`), this.configuration)
            );
    }

    elementAt(index: number): Element {
        return new Element(new ByIndexWebElementLocator(index, this), this.configuration);
    }

    get first(): Element {
        return this.elementAt(0);
    }

    /**
     * Represents a new collection sliced from 'start' element index to 'end' element index exclusive.
     * @param start The inclusive "start" index of collection to be sliced.
     * @param end The exclusive "end" index of collection to be sliced
     */
    sliced(start: number, end: number): Collection {
        return new Collection(new SlicedWebElementsLocator(start, end, this), this.configuration);
    }

    filteredBy(...conditions: ElementCondition[]): Collection {
        return new Collection(
            new FilteredByConditionWebElementsLocator(Condition.all(...conditions), this),
            this.configuration
        );
    }

    elementBy(...conditions: ElementCondition[]): Element {
        return new Element(
            new ElementByConditionWebElementLocator(Condition.all(...conditions), this),
            this.configuration
        );
    }

    collected(searchFunction: (element: Element) => Element | Collection): Collection {
        return new Collection(new CollectedByLocator(searchFunction, this), this.configuration);
    }

    async getWebElements(): Promise<WebElement[]> {
        return this.locator.find();
    }

    toString() {
        return this.locator.toString();
    }
}
