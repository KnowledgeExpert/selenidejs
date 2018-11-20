"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const condition_1 = require("./condition");
const conditionDoesNotMatchError_1 = require("./errors/conditionDoesNotMatchError");
/* tslint:disable:space-before-function-paren */
var Conditions;
(function (Conditions) {
    Conditions.present = condition_1.Condition.create('be present', async (element) => {
        await element.getWebElement();
    });
    Conditions.absent = condition_1.Condition.create('be absent', async (element) => {
        await element.getWebElement().then(result => {
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
        }, ignored => { });
    });
    Conditions.focused = condition_1.Condition.create('be focused', async (element) => {
        await element.isFocused().then(focused => {
            if (!focused)
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
        });
    });
    Conditions.visible = condition_1.Condition.create('be visible', async (element) => {
        await element.isVisible().then(visible => {
            if (!visible)
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
        });
    });
    Conditions.hidden = condition_1.Condition.create('be hidden', async (element) => {
        await element.isVisible().then(visible => {
            if (visible)
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
        });
    });
    function text(text) {
        return condition_1.Condition.create(`have text '${text}'`, async (element) => {
            const actualText = await element.text();
            if (!actualText.includes((String(text)))) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualText}'`);
            }
        });
    }
    Conditions.text = text;
    function exactText(text) {
        return condition_1.Condition.create(`have exact text '${text}'`, async (element) => {
            const actualText = await element.text();
            if (actualText !== String(text)) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualText}'`);
            }
        });
    }
    Conditions.exactText = exactText;
    function attribute(attributeName) {
        return condition_1.Condition.create(`have attribute '${attributeName}'`, async (element) => {
            const attribute = await element.attribute(attributeName);
            if (attribute === null) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
            }
        });
    }
    Conditions.attribute = attribute;
    Conditions.selected = condition_1.Condition.create('be selected', async (element) => {
        const attribute = await element.attribute('selected');
        if (attribute === null) {
            throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
        }
    });
    function atributeWithValue(attributeName, attributeValue) {
        return condition_1.Condition.create(`have attribute '${attributeName}' with value '${attributeValue}'`, async (element) => {
            const actualValue = await element.attribute(attributeName);
            if (!actualValue.includes(String(attributeValue))) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualValue}'`);
            }
        });
    }
    Conditions.atributeWithValue = atributeWithValue;
    function attributeWithExactValue(attributeName, attributeValue) {
        return condition_1.Condition.create(`have attribute '${attributeName}' with exact value '${attributeValue}'`, async (element) => {
            const actualValue = await element.attribute(attributeName);
            if (String(attributeValue) !== actualValue) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualValue}'`);
            }
        });
    }
    Conditions.attributeWithExactValue = attributeWithExactValue;
    function cssClass(cssClass) {
        return condition_1.Condition.create(`have css class '${cssClass}'`, async (element) => {
            const actualCssClass = await element.attribute('class');
            if (!actualCssClass.split(' ').includes(cssClass)) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualCssClass}'`);
            }
        });
    }
    Conditions.cssClass = cssClass;
    function size(size) {
        return condition_1.Condition.create(`have size '${size}'`, async (collection) => {
            const actualCollectionSize = await collection.size();
            if (size !== actualCollectionSize) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualCollectionSize}'`);
            }
        });
    }
    Conditions.size = size;
    function sizeGreaterThan(size) {
        return condition_1.Condition.create(`have size more than '${size}'`, async (collection) => {
            const actualCollectionSize = await collection.size();
            if (size >= actualCollectionSize) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualCollectionSize}'`);
            }
        });
    }
    Conditions.sizeGreaterThan = sizeGreaterThan;
    function texts(...texts) {
        return condition_1.Condition.create(`have exact texts '${texts}'`, async (collection) => {
            const actualTexts = [];
            let success = false;
            try {
                const actualElements = await collection.getWebElements();
                for (const webElement of actualElements) {
                    actualTexts.push(await webElement.getText());
                }
                if (texts.length !== actualTexts.length) {
                    throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
                }
                for (let i = 0; i < texts.length; i++) {
                    if (!actualTexts[i].includes(String(texts[i]))) {
                        throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
                    }
                }
                success = true;
            }
            catch (ignored) {
            }
            if (!success) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualTexts}'`);
            }
        });
    }
    Conditions.texts = texts;
    function exactTexts(...texts) {
        return condition_1.Condition.create(`have exact texts '${texts}'`, async (collection) => {
            const actualTexts = [];
            let success;
            try {
                const actualElements = await collection.getWebElements();
                for (const webElement of actualElements) {
                    actualTexts.push(await webElement.getText());
                }
                if (texts.length !== actualTexts.length) {
                    throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
                }
                for (let i = 0; i < texts.length; i++) {
                    if (actualTexts[i] !== texts[i]) {
                        throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
                    }
                }
                success = true;
            }
            catch (ignored) {
            }
            if (!success) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualTexts}'`);
            }
        });
    }
    Conditions.exactTexts = exactTexts;
    function title(title) {
        return condition_1.Condition.create(`have title '${title}'`, async (driver) => {
            const actualTitle = await driver.configuration.webdriver.getTitle();
            if (!actualTitle.includes(title)) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${title}'`);
            }
        });
    }
    Conditions.title = title;
    function urlPart(urlPart) {
        return condition_1.Condition.create(`have url part '${urlPart}'`, async (driver) => {
            const actualUrl = await driver.configuration.webdriver.getCurrentUrl();
            if (!actualUrl.includes(urlPart)) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualUrl}'`);
            }
        });
    }
    Conditions.urlPart = urlPart;
    function url(url) {
        return condition_1.Condition.create(`have url '${url}'`, async (driver) => {
            const actualUrl = await driver.configuration.webdriver.getCurrentUrl();
            if (actualUrl !== url) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was '${actualUrl}'`);
            }
        });
    }
    Conditions.url = url;
    function tabsSize(size) {
        return condition_1.Condition.create(`have tabs size '${size}'`, async (driver) => {
            const tabs = await driver.configuration.webdriver.getAllWindowHandles();
            if (tabs.length !== size) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was ${tabs.length}`);
            }
        });
    }
    Conditions.tabsSize = tabsSize;
    function tabsSizeGreaterThan(size) {
        return condition_1.Condition.create(`have tabs size greater than '${size}'`, async (driver) => {
            const tabs = await driver.configuration.webdriver.getAllWindowHandles();
            if (tabs.length <= size) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError(`but was ${tabs.length}`);
            }
        });
    }
    Conditions.tabsSizeGreaterThan = tabsSizeGreaterThan;
})(Conditions = exports.Conditions || (exports.Conditions = {}));
//# sourceMappingURL=conditions.js.map