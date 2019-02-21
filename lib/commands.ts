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

import { Element } from './element';
import { lambda } from './utils';

export namespace command {

    export namespace js {

        /* Element commands */

        export const click = (xOffset: number = 0, yOffset: number = 0) =>
            lambda('click by js', async (element: Element) => {
                await element.executeScript(`arguments[0].dispatchEvent(new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true,
                    'clientX': arguments[0].getClientRects()[0].left + ${xOffset},
                    'clientY': arguments[0].getClientRects()[0].top + ${yOffset}
                }))`);
            });

        export const setValue = (value: string | number) =>
            lambda(`set value by js: ${value}`, async (element: Element) => {
                await element.executeScript(`return (function(webelement, text) {
                    var maxlength = webelement.getAttribute('maxlength') == null
                        ? -1
                        : parseInt(webelement.getAttribute('maxlength'));
                    webelement.value = maxlength == -1 ? text
                            : text.length <= maxlength ? text
                                : text.substring(0, maxlength);
                    return null;
                })(arguments[0], ${String(value)});`);
            });

        export const type = (keys: string | number) =>
            lambda(`type by js (append value): ${keys}`, async (element: Element) => {
                await element.executeScript(`return (function(webelement, text) {
                    var maxlength = webelement.getAttribute('maxlength') == null
                        ? -1
                        : parseInt(webelement.getAttribute('maxlength'));
                    var value = webelement.value + text;
                    webelement.value = maxlength == -1 ? value
                            : value.length <= maxlength ? value
                                : value.substring(0, maxlength);
                    return null;
                })(arguments[0], ${String(keys)});`);
            });
    }
}
