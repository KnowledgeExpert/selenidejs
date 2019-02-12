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
export { Browser } from './browser';
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
export { With } from './support/selectors/with';
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
 *     await results.first().should(have.text('Selenium automates browsers'));
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
 ********************/ /**
 * ```
 *     // OR just in case you are crazy a bit:
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
 *     await browser.element(With.name('q')).setValue('selenium').then(perform.pressEnter);
 *
 *     // instead of
 *     const query = browser.element(With.name('q'));
 *     await query.setValue('selenium')
 *     await query.pressEnter();
 * ```
 */
export { perform } from './support/commands/perform';
/**
 * Not sure when you will need it, but just in case:) ...
 * ```
 *     import { get } from 'selenidejs';
 *
 *     const iWillRememberYou =
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
