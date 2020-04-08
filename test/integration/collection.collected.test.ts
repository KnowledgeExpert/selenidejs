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

import { find, have, should, their } from '../../lib';
import { browser, GIVEN } from './base';

/* tslint:disable:no-magic-numbers */
/* tslint:disable:align */

const something = entity => entity;

describe('Collection map each to first element', () => {

  it('should not be found on creation', async () => {
    const firstChilds = browser.all('.not-existing').collected(it => it.element('span'));
    const allChilds = browser.all('.not-existing').collected(it => it.all('span'));
  });

  it('should collect single element in each of elements', async () => {
    await GIVEN.openedEmptyPageWithBody(`
            <div> <span>first</span> <span>second</span> </div>
            <div> <span>third</span> <span>fourth</span> </div>
        `);

    const spans = browser.all('div').collected(it => it.element('span'));

    expect(await spans.get(their.texts))
      .toEqual(['first', 'third']);
  });

  it('should collect all elements in each of elements', async () => {
    await GIVEN.openedEmptyPageWithBody(`
            <div> <span>first</span> <span>second</span> </div>
            <div> <span>third</span> <span>fourth</span> </div>
        `);

    const spans = browser.all('div').collected(it => it.all('span'));
    expect(await spans.get(their.texts))
      .toEqual(['first', 'second', 'third', 'fourth']);
  });

  it('should throw correct error when collect to element when there is some missing childs', async () => {
    await GIVEN.openedEmptyPageWithBody('<div></div><div><span></span</div>');
    await browser.all('div', { timeout: 1 })
      .collected(it => it.element('span'))
      .should(have.size(1))
      .then(
        () => { throw new Error('Should not pass here'); },
        err => {
          expect(err.message).toContain("browser.all(By(css selector, div)).collected(it => it.element('span')).has size 1");
          expect(err.message).toContain(
            'Cannot find browser.all(By(css selector, div))[0].element(By(css selector, span))' +
            '\n\tno such element: Unable to locate element: {"method":"css selector","selector":"span"}'
          );
        }
      );
  });

  it('should not throw error when collect to all when there is some missing childs', async () => {
    await GIVEN.openedEmptyPageWithBody('<div></div><div><span></span</div>');
    await browser.all('div', { timeout: 1 })
      .collected(it => it.all('span'))
      .getWebElements()
      .then(webelements => expect(webelements.length).toBe(1))
  });

  it('should find elements with find.collected', async () => {
    await GIVEN.openedEmptyPageWithBody(`
            <div> <span>first</span> <span>second</span> </div>
            <div> <span>third</span> <span>fourth</span> </div>
        `);

    await browser.all('div')
      .should(have.size(2))
      .then(find.collected(it => it.all('span')))
      .then(should.match(have.texts('first', 'second', 'third', 'fourth')));
  });
});
