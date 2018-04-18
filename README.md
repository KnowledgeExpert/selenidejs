Protractor-extensions is a wrapper for Element and Collection of Elements that uses [Protractor](https://www.protractortest.org/#/) as a runner.

## How to use Selenidejs

In order to use selenidejs you have to add

`"selenidejs": "git+ssh://git@github.com/KnowledgeExpert/selenidejs.git"`

to `dependencies` in `package.json`.

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

 Also you can use our helper [With](https://github.com/KnowledgeExpert/protractor-extensions/blob/master/lib/protractor-extensions/lib/locators/with.ts) several useful `By`'s:
  - `element(With.exactText('Continue'))`
  - `all(With.attribute("href", "/continue"))`

## [Element](./lib/base-entities/element.ts)

In Protractor-extensions we are using "clever" elements, because an actual "version" of the real element from the page will be received at the moment when we will need it, and then we can perform some action or condition check on it. If it is impossible to perform an action within the specified timeout, you will receive an error message.

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

## [Full page screenshot](./lib/screenshot.ts)
Full page browser screenshot achieved via screen-and-scroll strategy (take multiple screenshots and merge them into single image). To get full page screenshot use function `Screenshot.take()`.

## Custom project parameters
* `params.timeout.toWaitElementsInMs`
  * timeout in milliseconds
  * for smart waits
    * "smart" means - the "wait implementation" will wait only the minimum needed amount of time, not greater than specified timeout
  * during
    * asserts / checking test steps results
    * access to elements
  * Default value = `10000`
  * `npm test -- --params.timeout.toWaitElementsInMs=20000`
* `params.timeout.toHardWaitInMs`
  * timeout in milliseconds
  * for hard wait
    * "hard" means -  the "wait implementation" will wait whole timeout interval
  * Default value = `1000`
  * `npm test -- --params.timeout.toHardWaitInMs=2000`


