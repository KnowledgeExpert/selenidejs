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


/*************
 * Basic API *
 *************/

/**
 * GIVEN:
 * ```
 *     import { Builder, Capabilities } from 'selenium-webdriver';
 *     const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
 * ```
 * WHEN:
 * ```
 *     import { Browser } from 'selenidejs';
 *     const browser = Browser.configuredWith()
 *         .driver(driver)
 *         .baseUrl('https://google.com')
 *         .timeout(4000)
 *         .build();
 *
 *     // OR:
 *     // browser = Browser.chromeWith().timeout(4000).baseUrl('https://google.com').build();
 *
 *     // OR:
 *     // browser = Browser.chrome(); //if you are ok with defaults for baseUrl and timeout
 * ```
 * AND:
 * ```
 *     await browser.open('/ncr');
 * ```
 */
export { Browser } from './browser';

/**
 * AND:
 * ```
 *     // await browser.element('[name=q]')).type('selenium');
 *     // OR:
 *
 *     import { by } from 'selenidejs';
 *
 *     const query = browser.element(by.name('q')); // actual search does not start here, the element is lazy
 *     await query.type('selenium')              // here the actual webelement is found
 *     await query.pressEnter();                    // here the actual webelement is found again
 * ```
 */
export { by } from './support/selectors/by';

/**
 * AND:
 * ```
 *     // in case we need to filter collection of items by some condition like visibility:
 *
 *     import { be } from 'selenidejs';
 *
 *     const results = browser.all('.srg .g').filteredBy(be.visible);
 *
 */
export { be } from './support/conditions/be';

/**
 * THEN
 * ```
 *     import { have } from 'selenidejs';
 *
 *     await results.should(have.size(10));
 *     await results.first.should(have.text('Selenium automates browsers'));
 * ```
 */
export { have } from './support/conditions/have';

/**
 * FINALLY:
 * ```
 *     await browser.quit();
 * ```
 */

/********************
 * Advanced Helpers *
 ********************/

/**
 * ```
 *     // OR just in case you like the "flow":
 *
 *     import { find, should } from 'selenidejs';
 *
 *     await browser.all('.srg .g').should(have.size(10))
 *         .then(find.first)
 *         .then(should.match(have.text('Selenium automates browsers')));
 * ```
 */
export { find } from './support/elements/find';
export { should } from './support/asserts/should';

/**
 * ```
 *     // OR:
 *     import { perform } from 'selenidejs';
 *
 *     await browser.element(by.name('q')).type('selenium').then(perform.pressEnter);
 *
 *     // instead of
 *     const query = browser.element(by.name('q'));
 *     await query.type('selenium')
 *     await query.pressEnter();
 * ```
 */
export { perform } from './support/commands/perform';

/**
 * Not sure when you will need it, but just in case:) ...
 * ```
 *     import { get } from 'selenidejs';
 *
 *     const iWillRememberYourTextOnceReady =
 *         await browser.element('#i-change-my-text-on-hover').hover().then(get.someText)
 * ```
 */
export { get } from './support/queries/get';

/**
 * You might think you need something like...
 * ```
 *     import { its } from 'selenidejs';
 *
 *     if (await browser.element('#i-might-say-yes-or-no').get(its.text) === 'yes') {
 *         // do something...
 *     }
 * ```
 */
export { query as its } from './queries';

/**
 * Or:
 * ```
 *     import { their } from 'selenidejs';
 *
 *     if (await browser.all('.option').get(their.size) >= 2) {
 *         // do something...
 *     }
 * ```
 */
export { query as their } from './queries';

/**
 * Maybe one day, you really find a use case:) But for above cases, probably easier would be:
 * ```
 *     if (await browser.element('#i-might-say-yes-or-no').waitUntil(have.text('yes'))) {
 *         // do something...
 *     }
 *     ...
 *     if (await browser.all('.i-will-appear').waitUntil(have.sizeGreaterThanOrEqual(2))) {
 *         // do something...
 *     }
 * ```
 * Or, by using non-waiting versions, if "you are in a rush":)...
 * ```
 *     if (await browser.element('#i-might-say-yes-or-no').matching(have.text('yes'))) {
 *         // do something...
 *     }
 *     ...
 *     if (await browser.all('.i-will-appear').matching(have.sizeGreaterThanOrEqual(2))) {
 *         // do something...
 *     }
 * ```
 */
/**
 * In case you want to be different) ...
 * ```
 *    const browser = new Browser(Configuration.withDriver(driver).timeout(4000).build());
 * ```
 */
export { Configuration } from './configuration';

/****************
 * Just Types:) *
 ****************/

export { Element } from './element';
export { Collection } from './collection';

export { Wait, Condition } from './wait';
export { ElementCondition, CollectionCondition, BrowserCondition } from './conditions';
