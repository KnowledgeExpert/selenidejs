[![Build Status](https://travis-ci.com/KnowledgeExpert/selenidejs.svg?branch=master)](https://travis-ci.com/KnowledgeExpert/selenidejs)
[![Coverage Status](https://coveralls.io/repos/github/KnowledgeExpert/selenidejs/badge.svg?branch=master)](https://coveralls.io/github/KnowledgeExpert/selenidejs?branch=master)
[![NPM Version](https://badge.fury.io/js/selenidejs.svg)](https://badge.fury.io/js/selenidejs)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/selenidejs.svg)

## How to use Selenidejs

## Installation

`npm i selenidejs`

## Base entities in selenidejs

* `Browser` - wrapper for protractor's `browser` with bunch of new useful functions
* `Element` - 'lazy' web element
* `Collection` - 'lazy' web elements collection

To create 'lazy' element you can use `Browser.element(string | By)` or simply `element(string | By)`.
 - `Browser.element("#header")`
 - `element(With.exactText('Continue'))`

To create 'lazy' collection you can use `Browser.all(string | By)` or simply `all(string | By)`.
 - `all(".//span[@id='header']")`
 - `Browser.all(With.id('chkbx'))`


You can pass an Webdriver `By` or `string` (which transforms to `By.css` or `By.xpath`, basing on content) to initialize 'lazy' element(s).

 Also you can use our helper [With](./lib/locators/with.ts) several useful `By`'s:
  - `element(With.exactText('Continue'))`
  - `all(With.attribute("href", "/continue"))`

## [Element](./lib/base-entities/element.ts)

In **Selenidejs** we are using "clever" elements, because an actual "version" of the real element from the page will be received at the moment when we will need it, and then we can perform some action or condition check on it. If it is impossible to perform an action within the specified timeout, you will receive an error message.

There is also `visibleElement(string)` method. It is very useful when there are several identical elements on the page, but only one of them is visible. This method returns the first of the visible elements found by the locator.

When the required element is found you can:
  * do some actions on it:
    * `element(".dropdown").hover();`
    * `element("button[title='Actions']").click();`
  * get statuses and attribute values:
    * `element(With.text('Hello')).text();` // "Hello world"
    * `element("#FirstName").isVisible();` // true/false
  * assert some condition:
    * `element("#Greeting").should(have.text("Hello"))`

It is also possible to build "locators chains", getting one element (or elements) inside another:
      `element(".menuItem").parent().element(".//ul[contains(@id, 'navigation')]").click();`

## Element action hooks

You can add after/before hooks to `Element` actions. It can be useful for specific conditions testing (f.e. if you might want to ensure that some script is present/loaded/initialized on a page before element action), logging, debugging.

Hooks api introduced by hook signature `(element: Element, actionName: string) => void | Promise<void>` and lists for before/after hooks.

Example:
```
// log element's .toString() to console
const logElementHook = async (element: Element, actionName: string) => console.log(await element.toString());
// log element's .text() to console
const logElementTextHook = async (element: Element, actionName: string) => console.log(await element.text()));

// add hooks to log element info before and after action
Element.beforeActionHooks.push(logElementHook, logElementTextHook);
Element.afterActionHooks.push(logElementHook, logElementTextHook);
```

Element actions list:
 * click
 * clickByJS
 * setValue
 * setValueByJS
 * sendKeys
 * doubleClick
 * hover
 * contextClick
 * pressEnter
 * pressEscape
 * pressTab
 * scrollIntoView

*Note: you should NOT use action methods inside hooks code, it will cause recursion*
Example:
```
// that is not correct!
const clickBeforeActionHook = async (element: Element, actionName: string) => await element.click());
```


## [Collection](./lib/base-entities/collection.ts)

 "Clever" collection also will be received at the moment when we will need it (like a ["clever element"](#element)).

 On `Collection` you can:
  * perform filter operations:
    * `all(".//span[@class='menu']").filter(be.visible())`
    * `all(".//span[@class='menu']").filter(have.attribute('value', 'item'))`
  * find first element by condition:
    * `all(".autocomplete-results").findBy(have.text("Summer"))`
  * or get element by index:
    * `all(".autocomplete-results").get(2)`

## Assertion Conditions: [be.*](./lib/conditions/helpers/be.ts) and [have.*](./lib/conditions/helpers/have.ts)

Assertion conditions are used in "assertion actions" on elements and in "filter actions" on collections:

  * `element(".assignment_title").should(be.visible)`
  * `all(With.testId('2014100609491604293426')).first().shouldNot(have.text("New Case"))`

## Extended logging
On errors throwing (for example if `element.click()` or `Browser.should(...)` throws an exception) you can enable attaching of screenshots and page source to an error. It can be useful in debugging, to make errors clearer and easier to resolve.

For enabling that feature you should add in your `protractor.conf` next properties in `selenidejs` section:
```
export const config = {
    params: {
        selenidejs: {
            saveScreenshotOnFail: true, // put any trufy value here to enable automatic screenshot on error
            saveHtmlOnFail: true, // put any trufy value here to enable automatic page source on error

            // provide here custom path for saving screenshots directory (default - './screenshots')
            screenshotPath: path.resolve("./myscreenshots"),

            // provide here custom path for saving htmls directory (default - './htmls')
            htmlPath: path.resolve("./mypagesources")
        }
    }
};
```

## [Full page screenshot](./lib/screenshot.ts)
Full page browser screenshot achieved via screen-and-scroll strategy (take multiple screenshots and merge them into single image). To get full page screenshot use function `Browser.fullpageScreenshot()`.

## Custom project parameters
* `params.selenidejs.timeouts.toWaitElementsInMs`
  * timeout in milliseconds
  * for smart waits
    * "smart" means - the "wait implementation" will wait only the minimum needed amount of time, not greater than specified timeout
  * during
    * asserts / checking test steps results
    * access to elements
  * Default value = `10000`
  * `npm test -- --params.selenidejs.timeouts.toWaitElementsInMs=20000`
* `params.selenidejs.timeouts.toHardWaitInMs`
  * timeout in milliseconds
  * for hard wait
    * "hard" means -  the "wait implementation" will wait whole timeout interval
  * Default value = `1000`
  * `npm test -- --params.selenidejs.timeouts.toHardWaitInMs=2000`
