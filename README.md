[![Build Status](https://travis-ci.com/KnowledgeExpert/selenidejs.svg?branch=master)](https://travis-ci.com/KnowledgeExpert/selenidejs)
[![Coverage Status](https://coveralls.io/repos/github/KnowledgeExpert/selenidejs/badge.svg?branch=master)](https://coveralls.io/github/KnowledgeExpert/selenidejs?branch=master)
[![NPM Version](https://badge.fury.io/js/selenidejs.svg)](https://badge.fury.io/js/selenidejs)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/selenidejs.svg)[![Join the chat at https://t.me/selenidejs](https://img.shields.io/badge/join%20chat-telegram-blue.svg)](https://t.me/selenidejs)[![Присоединяйся к чату https://t.me/js_for_testing](https://img.shields.io/badge/%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D0%B8%20%D0%B2-%D1%87%D0%B0%D1%82-green.svg)](https://t.me/js_for_testing)

# SelenideJS

Wrapper for Selenium WebDriver, which provides testing user-oriented API for writing stable and readable UI tests in
JavaScript/TypeScript.

## Table of content

* [Usage](#usage)
* [Quick Start](#quick-start)
  * [Basic api](#basic-api)
  * [More advanced tricks](#more-advanced-tricks)
* [Examples](#more-examples)
  * [SelenideJS + Jasmine](#selenidejs-on-top-of-selenium-webdriver-with-jasmine-as-test-runner-typescript-version)
  * [SelenideJS + Protractor](#selenidejs-on-top-of-protractor-typescript-version)
  * [SelenideJS + Webdriverio](#selenidejs-on-top-of-webdriverio-typescript-version)
  * [SelenideJS + Toundra](#selenidejs-on-top-of-selenium-webdriver-with-toundra-as-test-runner-typescript-version)
* [Tutorials](#tutorials)
  * [General](#general)
    * [TypeScript](#typescript-tutorial)
    * [JavaScript](#javascript-tutorial)
  * [How to create custom conditions](#how-to-create-custom-conditions)
* [API documentation](#api-documentation)
* [Contribution](#for-contributors)
* [License](#license)

## Prerequisites

[Nodejs 8+](https://nodejs.org/en/)

## Installing

Install `selenidejs` via npm to your project:

```
npm i --save-dev selenidejs
```

## Usage

Set your webdriver instance:

```typescript
import { Browser } from 'selenidejs';
const webDriverInstance = ...;
const browser = Browser.configuredWith().driver(webDriverInstance).build();
```

And you are ready to go!

## Quick Start

### Basic API

GIVEN

```typescript
    import { Builder, Capabilities } from 'selenium-webdriver';
    const webdriver = new Builder().withCapabilities(Capabilities.chrome()).build()
```

WHEN

```typescript

    import { Browser } from 'selenidejs';

    const browser = Browser.configuredWith()
        .driver(webdriver)
        .baseUrl('https://google.com')
        .timeout(4000)
        .build();

    // OR:
    // browser = Browser.chromeWith().timeout(4000).baseUrl('https://google.com').build();

    // OR:
    // browser = Browser.chrome(); //if you are ok with defaults for baseUrl and timeout
```

AND
```typescript
    await browser.open('/ncr');
```

AND
```typescript
    // await browser.element('[name=q]')).type('selenium');
    // OR:

    import { by } from 'selenidejs';

    const query = browser.element(by.name('q')); // actual search does not start here, the element is lazy
    await query.type('selenium')                 // here the actual webelement is found
    await query.pressEnter();                    // here the actual webelement is found again
```

AND
```typescript
    // in case we need to filter collection of items by some condition like visibility:

    import { be } from 'selenidejs';

    const results = browser.all('.srg .g').filteredBy(be.visible);
```

THEN
```typescript
    import { have } from 'selenidejs';

    await results.should(have.size(10));
    await results.first.should(have.text('Selenium automates browsers'));
```

FINALLY
```typescript
    await browser.quit();
```

### More advanced tricks

```typescript
    // OR just in case you like the "flow"
    import { find, should } from 'selenidejs';

    await browser.all('.srg .g').should(have.size(10))
        .then(find.first)
        .then(should.match(have.text('Selenium automates browsers')));
```

***

```typescript
    // OR:
    import { perform } from 'selenidejs';

    await browser.element(by.name('q')).type('selenium').then(perform.pressEnter);

    // instead of
    const query = browser.element(by.name('q'));
    await query.type('selenium')
    await query.pressEnter();
```

***

Not sure when you will need it, but just in case:) ...
```typescript
    import { get } from 'selenidejs';

    const iWillRememberYourTextOnceReady =
        await browser.element('#i-change-my-text-on-hover').hover().then(get.someText)
```

***

You might think you need something like...
```typescript
    import { its } from 'selenidejs';

    if (await browser.element('#i-might-say-yes-or-no').get(its.text) === 'yes') {
        // do something...
    }
```

Or...
```typescript
    import { their } from 'selenidejs';

    if (await browser.all('.option').get(their.size) >= 2) {
        // do something...
    }
```

Maybe one day, you really find a use case:) But for above cases, probably easier would be:
```typescript
    if (await browser.element('#i-might-say-yes-or-no').waitUntil(have.text('yes'))) {
        // do something...
    }
    ...
    if (await browser.all('.i-will-appear').waitUntil(have.sizeGreaterThanOrEqual(2))) {
        // do something...
    }
```

Or, by using non-waiting versions, if "you are in a rush":)...
```typescript
    if (await browser.element('#i-might-say-yes-or-no').matching(have.text('yes'))) {
        // do something...
    }
    ...
    if (await browser.all('.i-will-appear').matching(have.sizeGreaterThanOrEqual(2))) {
        // do something...
    }
```

***

In case you want to be different) ...
```typescript
   const browser = new Browser(Configuration.withDriver(driver).timeout(4000).build());
```

## More Examples

##### [SelenideJS on top of Selenium Webdriver with Jasmine as test runner (TypeScript version)](https://github.com/KnowledgeExpert/selenidejs-webdriver-jasmine-example)
##### [SelenideJS on top of Protractor (TypeScript version)](https://github.com/KnowledgeExpert/selenidejs-protractor-example)
##### [SelenideJS on top of Webdriverio (TypeScript version)](https://github.com/KnowledgeExpert/selenidejs-webdriverio-mocha-example)
##### [SelenideJS on top of Selenium Webdriver with Toundra as test runner (TypeScript version)](https://github.com/KnowledgeExpert/selenidejs-webdriver-toundra-example)

## Tutorials

### General

You can start with Typescript or Javascript tutorial to get familiar with basic and some advanced features of Selenidejs.
 Using Typescript is recommended when writing tests (it will enable IDE's autocompletion features, compile-time checks,
etc. since Selenidejs itself written in Typescript), but you still can use Javascript.

###### [Typescript tutorial](./docs/TUTORIAL_TS.md)

###### [Javascript tutorial](./docs/TUTORIAL_JS.md)

### How to create custom conditions

If you ever need to write custom conditions like `button.should(have.matchedText(/.*Continue.*/g))`
or `collection.should(have.sizeInRange(0, 10))` you might need to add your custom conditions.
Detailed howto placed in [api docs](./tsdocs/modules/condition.md).

## API Documentation

Generated API documentation can be found [here](./tsdocs/README.md).

## For Contributors

### Guide

Please read [contributing](./docs/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting
 pull requests to
 us.

### Running the tests

#### Prerequisites
- google chrome is installed locally

Run unit and integration tests:

```
npm test
```

### Run code style test

run ts linter:

```
npm run lint
```

## Versioning

We use [npm](https://www.npmjs.com/) for versioning. for the versions available, see the [npm](https://www.npmjs.com/package/selenidejs#versions) or github [releases](https://github.com/knowledgeexpert/selenidejs/releases).

## History & Contributors

The Selenide was originally started to be ported from Java to JavaScript by [@yashaka](https://github.com/yashaka) (Iakiv Kramarenko) in the [selenejs](https://github.com/automician/selenejs) repository (originally named also as selenidejs).

Then Knowledge Expert picked the Iakiv's race, and under Iakiv's leadership rewrote the initial draft implementation in TypeScript. [@alex-popov-tech](https://github.com/alex-popov-tech) (Alexander Popov) put main efforts in the beginning to build the first working version.

In Feb 2019, after refining the API and hardening the implementation, the 1.0 version was released.

See the [CHANGELOG](CHANGELOG.md) for details of all further development details and changes.

See also the full list of [contributors](https://github.com/knowledgeexpert/selenidejs/contributors) who participated in this project.

## License

this project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE.md) file for details
