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

import { be } from '../../lib';
import { browser, data, driver, GIVEN, WHEN } from './base';

describe('Element search', () => {

    it('does not perform actual search on creation', async () => {
        const element = browser.element('#not-existing-element');

        expect(element.toString()).toBeTruthy();
    });

    it('is postponed until asking actual element data like visibility', async () => {
        await GIVEN.openedEmptyPage();
        const element = browser.element('#will-be-existing-element');

        await WHEN.withBody(
            '<h1 id="will-be-existing-element">Hello kitty:*</h1>'
        );

        expect(await element.matching(be.visible)).toBe(true);
    });

    it('is performed on each subsequent "ask"', async () => {
        await GIVEN.openedEmptyPage();
        const element = browser.element('#will-be-existing-element');

        await WHEN.withBody(
            '<h1 id="will-be-existing-element">Hello kitty:*</h1>'
        );
        expect(await element.matching(be.visible)).toBe(true);

        await WHEN.withBody(
            '<h1 id="will-be-existing-element" style="display:none">Hello kitty:*</h1>'
        );
        expect(await element.matching(be.visible)).toBe(false);
    });

    it('waits for element command like click to be possible', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("a")[0].style = "display:block";',
            data.timeouts.smallerThanDefault
        );
        const started = new Date().getTime();

        await browser.element('a').click();
        expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.smallerThanDefault);
        expect(await driver.getCurrentUrl()).toContain('second');
    });

    it('waits with custom timeout for element command like click to be possible', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("a")[0].style = "display:block";',
            data.timeouts.biggerThanDefault
        );
        const started = new Date().getTime();

        await browser.element('a')
            .with({ timeout: data.timeouts.biggerThanDefault + data.timeouts.step })
            .click();
        expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.biggerThanDefault);
        expect(await driver.getCurrentUrl()).toContain('second');
    });

    it('fails on timeout during waiting for action like click to be possible, if element invisible', async () => {
        await GIVEN.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await GIVEN.executeScriptWithTimeout(
            'document.getElementsByTagName("a")[0].style = "display:block";',
            data.timeouts.biggerThanDefault
        );
        const started = new Date().getTime();

        await browser.element('a').click()
            .then(ifNoError => fail('should fail on timeout before can be clicked'))
            .catch(async error => {
                expect(new Date().getTime() - started).toBeGreaterThanOrEqual(data.timeouts.byDefault);
                expect(await driver.getCurrentUrl()).not.toContain('second');
            });
    });

    it('should find element inside shadow root', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScript(document => {
            const shadow = document.body.attachShadow({ mode: 'open' });
            shadow.innerHTML = '<span>hello from shadow</span>';
        });

        await browser.element('body')
            .shadow
            .element('span')
            .getWebElement()
            .then(webelement => webelement.getText())
            .then(text => expect(text).toBe('hello from shadow'));
    });

    it('should find elements inside shadow root', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScript(document => {
            const shadow = document.body.attachShadow({ mode: 'open' });
            shadow.innerHTML = '<span>hello</span><span>from</span><span>shadow</span>';
        });

        const webelements = await browser.element('body')
            .shadow
            .all('span')
            .getWebElements();
        const texts = [];
        for (const webelement of webelements) {
            texts.push(await webelement.getText());
        }
        expect(texts).toEqual(['hello', 'from', 'shadow']);
    });

    it('should find nested shadow root', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScript(document => {
            const shadow = document.body.attachShadow({ mode: 'open' });
            const shadowChild = document.createElement('div');
            shadow.appendChild(shadowChild);
            const nestedShadow = shadowChild.attachShadow({ mode: 'open' });
            nestedShadow.innerHTML = '<span>hello from nested shadow</span>';
        });

        await browser.element('body')
            .shadow
            .element('div')
            .shadow
            .element('span')
            .getWebElement()
            .then(webelement => webelement.getText())
            .then(text => expect(text).toBe('hello from nested shadow'));
    });

    it('should have correct error message on fail find shadow', async () => {
        await GIVEN.openedEmptyPage();
        await browser.element('body')
            .shadow
            .element('div')
            .click()
            .then(
                () => { throw new Error('Click should not pass'); },
                (err) => expect(err.message).toContain('browser.element(By(css selector, body)).element(element => element.shadowRoot)')
            );
    });

});
