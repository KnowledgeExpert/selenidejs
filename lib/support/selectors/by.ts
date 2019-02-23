// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required By applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { By } from 'selenium-webdriver';


// todo: why not use css selectors below, where it is enough?
export namespace by {

    const NORMALIZE_SPACE_XPATH = "normalize-space(translate(string(.), '\t\n\r\u00a0', '    '))";

    export function type(type: string): By {
        return By.xpath(`//*[@type = '${type}']`);
    }

    export function value(value: string): By {
        return By.xpath(`//*[@value = '${value}']`);
    }

    /* tslint:disable:prefer-template */
    export function partialId(...idParts: string[]): By {
        return By.xpath('//*[' + idParts.map(idPart => `contains(@id, '${idPart}')`).join(' and ') + ']');
    }
    /* tslint:enable:prefer-template */

    export function text(text: string) {
        return By.xpath(`.//*/text()[contains(${NORMALIZE_SPACE_XPATH}, "${text}")]/parent::*`);
    }

    export function exactText(text: string) {
        return By.xpath(`.//*/text()[${NORMALIZE_SPACE_XPATH} = "${text}"]/parent::*`);
    }

    export function linkText(text: string): By {
        return By.linkText(text);
    }

    export function id(id: string): By {
        return By.id(id);
    }

    export function name(name: string): By {
        return By.name(name);
    }

    export function className(className: string): By {
        return By.className(className);
    }

    export function xpath(xpath: string): By {
        return By.xpath(xpath);
    }

    export function css(css: string): By {
        return By.css(css);
    }

    export function attribute(attributeName: string, attributeValue: string): By {
        return By.xpath(`.//*[@${attributeName} = '${attributeValue}']`);
    }

}
