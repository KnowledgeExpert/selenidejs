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

import { browser, GIVEN, data, WHEN, driver } from './base';
import { be, find, have } from '../../lib';

const something = async entity => { /*nothing;P*/ };

describe('Collection get by index Element', () => {

    it('should not be found on creation', async () => {
        const element = browser.all('.not-existing').elementAt(1);

        expect(element.toString()).toBeTruthy();
    });

    it('search through then(find.elementAt(index)) ' +
       'is postponed until asking actual element data like "has specific text?"',
       async () => {

        await GIVEN.openedEmptyPage();
        const element = await browser.all('.will-exist').perform(something).then(find.elementAt(1));

        await WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);

        expect(await element.matching(have.text('Kate'))).toBe(true);
    });
    
    it('is performed on each subsequent "ask"', async () => {
        await GIVEN.openedEmptyPage();
        const element = browser.all('.will-exist').elementAt(1);

        await WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        expect(await element.matching(have.text('Kate'))).toBe(true);

        await WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Margo</li>
                </ul>
        `);
        expect(await element.matching(have.text('Kate'))).toBe(false);
        expect(await element.matching(have.text('Margo'))).toBe(true);
    });

    it('waits for element command like click to be possible', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <a href='#first'>go to Heading 2</a>
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h1 id='first'>Heading 1</h1>
                <h2 id='second'>Heading 2</h2>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("a")[1].style = "display:block";',
            data.timeouts.smallerThanDefault
        );
        const started = new Date().getTime();

        await browser.all('a').elementAt(1).click();
        expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.smallerThanDefault);
        expect(await driver.getCurrentUrl()).toContain('second');
    });

    it('fails on timeout with error during waiting for action like click, if element invisible', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <a href='#first'>go to Heading 2</a>
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h1 id='first'>Heading 1</h1>
                <h2 id='second'>Heading 2</h2>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("a")[1].style = "display:block";',
            data.timeouts.biggerThanDefault
        );
        const started = new Date().getTime();

        await browser.all('a').elementAt(1).click()
            .then(ifNoError => fail('should fail on timeout before can be clicked'))
            .catch(async error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(await driver.getCurrentUrl()).not.toContain('second');
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.all(By(css selector, a))[1].click
Reason:
\telement not interactable`
                );
            });
    });

    it('fails on timeout with error during waiting for condition like text, if no element', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                </ul>
        `);
        const started = new Date().getTime();

        await browser.all('li').elementAt(1).should(have.text('Kate'))
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(await driver.getCurrentUrl()).not.toContain('second');
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.all(By(css selector, li))[1].has text: Kate
Reason:
\tCannot get element with index 1 from webelements collection with length 1`
                );
            });
    });
});
