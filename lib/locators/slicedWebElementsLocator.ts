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
import { ElementCondition } from '../conditions';
import { Collection } from '../collection';
import { Locator } from './locator';


export class SlicedWebElementsLocator implements Locator<Promise<WebElement[]>> {

    /**
     * Locates a slice in original collection webelements.
     * @param start The inclusive "start" index of webelements to be sliced.
     * @param end The exclusive "end" index of webelements to be sliced.
     * @param collection Original collection to be sliced.
     */
    constructor(private readonly start: number,
                private readonly end: number,
                private readonly step: number,
                private readonly collection: Collection) {
        this.start = start;
        this.end = end;
        this.step = step;
        this.collection = collection;
    }

    async find(): Promise<WebElement[]> {
        // TODO: consider using https://www.npmjs.com/package/slice
        const webelements = (await this.collection.getWebElements());
        const sliced = webelements.slice(this.start, this.end);
        const toBeFiltered = this.step > 0 ? sliced : sliced.reverse();
        const step = this.step < 0 ? -this.step : this.step;
        return toBeFiltered.reduce(
            (acc: WebElement[], element: WebElement, i: number) => (
                i % step === 0
                    ? [...acc, element]
                    : acc
            ),
            [],
        );
    }

    toString(): string {
        return `${this.collection.toString()}[${
            this.start ? this.start.toString() : ''
        }:${
            this.end ? this.end.toString() : ''
        }${
            this.step?.toString() === '1' ? '' : `:${this.step?.toString()}`
        }]`;
    }
}
