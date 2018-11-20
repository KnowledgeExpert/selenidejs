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

import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
import { ConditionDoesNotMatchError } from './errors/conditionDoesNotMatchError';


/* tslint:disable:space-before-function-paren */
export namespace Conditions {


    export const present: Condition<Element> = Condition.create('be present', async (element: Element) => {
        await element.getWebElement();
    });

    export const absent: Condition<Element> = Condition.create('be absent', async (element: Element) => {
        await element.getWebElement().then(
            result => {
                throw new ConditionDoesNotMatchError();
            },
            ignored => {}
        );
    });

    export const focused: Condition<Element> = Condition.create('be focused', async (element: Element) => {
        await element.isFocused().then(focused => {
            if (!focused) throw new ConditionDoesNotMatchError();
        });
    });

    export const visible: Condition<Element> = Condition.create('be visible', async (element: Element) => {
        await element.isVisible().then(visible => {
            if (!visible) throw new ConditionDoesNotMatchError();
        });
    });

    export const hidden: Condition<Element> = Condition.create('be hidden', async (element: Element) => {
        await element.isVisible().then(visible => {
            if (visible) throw new ConditionDoesNotMatchError();
        });
    });

    export function text(text: string | number): Condition<Element> {
        return Condition.create(`have text '${text}'`, async (element: Element) => {
            const actualText = await element.text();
            if (!actualText.includes((String(text)))) {
                throw new ConditionDoesNotMatchError(`but was '${actualText}'`);
            }
        });
    }

    export function exactText(text: string | number): Condition<Element> {
        return Condition.create(`have exact text '${text}'`, async (element: Element) => {
            const actualText = await element.text();
            if (actualText !== String(text)) {
                throw new ConditionDoesNotMatchError(`but was '${actualText}'`);
            }
        });
    }

    export function attribute(attributeName: string): Condition<Element> {
        return Condition.create(`have attribute '${attributeName}'`, async (element: Element) => {
            const attribute = await element.attribute(attributeName);
            if (attribute === null) {
                throw new ConditionDoesNotMatchError();
            }
        });
    }

    export const selected: Condition<Element> = Condition.create('be selected', async (element: Element) => {
        const attribute = await element.attribute('selected');
        if (attribute === null) {
            throw new ConditionDoesNotMatchError();
        }
    });

    export function atributeWithValue(attributeName: string, attributeValue: string | number): Condition<Element> {
        return Condition.create(
            `have attribute '${attributeName}' with value '${attributeValue}'`,
            async (element: Element) => {
                const actualValue = await element.attribute(attributeName);
                if (!actualValue.includes(String(attributeValue))) {
                    throw new ConditionDoesNotMatchError(`but was '${actualValue}'`);
                }
            });
    }

    export function attributeWithExactValue(attributeName: string, attributeValue: string | number): Condition<Element> {
        return Condition.create(
            `have attribute '${attributeName}' with exact value '${attributeValue}'`,
            async (element: Element) => {
                const actualValue = await element.attribute(attributeName);
                if (String(attributeValue) !== actualValue) {
                    throw new ConditionDoesNotMatchError(`but was '${actualValue}'`);
                }
            });
    }

    export function cssClass(cssClass: string): Condition<Element> {
        return Condition.create(`have css class '${cssClass}'`, async (element: Element) => {
            const actualCssClass = await element.attribute('class');
            if (!actualCssClass.split(' ').includes(cssClass)) {
                throw new ConditionDoesNotMatchError(`but was '${actualCssClass}'`);
            }
        });
    }

    export function size(size: number): Condition<Collection> {
        return Condition.create(`have size '${size}'`, async (collection: Collection) => {
            const actualCollectionSize = await collection.size();
            if (size !== actualCollectionSize) {
                throw new ConditionDoesNotMatchError(`but was '${actualCollectionSize}'`);
            }
        });
    }

    export function sizeGreaterThan(size: number): Condition<Collection> {
        return Condition.create(`have size more than '${size}'`, async (collection: Collection) => {
            const actualCollectionSize = await collection.size();
            if (size >= actualCollectionSize) {
                throw new ConditionDoesNotMatchError(`but was '${actualCollectionSize}'`);
            }
        });
    }

    export function texts(...texts: Array<string | number>): Condition<Collection> {
        return Condition.create(`have exact texts '${texts}'`, async (collection: Collection) => {
            const actualTexts: string[] = [];
            let success = false;
            try {
                const actualElements = await collection.getWebElements();

                for (const webElement of actualElements) {
                    actualTexts.push(await webElement.getText());
                }

                if (texts.length !== actualTexts.length) {
                    throw new ConditionDoesNotMatchError();
                }
                for (let i = 0; i < texts.length; i++) {
                    if (!actualTexts[i].includes(String(texts[i]))) {
                        throw new ConditionDoesNotMatchError();
                    }
                }
                success = true;
            } catch (ignored) {
            }
            if (!success) {
                throw new ConditionDoesNotMatchError(`but was '${actualTexts}'`);
            }
        });
    }

    export function exactTexts(...texts: Array<string | number>): Condition<Collection> {
        return Condition.create(`have exact texts '${texts}'`, async (collection: Collection) => {
            const actualTexts: string[] = [];
            let success;
            try {
                const actualElements = await collection.getWebElements();

                for (const webElement of actualElements) {
                    actualTexts.push(await webElement.getText());
                }

                if (texts.length !== actualTexts.length) {
                    throw new ConditionDoesNotMatchError();
                }
                for (let i = 0; i < texts.length; i++) {
                    if (actualTexts[i] !== texts[i]) {
                        throw new ConditionDoesNotMatchError();
                    }
                }
                success = true;
            } catch (ignored) {
            }
            if (!success) {
                throw new ConditionDoesNotMatchError(`but was '${actualTexts}'`);
            }
        });
    }

    export function title(title: string): Condition<Driver> {
        return Condition.create(`have title '${title}'`, async (driver: Driver) => {
            const actualTitle = await driver.configuration.webdriver.getTitle();
            if (!actualTitle.includes(title)) {
                throw new ConditionDoesNotMatchError(`but was '${title}'`);
            }
        });
    }

    export function urlPart(urlPart: string): Condition<Driver> {
        return Condition.create(`have url part '${urlPart}'`, async (driver: Driver) => {
            const actualUrl = await driver.configuration.webdriver.getCurrentUrl();
            if (!actualUrl.includes(urlPart)) {
                throw new ConditionDoesNotMatchError(`but was '${actualUrl}'`);
            }
        });
    }

    export function url(url: string): Condition<Driver> {
        return Condition.create(`have url '${url}'`, async (driver: Driver) => {
            const actualUrl = await driver.configuration.webdriver.getCurrentUrl();
            if (actualUrl !== url) {
                throw new ConditionDoesNotMatchError(`but was '${actualUrl}'`);
            }
        });
    }

    export function tabsSize(size: number): Condition<Driver> {
        return Condition.create(`have tabs size '${size}'`, async (driver: Driver) => {
            const tabs = await driver.configuration.webdriver.getAllWindowHandles();
            if (tabs.length !== size) {
                throw new ConditionDoesNotMatchError(`but was ${tabs.length}`);
            }
        });
    }

    export function tabsSizeGreaterThan(size: number): Condition<Driver> {
        return Condition.create(`have tabs size greater than '${size}'`, async (driver: Driver) => {
            const tabs = await driver.configuration.webdriver.getAllWindowHandles();
            if (tabs.length <= size) {
                throw new ConditionDoesNotMatchError(`but was ${tabs.length}`);
            }
        });
    }

}
