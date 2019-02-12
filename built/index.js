"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/* Basic API */
/**
 * GIVEN:
 * ```
 *     import { Builder, Capabilities } from 'selenium-webdriver';
 *     const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
 * ```
 * WHEN:
 * ```
 *     import { Browser } from 'selenidejs';
 *     const browser = Browser.configuredWith().driver(driver).timeout(4000).build();
 *
 *     // OR:
 *     // browser = Browser.drivedBy(driver).timeout(4000).build();
 *     // OR:
 *     // browser = Browser.chromeWith().timeout(4000).build();
 *
 *     // OR:
 *     // browser = Browser.chrome();
 * ```
 * AND:
 * ```
 *     await browser.open('https://google.com/ncr');
 * ```
 */
var browser_1 = require("./browser");
exports.Browser = browser_1.Browser;
/**
 * AND:
 * ```
 *     // await browser.element('[name=q]')).setValue('selenium');
 *     // OR:
 *
 *     import { With } from 'selenidejs';
 *
 *     const query = browser.element(With.name('q'));   // actual search does not start here, the element is lazy
 *     await query.setValue('selenium')                 // here the actual webelement is found
 *     await query.pressEnter();                        // here the actual webelement is found again
 * ```
 */
var with_1 = require("./support/selectors/with");
exports.With = with_1.With;
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
var be_1 = require("./support/conditions/be");
exports.be = be_1.be;
/**
 * THEN
 * ```
 *     import { have } from 'selenidejs';
 *
 *     await results.should(have.size(10));
 *     await results.first().should(have.text('tools to automate web browsers'));
 * ```
 */
var have_1 = require("./support/conditions/have");
exports.have = have_1.have;
/**
 * FINALLY:
 * ```
 *     await browser.quit();
 * ```
 */
/* Advanced helpers */ // todo: consider moving to lib/experimental/index.ts
/**
 * ```
 *     // OR just in case you are crazy a bit:
 *
 *     import { find, should } from 'selenidejs';
 *
 *     await browser.all('.srg .g').should(have.size(10))
 *         .then(find.first)
 *         .then(should.match(have.text('tools to automate web browsers')));
 * ```
 */
var find_1 = require("./support/elements/find");
exports.find = find_1.find;
var should_1 = require("./support/asserts/should");
exports.should = should_1.should;
/**
 * ```
 *     // OR:
 *     await browser.element(With.name('q')).setValue('selenium').then(perform.pressEnter);
 *
 *     // instead of
 *     const query = browser.element(With.name('q'));
 *     await query.setValue('selenium')
 *     await query.pressEnter();
 * ```
 */
var perform_1 = require("./support/commands/perform");
exports.perform = perform_1.perform;
/**
 * Not sure when you will need it, but just in case:) ...
 * ```
 *    const iWillRememberYou =
 *        await browser.element('#i-change-my-text-on-hover').hover().then(get.someText)
 * ```
 */
var get_1 = require("./support/queries/get");
exports.get = get_1.get;
/**
 * You might think you need something like...
 * ```
 *     if (await browser.element('#i-might-say-yes-or-no').get(its.text) === 'yes') {
 *         // do something...
 *     }
 * ```
 */
var queries_1 = require("./queries");
exports.its = queries_1.query;
/**
 * Or:
 * ```
 *     if (await browser.all('.option').get(their.size) >= 2) {
 *         // do something...
 *     }
 * ```
 */
var queries_2 = require("./queries");
exports.their = queries_2.query;
/**
 * Maybe one day, you really find a use case:) But for above cases, probably easier would be:
 * ```
 *     if (await browser.element('#i-might-say-yes-or-no').waitUntil(have.text('yes'))) {
 *         // do something...
 *     }
 *     ...
 *     if (await browser.all('.option').waitUntil(have.sizeMoreThanOrEqual(2))) {
 *         // do something...
 *     }
 * ```
 * Or, by using non-waiting versions, if "you are in a rush":)...
 * ```
 *     if (await browser.element('#i-might-say-yes-or-no').matches(have.text('yes'))) {
 *         // do something...
 *     }
 *     ...
 *     if (await browser.all('.option').matches(have.sizeMoreThanOrEqual(2))) {
 *         // do something...
 *     }
 * ```
 */
/* Another way to customize (lower level) */
/**
 * In case you want to be different) ...
 * ```
 *    const browser = new Browser(Configuration.withDriver(driver).timeout(4000).build());
 * ```
 */
var configuration_1 = require("./configuration");
exports.Configuration = configuration_1.Configuration;
/* Just Types:) */
var element_1 = require("./element");
exports.Element = element_1.Element;
var collection_1 = require("./collection");
exports.Collection = collection_1.Collection;
var wait_1 = require("./wait");
exports.Wait = wait_1.Wait;
exports.Condition = wait_1.Condition;
//# sourceMappingURL=index.js.map