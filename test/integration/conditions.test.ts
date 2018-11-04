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

import { Browser } from '../../lib/browser';
import { be } from '../../lib/helpers/be';
import { have } from '../../lib/helpers/have';
import { Given } from '../utils/given';
import './base';
import absent = be.absent;
import hidden = be.hidden;
import present = be.present;
import selected = be.selected;
import visible = be.visible;

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

describe('Condition', () => {

    it('AND should check multiple conditions', async () => {
        await Given.openedEmptyPageWithBody(
            '<span selected id="first">First</input>'
        );

        expect(
            await Browser.element('#first').is(selected.and(have.attribute('id', 'first')).and(have.text('First')))
        ).toBeTruthy();
        expect(
            await Browser.element('#first').is(selected.and(have.attribute('id', 'first')).and(have.text('Invalid')))
        ).toBeFalsy();
        expect(
            await Browser.element('#first').is(selected.and(have.attribute('id', 'invalid')).and(have.text('First')))
        ).toBeFalsy();
    });

    it('AND should fail with correct message', async () => {
        await Given.openedEmptyPageWithBody(
            '<span selected id="first">First</input>'
        );

        await Browser.element('#first').should(selected.and(have.attribute('id', 'second')).and(have.text('Invalid')))
            .then(
                _ => fail('Expected: assertion should fail'),
                error => expect(error.message).toBe(
                    'browser.find(By(css selector, #first)) ' +
                    'should be selected ' +
                    "AND have attribute 'id' with value 'second' " +
                    "AND have text 'Invalid'. " +
                    'Wait timed out after 1ms.'
                )
            );
    });

    it('should be selected', async () => {
        await Given.openedEmptyPageWithBody(
            '<input selected id="first">First</input><input id="second">Second</input>'
        );

        expect(await Browser.element('#first').is(selected)).toBeTruthy();
        expect(await Browser.element('#second').is(selected)).toBeFalsy();
        await Browser.element('#second').should(be.selected)
            .then(
                _ => fail('Expected: assertion should fail'),
                error => expect(error.message).toBe(
                    'browser.find(By(css selector, #second)) should be selected. Wait timed out after 1ms.'
                )
            );
    });

    it('should be absent', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.element('#first').is(absent)).toBeFalsy();
        expect(await Browser.element('#second').is(absent)).toBeTruthy();
        await Browser.element('#first').should(be.absent)
            .then(
                _ => fail('Expected: assertion should fail'),
                error => expect(error.message).toBe(
                    'browser.find(By(css selector, #first)) should be absent. Wait timed out after 1ms.'
                )
            );
    });

    it('should be present', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.element('#first').is(present)).toBeTruthy();
        expect(await Browser.element('#second').is(present)).toBeFalsy();
        await Browser.element('#second').should(be.present)
            .then(
                _ => fail('Expected: assertion should fail'),
                error => expect(error.message).toBe(
                    'browser.find(By(css selector, #second)) should be present. Wait timed out after 1ms.'
                )
            );
    });

    it('should be visible', async () => {
        await Given.openedEmptyPageWithBody(`
                <h1 id='first'>Test1</h1>
                <h2 id='second' style='display:none'>Test2</h2>
        `);

        expect(await Browser.element('#first').is(visible)).toBeTruthy();
        expect(await Browser.element('#second').is(visible)).toBeFalsy();
    });

    it('should be hidden', async () => {
        await Given.openedEmptyPageWithBody(`
                <h1 id='first'>Test1</h1>
                <h2 id='second' style='display:none'>Test2</h2>
        `);

        expect(await Browser.element('#first').is(hidden)).toBeFalsy();
        expect(await Browser.element('#second').is(hidden)).toBeTruthy();
    });

    it('should have exactText', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.element('#first').is(have.exactText('First'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.exactText('Second'))).toBeFalsy();
    });

    it('should have text', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.element('#first').is(have.text('Fir'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.text('Sec'))).toBeFalsy();
    });

    it('should have attribute', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.element('#first').is(have.attribute('id'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.attribute('invalid'))).toBeFalsy();
        expect(await Browser.element('#first').is(have.attribute('id', 'fir'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.attribute('invalid', 'invalid'))).toBeFalsy();
    });

    it('should have exact attribute', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.element('#first').is(have.exactAttribute('id', 'first'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.exactAttribute('invalid', 'invalid'))).toBeFalsy();
    });

    it('should have value', async () => {
        await Given.openedEmptyPageWithBody('<input id="first" value="first">First</input>');

        expect(await Browser.element('#first').is(have.value('first'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.value('second'))).toBeFalsy();
    });

    it('should have cssClass', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first" class="some long css">First</h1>');

        expect(await Browser.element('#first').is(have.cssClass('some'))).toBeTruthy();
        expect(await Browser.element('#first').is(have.cssClass('invalid'))).toBeFalsy();
    });

    it('should have size', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="first">First</h1>');

        expect(await Browser.all('#first').is(have.size(1))).toBeTruthy();
        expect(await Browser.all('#first').is(have.size(0))).toBeFalsy();
    });

    it('should have size greater than', async () => {
        await Given.openedEmptyPageWithBody('<h1>1</h1><h1>2</h1>');

        expect(await Browser.all('h1').is(have.sizeGreaterThan(1))).toBeTruthy();
        expect(await Browser.all('h1').is(have.sizeGreaterThan(2))).toBeFalsy();
    });

    it('should have texts', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="list">First</input><h1 id="list">Second</input>');

        expect(await Browser.all('#list').is(have.texts('Fir', 'Sec'))).toBeTruthy();
        expect(await Browser.all('#list').is(have.texts('Sec', 'Fir'))).toBeFalsy();
        expect(await Browser.all('#list').is(have.texts('Sec'))).toBeFalsy();
    });

    it('should have exactTexts', async () => {
        await Given.openedEmptyPageWithBody('<h1 id="list">First</input><h1 id="list">Second</input>');

        expect(await Browser.all('#list').is(have.exactTexts('First', 'Second'))).toBeTruthy();
        expect(await Browser.all('#list').is(have.exactTexts('Second', 'First'))).toBeFalsy();
        expect(await Browser.all('#list').is(have.exactTexts('Second'))).toBeFalsy();
    });

    it('should have url', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.is(have.url('http://localhost:4445/empty.html'))).toBeTruthy();
        expect(await Browser.is(have.url('http://invalid'))).toBeFalsy();
    });

    it('should have url part', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.is(have.urlPart('localhost'))).toBeTruthy();
        expect(await Browser.is(have.urlPart('invalid'))).toBeFalsy();
    });

    it('should have tabsSize', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.is(have.tabsSize(1))).toBeTruthy();
        expect(await Browser.is(have.tabsSize(2))).toBeFalsy();
        await Browser.executeScript('window.open("http://google.com/ncr")');
        expect(await Browser.is(have.tabsSize(2))).toBeTruthy();
        expect(await Browser.is(have.tabsSize(1))).toBeFalsy();

        await Browser.nextTab();
        await Browser.close();
        const tabs = await Browser.getTabs();
        await Browser.switchToTab(tabs[0]);
    });

    it('should have tabsSizeGreaterThan', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.is(have.tabsSizeGreaterThan(0))).toBeTruthy();
        expect(await Browser.is(have.tabsSizeGreaterThan(1))).toBeFalsy();
        await Browser.executeScript('window.open("http://google.com/ncr")');
        expect(await Browser.is(have.tabsSizeGreaterThan(1))).toBeTruthy();
        expect(await Browser.is(have.tabsSizeGreaterThan(2))).toBeFalsy();

        await Browser.nextTab();
        await Browser.close();
        const tabs = await Browser.getTabs();
        await Browser.switchToTab(tabs[0]);
    });

});
