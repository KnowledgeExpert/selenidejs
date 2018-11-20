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

import { Key } from 'selenium-webdriver';
import { Browser } from '../../lib/browser';
import { be } from '../../lib/helpers/be';
import { have } from '../../lib/helpers/have';
import { Given } from '../utils/given';
import './base';
import focused = be.focused;

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

describe('Action', () => {

    beforeEach(() => {
        Browser.configuration.clickByJs = false;
        Browser.configuration.setValueByJs = false;
    });

    it('for element should produce valid error on action failure', async () => {
        const OVERLAYED_ELEMENTS_HTML = `
            <div id="container" style="position: relative;">
                <div id="back" style="position: absolute;">test</div>
                <div id="front" style="position: absolute;z-index: 10;">test</div>
            </div>`;
        await Given.openedEmptyPageWithBody(OVERLAYED_ELEMENTS_HTML);

        await Browser.element('#back').click()
            .then(
                result => fail('Expected: error to be thrown'),
                error => expect(error.message).toContain(
                    'For browser.find(By(css selector, #back)): cannot perform click.'
                )
            );
    });

    it('for element should wait for visibility if needed', async () => {
        Browser.configuration.timeout = 2000;
        await Given.openedEmptyPageWithBody('<input id="test" style="display:none" />');
        await Browser.executeScript(
            'setTimeout(_ => { document.getElementById("test").style = "display:block"; }, 1000);'
        );

        await Browser.element('input').click().catch(error => fail(error.message));
    });

    it('common click', async () => {
        await Given.openedEmptyPageWithBody('<a href="#heading">go to Heading</a><h2 id="heading">Heading</h2>');

        await Browser.element('a').click();
        expect(await Browser.url()).toContain('heading');
    });

    it('click by js', async () => {
        await Given.openedEmptyPageWithBody('<a href="#heading">go to Heading</a><h2 id="heading">Heading</h2>');

        Browser.configuration.clickByJs = true;
        await Browser.element('a').click();
        expect(await Browser.url()).toContain('heading');
    });

    it('contextClick', async () => {
        await Given.openedEmptyPageWithBody('<a />');

        await Browser.element('a').contextClick().catch(error => fail(error.message));
    });

    it('doubleClick', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Before Double Click</span>');
        await Browser.executeScript(`
            $('#test').dblclick(function(e) {
                $('#test').text('After Double Click');
            });
        `);

        await Browser.element('#test').doubleClick();
        expect(await Browser.element('#test').should(have.text('After Double Click')));
    });

    it('hover', async () => {
        await Given.openedEmptyPageWithBody(
            `<div
                id="hoverable"
                onmouseover="$(this).text('Its hover');"
                onmouseout="$(this).text('Its not hover');"
            >
            Its not hover
            </div>
            <h1>Away</h1>`
        );

        expect(await Browser.element('#hoverable').text()).toBe('Its not hover');
        await Browser.element('#hoverable').hover();
        expect(await Browser.element('#hoverable').text()).toBe('Its hover');
        await Browser.element('h1').hover();
        expect(await Browser.element('#hoverable').text()).toBe('Its not hover');
    });

    it('pressKey', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Before Press Enter</span>');
        await Browser.executeScript(`
            $('html').keypress(function(e) {
                if (e.which == 13) document.getElementById('test').innerHTML = 'After Press Enter';
            });
        `);

        await Browser.element('html').pressKey(Key.ENTER);
        expect(await Browser.element('#test').text()).toBe('After Press Enter');
    });

    it('pressEnter', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Before Press Enter</span>');
        await Browser.executeScript(`
            $('html').keypress(function(e) {
                if (e.which == 13) document.getElementById('test').innerHTML = 'After Press Enter';
            });
        `);

        await Browser.element('html').pressEnter();
        expect(await Browser.element('#test').text()).toBe('After Press Enter');
    });

    it('pressEscape', async () => {
        await Given.openedEmptyPageWithBody('<input id="uname"/>');

        await Browser.element('#uname').click();
        await Browser.element('#uname').pressEscape();
        expect(await Browser.element('#pass').isNot(focused)).toBeTruthy();
    });

    it('pressTab', async () => {
        await Given.openedEmptyPageWithBody('<input id="uname" /><input id="pass" />');

        await Browser.element('#uname').pressTab();
        expect(await Browser.element('#pass').is(focused)).toBeTruthy();
    });

    it('scrollTo', async () => {
        await Given.openedEmptyPageWithBody('<input id="test" />');

        await Browser.element('#test').scrollTo();
        expect(await Browser.element('#test').isVisible()).toBeTruthy();
    });

    it('sendKeys', async () => {
        await Given.openedEmptyPageWithBody('<input id="test" />');

        await Browser.element('#test').sendKeys('Test');
        expect(await Browser.element('#test').value()).toBe('Test');
    });

    it('common setValue', async () => {
        await Given.openedEmptyPageWithBody('<input id="test" />');

        await Browser.element('#test').setValue('Test');
        expect(await Browser.element('#test').value()).toBe('Test');
    });

    it('setValue by js', async () => {
        await Given.openedEmptyPageWithBody('<input id="test" />');

        Browser.configuration.setValueByJs = true;
        await Browser.element('#test').setValue('Test');
        expect(await Browser.element('#test').value()).toBe('Test');
    });

    it('text', async () => {
        await Given.openedEmptyPageWithBody('<h1>Test</h1>');

        expect(await Browser.element('h1').text()).toBe('Test');
    });

    it('attribute', async () => {
        await Given.openedEmptyPageWithBody('<input foo="Test" />');

        expect(await Browser.element('input').attribute('foo')).toBe('Test');
    });

    it('has attribute', async () => {
        await Given.openedEmptyPageWithBody('<input foo="Test" />');

        expect(await Browser.element('input').hasAttribute('foo')).toBe(true);
    });

    it('parent', async () => {
        await Given.openedEmptyPageWithBody('<div id="parent"><div id="child"></div></div>');

        expect(await Browser.element('#child').parent().attribute('id')).toBe('parent');
    });

    it('following sibling', async () => {
        await Given.openedEmptyPageWithBody('<div id="bro1"></div><div id="bro2"></div>');

        expect(await Browser.element('#bro1').followingSibling().attribute('id')).toBe('bro2');
    });

    it('open', async () => {
        await Given.openedEmptyPage();
        await Browser.open('https://blank.org/');

        expect(await Browser.url()).toBe('https://blank.org/');
    });

    it('resize window', async () => {
        pending('need to implement');
    });

    it('refresh', async () => {
        await Given.openedEmptyPageWithBody('<input id="test"/>');
        await Browser.refresh();

        expect(await Browser.element('#test').isPresent()).toBe(false);
    });

    it('acceptAlert', async () => {
        await Given.openedEmptyPageWithBody('<h1>Test</h1>');
        await Browser.executeScript('alert(1)');
        await Browser.acceptAlert();

        await Browser.element('h1').click();
    });

    it('url', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.url()).toBe('http://localhost:4445/empty.html');
    });

    it('title', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.title()).toBe('Empty Page');
    });

    it('pageSource', async () => {
        await Given.openedEmptyPageWithBody('<h1>Test</h1>');

        expect(await Browser.pageSource().then(source => source.replace(/\s{2,}/g, ''))).toBe(
            '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head>' +
            '<script src="./jquery_2.2.0_min.js"></script>' +
            '<meta charset="UTF-8" />' +
            '<title>Empty Page</title>\n' +
            '</head>\n' +
            '<body><h1>Test</h1></body></html>'
        );
    });

    it('executeScript', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.executeScript('return "test"')).toBe('test');
    });

    it('tabs', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.getTabs().then(tabs => tabs.length)).toBe(1);
    });

    it('nextTab', async () => {
        pending('need to implement');
    });

    it('previousTab', async () => {
        pending('need to implement');
    });

    it('switchToTab', async () => {
        pending('need to implement');
    });

    it('switchToFrame', async () => {
        pending('need to implement');
    });

    it('switchToDefaultFrame', async () => {
        pending('need to implement');
    });

    it('clearCacheAndCookies', async () => {
        pending('need to implement');
    });

    it('close', async () => {
        pending('need to implement');
    });

    it('quit', async () => {
        pending('need to implement');
    });

    it('should be able to take viewport screenshot', async () => {
        Browser.configuration.fullpageScreenshot = false;
        await Given.openedEmptyPage();

        const viewportScreenshot = await Browser.screenshot();

        expect(viewportScreenshot).toBeDefined();
        expect(viewportScreenshot instanceof Buffer).toBeTruthy();
    });

    it('should be able to take fullpage screenshot', async () => {
        pending('floating bug, need to investigate');
        Browser.configuration.fullpageScreenshot = true;
        await Given.openedEmptyPage();

        const fullpageScreenshot = await Browser.screenshot();

        expect(fullpageScreenshot instanceof Buffer).toBeTruthy();
        expect(fullpageScreenshot).toBeDefined();
    });

    it('should be able to take fullpage screenshot in iframe', async () => {
        Browser.configuration.fullpageScreenshot = true;
        await Given.openedEmptyPageWithBody('<iframe></iframe>');
        await Browser.switchToFrame(Browser.element('iframe'));
        const fullpageScreenshot = await Browser.screenshot();

        expect(fullpageScreenshot instanceof Buffer).toBeTruthy();
        expect(fullpageScreenshot).toBeDefined();
    });

    it('should be able to take fullpage screenshot with large screen', async () => {
        Browser.configuration.fullpageScreenshot = true;
        await Given.openedEmptyPageWithBody('<div id="test"></div>');
        await Browser.executeScript('document.getElementById("test").style.height = "5000px"');
        const fullpageScreenshot = await Browser.screenshot();

        expect(fullpageScreenshot instanceof Buffer).toBeTruthy();
        expect(fullpageScreenshot).toBeDefined();
    });

});
