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

    // todo: how to call them through element.perform(???) ?
    /* internally we can do element.perform(command.js.click);
     * so far we do not export command.* in lib/index.ts ... should we?
     * so far user will have to do something like: element.perform(perform.js.click)
     * which will do "double-perform" i.e. perform(perform(click)) :'(
     *
     * should we actually add do method to Entity, that will be non-waiting version of perform+get
     * so everybody can just do:
     * element.do(perform.js.click)
     * element.do(get.someText)
     */
    export namespace js {

        /* Element commands */

        export const clickWithOffset = (xOffset: number, yOffset: number) =>
            lambda(`click by js with offset - x: ${xOffset}, y: ${yOffset}`, async (element: Element) => {
                await element.executeScript(
                    (element, args: number[], window) => {
                        element.dispatchEvent(new MouseEvent(
                            'click',
                            {
                                bubbles: true,
                                cancelable: true,
                                clientX: element.getClientRects()[0].left + args[0],
                                clientY: element.getClientRects()[0].top + args[1],
                                view: window,
                            }
                        ));
                    }, xOffset, yOffset
                );
            });

        export const click = lambda('click by js', clickWithOffset(0, 0));

        export const setValue = (value: string | number) =>
            lambda(`set value by js: ${value}`, async (element: Element) => {
                await element.executeScript(
                    (element: HTMLInputElement, args) => {
                        const text = args[0];
                        const maxlength = element.getAttribute('maxlength') === null
                            ? -1
                            : parseInt(element.getAttribute('maxlength'));
                        element.value = maxlength === -1
                            ? text
                            : text.length <= maxlength
                                ? text
                                : text.substring(0, maxlength);
                        return null;
                    }, value
                );
            });

        export const type = (keys: string | number) =>
            lambda(`type by js (append value): ${keys}`, async (element: Element) => {
                await element.executeScript((element: HTMLInputElement, args) => {
                    const text = element.getAttribute('value').concat(args[0]);
                    const maxlength = element.getAttribute('maxlength') === null
                        ? -1
                        : parseInt(element.getAttribute('maxlength'));
                    element.value = maxlength === -1
                        ? text
                        : text.length <= maxlength
                            ? text
                            : text.substring(0, maxlength);
                    return null;
                }, keys);
            });

        export const scrollIntoView = lambda('scroll into view', async element =>
            element.executeScript((element: HTMLInputElement) => element.scrollIntoView(true)));
    }
}
