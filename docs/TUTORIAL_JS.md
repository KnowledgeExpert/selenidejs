Tutorial
========

This is a simple tutorial that shows you how to set up Selenidejs with Jasmine and start running tests.


Prerequisites
-------------

- Node.js 8+
- Google Chrome

This tutorial will set up a test using local Google Chrome browser.

Javascript tutorial
-------------------

Setup
-----

Start in new empty folder, for example `selenidejs_demo`.

Add three new files in project root:

`package.json` - config file for npm, contains dependencies list and instructions on how to run tests.
```json
{
  "scripts": {
    "test": "jasmine ./*spec.js"
  },
  "dependencies": {
    "jasmine": "^3.3.0",
    "selenidejs": "^0.2.8",
    "chromedriver": "^2.43.1"
  }
}
```
*Notes:*
* "pretest" script contains unix-specific command `rm -rf`, for Windows please use ` del /f /s /q build`
* for Windows `chromedriver` package does not work, you need manually ensure that chromdriver.exe exist, compatible with current Google Chrome, and present in system PATH (you can verify its correctness calling `chromedriver` in cmd, there should not be any errors)

`base.js` - base spec file, which will contain Jasmine hooks for browser initialization.
```
const { Browser } = require('selenidejs');
const { Builder, Capabilities } = require ('selenium-webdriver');

beforeAll(() => {
    // jasmine default timeout is 5 seconds, after that it will automatically fail all tests
    // so we need to extend it
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    // this is MAXIMUM wait time for elements to be visible or match conditions
    // more on waits and conditions further
    Browser.configuration.timeout = 5000;

    // you need to set webdriver instance for Selenidejs
    // to be able to iteract with browser
    Browser.configuration.webdriver = new Builder().withCapabilities(Capabilities.chrome()).build();
});

afterAll(async () => {
   await Browser.quit();
});
```

Use npm to install dependencies locally:

    npm install

This will install Selenidejs, jasmine test runner and helper lib, which will download latest chromedriver binary for current operation system.

Step 1 - write a test
---------------------

Let's start with a simple test that navigates to The Internet and checks its title.

Copy the following into spec.js:

```javascript
// spec.js

const { Browser, have } = require('selenidejs');
require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await Browser.open('http://the-internet.herokuapp.com/');
        await Browser.should(have.title('The Internet'));
    });
});
```

The `describe`, `it` syntax is from the Jasmine framework. `Browser` is a Selenidejs module, which is used for browser-level commands such as navigation with `Browser.open`, assertion `Browser.should`, etc.

Now run the test with

    npm test

You should see a Chrome browser window open up and navigate to the site, then close itself (this should be very fast!). Congratulations, you've run your first Selenidejs test!

Step 2 - interacting with elements
----------------------------------

Now let's add new test to interact with elements on the page. Change spec.js to the following:

```javascript
// spec.js

const { Browser, have, be, With } = require('selenidejs');
require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await Browser.open('http://the-internet.herokuapp.com/');
        await Browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await Browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await Browser.element('button').click();

        await Browser.element(With.id('finish')).should(be.visible);
    });
});
```

This uses the `Browser.element` and `With`, which are also provided by Selenidejs.

Elements in Selenidejs are lazy - it means when you do `const element = Browser.element(...)` no actual search of webelement on a page performed. This methods return Element object, which can be used to interact with element, get information from it, or assert its state.

In the test, we used `should` method to assert that 'Hello world!' text will be displayed after pressing on button. `With` is a module which contains bunch of readable and useful aliases for building elements locators (like With.text, With.attribute, etc.).

`Browser.element` takes one parameter with type of Locator or string. In case of string passed Selenidejs will automatically build `With.xpath` or `With.css` Locator, depends on string content.

tsdocs - [With](./tsdocs/modules/with.md) module and [Element](./tsdocs/classes/element.md) class.

Run the tests with

    npm test

You should see a Chrome browser window open up and navigate to the Google (twice), then close itself (this should be still very fast). `be.visible` is ElementCondition object, which can be applied to `element.should(...)` assert, which will wait until element will match that condition, otherwise will throw an error after timeout (default is 4 seconds, can be changed in `Browser.configuration`).


Step 3 - chaining
-----------------------------------------------

Change spec.js to the following:

```javascript
// spec.js

const { Browser, have, be, With, perform } = require('selenidejs');
require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
            await Browser.open('http://the-internet.herokuapp.com/');
            await Browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await Browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await Browser.element('button').click();

        await Browser.element(With.id('finish')).should(be.visible);
    });

    it('should reset password', async () => {
        await Browser.open('http://the-internet.herokuapp.com/forgot_password');
        await Browser.element('#email').setValue('my@email.com')
            .then(perform.pressEnter);

        await Browser.element('#content').should(have.text("Your e-mail's been sent!"));
    });
});
```

Special feature of Selenidejs it chaining with native promises. `Browser.element(...).setValue(...).then(perform.pressEnter)` means that if setValue succeeds, do another action on same element (pressEnter in this case). These kind of chaining can be used like `element.click().then(perform.click).then(perform.click)...` We also can use queries - `const elementTextAfterSetValue = Browser.element(...).setValue(...).then(take.text)`.

`perform` is a module that stores commands for element and browser (f.e. click  - for element, quit - for browser). `take` is a module that stores queries for element, collection and browser (text - for element, url - for browser, filtered - for collection).

tsdocs - [perform](./tsdocs/modules/perform.md) and [take](./tsdocs/classes/take.md) modules.


Step 3 - changing the Browser.configuration
-------------------------------------------

Now that we've written some basic tests, let's take a look at the Selenidejs configuration. The configuration object lets you do things like changing timeout, adding on element action hooks (which will be called before or/and after element action), adding on failure hooks (which will be called if assertion or action was failed), making fullpage screenshots instead of usual viewport screenshots, etc. By default Selenidejs will do snapshot of page source and screenshot on failure, so lets enable fullpage screenshots to see how it works.


Change spec.js and base.js to the following:

```javascript
// spec.js

const { Browser, have, be, With, perform } = require('selenidejs');
require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await Browser.open('http://the-internet.herokuapp.com/');
        await Browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await Browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await Browser.element('button').click();

        await Browser.element(With.id('finish')).should(be.visible);
    });

    it('should reset password', async () => {
        await Browser.open('http://the-internet.herokuapp.com/forgot_password');
        await Browser.element('#email').setValue('my@email.com')
            .then(perform.pressEnter);

        await Browser.element('#content').should(have.text("Your e-mail's been sent!"));
    });

    it('demo failed test', async () => {
        await Browser.open('http://the-internet.herokuapp.com/large');
        await Browser.element('#invalid').click();
    });
});
```

```javascript
// base.js

const { Browser } = require('selenidejs');
const { Builder, Capabilities } = require ('selenium-webdriver');

beforeAll(() => {
    // jasmine default timeout is 5 seconds, after that it will automatically fail all tests
    // so we need to extend it
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    // this is MAXIMUM time for elements to be visible or match conditions
    // more on waits and conditions further
    Browser.configuration.timeout = 5000;

    // turn on fullpage screenshots on Browser.screenshot()
    Browser.configuration.fullpageScreenshot = true;

    // snipped from webdrier-selenim, which just opens chrome browser and pass
    // just created webdrvier instance to Selenidejs
    Browser.configuration.webdriver = new Builder().withCapabilities(Capabilities.chrome()).build();
});

afterAll(async () => {
   await Browser.quit();
});
```
Run tests again.

You should see error in one of tests with message like:
```
Error: browser.find(By(css selector, #invalid)) should be visible. Wait timed out after 4000ms.
Saved screenshot: /Users/myuser/selenidejs_demo/screenshots/The_Internet_11_18_2018_1_16_18_AM.png
Saved html: /Users/myuser/selenidejs_demo/htmls/The_Internet_11_18_2018_1_16_19_AM.html
```

Message consists of 4 parts:
 - entity which did not match the condition, with full description of how we tried to locate it (`browser.find(By(css selector, #invalid))`)
 - reason why test was failed (`should be visible`)
 - time passed for element to match condition (`Wait timed out after 4000ms.`)
 - default on failure hooks if enabled (save screenshot and page source)

You can copy screenshot path from terminal to your browser and see the actual fullpage screenshot.

Notice that test which we did for failing were pretty slow, and some time it seemed that nothing happend, and then test fails with strange error `Error: browser.find(By(css selector, #invalid)) should be visible. Wait timed out after 4000ms.`. Why it fails with such error, when we did not assert visibility of that fake element? The answer is placed below.

Elements actions like click, setValue, hover, pressKey, etc. are have built-in implicit wait for visibility, but for achieving speed of raw selenium actions it firstly try to execute action, and only if that attempt was failed will start waiting for element to be visible. That means when you do `element.click()` Selenidejs does following:
 * try to perform click
 * if click worked -> action done
 * else start waiting for element to be visible
 * if element becomes visible within timeout, try to perform click
   * if click worked -> action done
   * else throw an error
 * else throw an error

For a full list of options, tsdocs - [Browser.configuration](./tsdocs/classes/configuration.md) class.


Step 4 - elements collection
----------------------------

Okay, lets revert changes which cause our test to fail and discuss elements collection.

Often you do need to use group of elements, to assert their quantity or texts, to filter them or find some particular element in collection. You can create lazy collection of elements using `Browser.all(...)`, which returns an Collection object. In our example we can use collection to assert that search results have particular size.

Change your spec.js to:

```javascript
// spec.js

const { Browser, have, be, With, perform } = require('selenidejs');
require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await Browser.open('http://the-internet.herokuapp.com/');
        await Browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await Browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await Browser.element('button').click();

        await Browser.element(With.id('finish')).should(be.visible);
    });

    it('should reset password', async () => {
        await Browser.open('http://the-internet.herokuapp.com/forgot_password');
        await Browser.element('#email').setValue('my@email.com')
            .then(perform.pressEnter);

        await Browser.element('#content').should(have.text('Your e-mail\'s been sent!'));
    });

    it('should show correct column names', async () => {
        await Browser.open('http://the-internet.herokuapp.com/tables');

        await Browser.element('#table1').element('thead').all('span')
            .should(have.texts('Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action'));
    });
});
```

We added new test with assert for Collection. That line consists of three parts:
- builing lazy collection of elements (`Browser.element('#table1').element('thead').all('span')`)
- assert collection with an `have.texts` condition

As you can see elements laziness in Selenidejs is very powerfull, since you can get rid of long complex locators in side of filtering and finding elements by little parts.


For example if you want to find element which can be accessible by xpath like `".//*[@id='w3c']/ul/li[1]/div[2]"` you can do in two ways:
* use full xpath -  `const element = Browser.element(".//*[@id='w3c']/ul/li[1]/div[2]")`
* use step-by-step strategy:
```
const element = Browser.all('#w3c').element('ul')
    .all('li').get(1)
    .all('div').get(2)
```

If element can be found by xpath, both of examples will work. But still, second approach have several benefits:
* it is easier to read, since you break long xpath to sequence of steps -> get all #w3c
* it allows to switch complex and not very readable xpath expression to small css parts
* it allows to use filtering, which sometimes can help you transform long, complex, and precise locators in side of more general locator with a filtering (f.e. transform `Browser.element("//a[@aria-label='Stars' and contains(@class,'five')]")` to `Browsesr.all('a').filterBy(have.exacsAttribute('aria-label', 'Start')).filterBy(have.cssClass('five'))`, which can be longer, but much easier to read)

Also using second approach will give you precise errors in case of element not found. For example if you want to assert that element located by long xpath is visible, but there is no `.//*[@id='w3c']` element, first approach will give you following error: `browser.element(By(xpath selector, ".//*[@id='w3c']/ul/li[1]/div[2]")) should be visible.` while second approach will have output like: `browser.element(By(css, "#w3c)) should be visible`. This will work on every part of your locator, including filtering and getting elements by index. Than kind of precise errors will help you to faster figure out what is wrong with your locator.

tsdocs - [Collection](./tsdocs/classes/Collection.md) class.

Step 5 - adding page objects
----------------------------

TBD

Step 6 - adding widget objects
------------------------------

TBD
