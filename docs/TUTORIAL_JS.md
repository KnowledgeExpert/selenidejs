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
    "selenidejs": "^1.0.0",
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

export let browser;

beforeAll(() => {
    // you need a webdriver instance for Selenidejs
    // to be able to iteract with browser
    const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    
    // now you can create your Browser instance and main entry point to SelenideJS API
    browser = Browser.configuredWith()
        .driver(driver)
        .timeout(5000) // this is MAXIMUM wait time for elements to be visible or match conditions
        .build();

    // jasmine default timeout is 5 seconds, after that it will automatically fail all tests
    // so we need to extend it
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterAll(async () => {
   await browser.quit();
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

const { have } = require('selenidejs');
const { browser } = require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await browser.open('http://the-internet.herokuapp.com/');
        await browser.should(have.title('The Internet'));
    });
});
```

The `describe`, `it` syntax is from the Jasmine framework. `browser` is the instance of `Browser` selenidejs class, which is used for browser-level commands such as navigation with `browser.open`, assertion `browser.should`, etc.

Now run the test with

    npm test

You should see a Chrome browser window open up and navigate to the site, then close itself (this should be very fast!). Congratulations, you've run your first Selenidejs test!

Step 2 - interacting with elements
----------------------------------

Now let's add new test to interact with elements on the page. Change spec.js to the following:

```javascript
// spec.js

const { have, be, With } = require('selenidejs');
const { browser } = require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await browser.open('http://the-internet.herokuapp.com/');
        await browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await browser.element('button').click();

        await browser.element(by.id('finish')).should(be.visible);
    });
});
```

This uses the `browser.element` and `With`, which are also provided by Selenidejs.

Elements in Selenidejs are lazy - it means when you do `const element = browser.element(...)` no actual search of webelement on a page performed. This method returns Element object, which can be used to interact with element, get information from it, or assert its state.

In the test, we used `should` method to assert that 'Hello world!' text will be displayed after pressing on a button. `With` is a module which contains bunch of readable and useful aliases for building elements locators (like `by.text`, `by.attribute`, etc.).

`browser.element` takes one parameter with type of Locator or string. In case of string passed Selenidejs will automatically build `by.xpath` or `by.css` Locator, depends on string content.

tsdocs - [With](./tsdocs/modules/by.md) module and [Element](./tsdocs/classes/element.md) class.

Run the tests with

    npm test

You should see a Chrome browser window open up and navigate to the Google (twice), then close itself (this should be still very fast). `be.visible` is ElementCondition object, which can be applied to `element.should(...)` assert, which will wait until element will match that condition, otherwise will throw an error after timeout (default is 4 seconds, can be configured during creation of `Browser` instance, see original example above).


Step 3 - chaining
-----------------------------------------------

Change spec.js to the following:

```javascript
// spec.js

const { have, be, With, perform } = require('selenidejs');
const { browser } = require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
            await browser.open('http://the-internet.herokuapp.com/');
            await browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await browser.element('button').click();

        await browser.element(by.id('finish')).should(be.visible);
    });

    it('should reset password', async () => {
        await browser.open('http://the-internet.herokuapp.com/forgot_password');
        await browser.element('#email').setValue('my@email.com')
            .then(perform.pressEnter);

        await browser.element('#content').should(have.text("Your e-mail's been sent!"));
    });
});
```

Special feature of Selenidejs it chaining with native promises. `browser.element(...).setValue(...).then(perform.pressEnter)` means that if setValue succeeds, do another action on same element (`pressEnter` in this case). This kind of chaining can be used like `element.hover().then(perform.click).then(perform.doubleClick)...`. We also can use queries - `const elementTextAfterHover = Browser.element(...).hover().then(get.text)`.

`perform` is a module that stores commands for element and browser (f.e. click  - for element, quit - for browser). `get` is a module that stores queries for element, collection and browser (like `text` - for element, `url` - for browser, `size` - for collection).


tsdocs - [perform](./tsdocs/modules/perform.md) and [take](./tsdocs/classes/get.md) modules.


Step 3 - changing the Browser.configuration
-------------------------------------------

TBD

Step 4 - elements collection
----------------------------

Often you do need to use group of elements, to assert their quantity or texts, to filter them or find some particular element in collection. You can create lazy collection of elements using `browser.all(...)`, which returns an Collection object. In our example we can use collection to assert that search results have particular size.

Change your spec.js to:

```javascript
// spec.js

const { have, be, With, perform } = require('selenidejs');
const { browser } = require('./base');

describe('The Internet', () => {
    it('should have a title', async () => {
        await browser.open('http://the-internet.herokuapp.com/');
        await browser.should(have.title('The Internet'));
    });

    it('should have correct dynamic text', async () => {
        await browser.open('http://the-internet.herokuapp.com/dynamic_loading/1');
        await browser.element('button').click();

        await browser.element(by.id('finish')).should(be.visible);
    });

    it('should reset password', async () => {
        await browser.open('http://the-internet.herokuapp.com/forgot_password');
        await browser.element('#email').setValue('my@email.com')
            .then(perform.pressEnter);

        await browser.element('#content').should(have.text('Your e-mail\'s been sent!'));
    });

    it('should show correct column names', async () => {
        await browser.open('http://the-internet.herokuapp.com/tables');

        await browser.element('#table1').element('thead').all('span')
            .should(have.texts('Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action'));
    });
});
```

We added new test with assert for Collection. That line consists of three parts:
- builing lazy collection of elements (`browser.element('#table1').element('thead').all('span')`)
- assert collection with an `have.texts` condition

As you can see elements laziness in SelenideJS is very powerfull, since you can get rid of long complex locators in side of filtering and finding elements by little parts.


For example if you want to find element which can be accessible by xpath like `".//*[@id='w3c']/ul/li[1]/div[2]"` you can do in two ways:
* use full xpath -  `const element = browser.element(".//*[@id='w3c']/ul/li[1]/div[2]")`
* use step-by-step strategy:
```
const element = Browser.all('#w3c').element('ul')
    .all('li').elementAt(1)
    .all('div').elementAt(2)
```


If element can be found by xpath, both of examples will work. But still, second approach have several benefits:
* it is easier to read, since you break long xpath to sequence of steps -> get all #w3c
* it allows to switch complex and not very readable xpath expression to small css parts
* it allows to use filtering, which sometimes can help you transform long, complex, and precise locators in side of more general locator with a filtering (f.e. transform `browser.element("//a[@aria-label='Stars' and contains(@class,'five')]")` to `browsesr.all('a').filterBy(have.attributeWithValue('aria-label', 'Start')).filteredBy(have.cssClass('five'))`, which can be longer, but much easier to read)

Also using second approach will give you precise errors in case of element not found. For example if you want to assert that element located by long xpath is visible, but there is no `.//*[@id='w3c']` element, first approach will give you following error: `browser.element(By(xpath selector, ".//*[@id='w3c']/ul/li[1]/div[2]")) should be visible.` while second approach will have output like: `browser.element(By(css, "#w3c)) should be visible`. This will work on every part of your locator, including filtering and getting elements by index. Than kind of precise errors will help you to faster figure out what is wrong with your locator.

tsdocs - [Collection](./tsdocs/classes/Collection.md) class.

Step 5 - adding page objects
----------------------------

TBD

Step 6 - adding widget objects
------------------------------

TBD
