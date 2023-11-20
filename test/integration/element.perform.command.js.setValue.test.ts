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

import { browser, GIVEN, textOf } from './base';
import { command, be } from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Element.perform: command.js.setValue', () => {

    it('sets value by js', async () => {
        await GIVEN.openedEmptyPageWithBody(`
            <label id="text"></label>
            <input value="The text was "></input>
        `);
        await GIVEN.executeScript(`
            $('input').focusout(function(e) {
                console.log($('input').val())
                $('#text').text($('input').val());
                $('input').val('')
            });
        `);

        await browser.element('input')
            .perform(command.js.setValue('set by JS'))
            .then(command.pressTab);

        expect(await textOf('#text')).toBe('set by JS');
    })

    it('sets value by js, when value is null', async () => {
        await GIVEN.openedEmptyPageWithBody(`
            <label id="text"></label>
            <input></input>
        `);
        await GIVEN.executeScript(`
            $('input').focusout(function(e) {
                console.log($('input').val())
                $('#text').text($('input').val());
                $('input').val('')
            });
        `);

        await browser.element('input').should(be.visible)
            .then(command.js.setValue('The text was set by JS from blank'))
            .then(command.pressTab);

        expect(await textOf('#text')).toBe('The text was set by JS from blank');
    })

})
