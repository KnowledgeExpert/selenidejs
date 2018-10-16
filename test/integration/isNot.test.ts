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
import { have } from '../../lib/helpers/have';
import { Given } from '../utils/given';
import './base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

describe('Is not', () => {

    it('for element should return true if successful', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test text</span>');

        expect(await Browser.element('#test').isNot(have.exactText('Test text'))).toBeFalsy();
    });

    it('for element should return false if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test text</span>');

        expect(await Browser.element('#test').isNot(have.exactText('Invalid Text'))).toBeTruthy();
    });

    it('for collection should return true if successful', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test text</span>');

        expect(await Browser.all('#test').isNot(have.size(1))).toBeFalsy();
    });

    it('for collection should return false if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test text</span>');

        expect(await Browser.all('#test').isNot(have.size(2))).toBeTruthy();
    });

    it('for driver should return true if successful', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.isNot(have.urlPart('localhost'))).toBeFalsy();
    });

    it('for element should return false if failed', async () => {
        await Given.openedEmptyPage();

        expect(await Browser.isNot(have.urlPart('invalid'))).toBeTruthy();
    });

});
