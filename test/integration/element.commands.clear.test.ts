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

import { browser, GIVEN, data, textOf, isAbsentInDom, valueOf, webelement } from './base';
import { perform } from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

const something = async element => { /*nothing;P*/ };

describe('Element.* commands: clear', () => {

    it('clears value, on element once it is present in DOM and visible', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.smallest, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await GIVEN.executeScriptAfter(data.timeouts.smallerThanDefault, `
            $('input').attr('style', 'display: block');
        `);

        await browser.element('input').clear();
        expect(await valueOf('input')).toBe('');
    });

    it('clears value through then(perform.clears) on element once it is present in DOM and visible', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.smallest, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await GIVEN.executeScriptAfter(data.timeouts.smallerThanDefault, `
            $('input').attr('style', 'display: block');
        `);

        await browser.element('input').perform(something).then(perform.clear);
        expect(await valueOf('input')).toBe('');
    });

    it('fails to clear value with error on not present in DOM element (after timeout)', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.biggerThanDefault, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);

        await browser.element('input').clear()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(await isAbsentInDom('input')).toBe(true);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, input)).clear
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"input"}`
                );
            });
    });

    it('fails to clear value with error on not visible element (after timeout)', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.smallest, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await GIVEN.executeScriptAfter(data.timeouts.biggerThanDefault, `
            $('input').attr('style', 'display: block');
        `);

        await browser.element('input').clear()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(await webelement('input').then(it => it.isDisplayed())).toBe(false);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, input)).clear
Reason:
\telement not interactable` // todo: consider to have here also element actual html
                );
            });
    });

});
