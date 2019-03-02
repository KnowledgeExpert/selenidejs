[![Build Status](https://travis-ci.com/KnowledgeExpert/selenidejs.svg?branch=master)](https://travis-ci.com/KnowledgeExpert/selenidejs)
[![Coverage Status](https://coveralls.io/repos/github/KnowledgeExpert/selenidejs/badge.svg?branch=master)](https://coveralls.io/github/KnowledgeExpert/selenidejs?branch=master)
[![NPM Version](https://badge.fury.io/js/selenidejs.svg)](https://badge.fury.io/js/selenidejs)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/selenidejs.svg)[![Join the chat at https://t
.me/js_for_testing](https://img.shields.io/badge/join%20chat-telegram-blue.svg)](https://t.me/js_for_testing)

# SelenideJS

Wrapper for Selenium WebDriver, which provides testing user-oriented API for writing stable and readable UI tests in
JavaScript/TypeScript.

### Prerequisites

[Nodejs 8+](https://nodejs.org/en/)

### Installing

Install `selenidejs` via npm to your project:

```
npm i --save-dev selenidejs
```

### Usage

Set your webdriver instance:

```
import { Browser } from "selenidejs";
const webDriverInstance = ...;
const browser = Browser.drivedBy(webDriverInstance).build();
```

And you are ready to go!

## Quick Start and Examples

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
    // browser = Browser.drivedBy(webdriver).timeout(4000).baseUrl('https://google.com').build();

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
    // await browser.element('[name=q]')).setValue('selenium');
    // OR:

    import { by } from 'selenidejs';

    const query = browser.element(by.name('q')); // actual search does not start here, the element is lazy
    await query.setValue('selenium')              // here the actual webelement is found
    await query.pressEnter();                    // here the actual webelement is found again
```

AND
```typescript
    // in case we need to filter collection of items by some condition like visibility:

    import { be } from 'selenidejs';

    const results = browser.all('.srg .g').filteredBy(be.visible);


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

        await browser.element(by.name('q')).setValue('selenium').then(perform.pressEnter);

    // instead of
    const query = browser.element(by.name('q'));
    await query.setValue('selenium')
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
    if (await browser.all('.i-will-appear').waitUntil(have.sizeMoreThanOrEqual(2))) {
        // do something...
    }
```

Or, by using non-waiting versions, if "you are in a rush":)...
```typescript
    if (await browser.element('#i-might-say-yes-or-no').matching(have.text('yes'))) {
        // do something...
    }
    ...
    if (await browser.all('.i-will-appear').matching(have.sizeMoreThanOrEqual(2))) {
        // do something...
    }
```

***

In case you want to be different) ...
```typescript
   const browser = new Browser(Configuration.withDriver(driver).timeout(4000).build());
```

## Tutorials

You can start with Typescript or Javascript tutorial to get familiar with basic and some advanced features of Selenidejs.
 Using Typescript is recommended when writing tests (it will enable IDE's autocompletion features, compile-time checks,
etc. since Selenidejs itself written in Typescript), but you still can use Javascript.

Typescript tutorial can be found [here](./docs/TUTORIAL_TS.md).

Javascript tutorial can be found [here](./docs/TUTORIAL_JS.md).

## API Documentation

Generated API documentation can be found [here](./tsdocs/README.md).

## For Contributors

### Guide

please read [contributing](./docs/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting
 pull requests to
 us.

### Running the tests

#### Prerequisites
- google chrome is installed locally

run unit and integration tests:

```
npm test
```

### run code style test

run ts linter:

```
npm run lint
```

## Versioning

we use [npm](https://www.npmjs.com/) for versioning. for the versions available, see the [npm](https://www.npmjs.com/package/selenidejs#versions) or github [releases](https://github.com/knowledgeexpert/selenidejs/releases).

## Authors

* **Iakiv Kramarenko** - *initial work* - [yashaka](https://github.com/yashaka)
* **Alexander Popov** - *initial work* - [aleksanderpopov](https://github.com/aleksanderpopov)

see also the full list of current [contributors](https://github.com/knowledgeexpert/selenidejs/contributors) who participated in this project.

## License

this project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE.md) file for details
