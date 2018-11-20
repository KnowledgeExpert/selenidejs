[![Build Status](https://travis-ci.com/KnowledgeExpert/selenidejs.svg?branch=master)](https://travis-ci.com/KnowledgeExpert/selenidejs)
[![Coverage Status](https://coveralls.io/repos/github/KnowledgeExpert/selenidejs/badge.svg?branch=master)](https://coveralls.io/github/KnowledgeExpert/selenidejs?branch=master)
[![NPM Version](https://badge.fury.io/js/selenidejs.svg)](https://badge.fury.io/js/selenidejs)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/selenidejs.svg)[![Join the chat at https://t
.me/js_for_testing](https://img.shields.io/badge/join%20chat-telegram-blue.svg)](https://t.me/js_for_testing)

# SelenideJS

Wrapper for Selenium WebDriver, which provides concise API for writing stable and readable UI tests in
JavaScript/TypeScript.

### Prerequisites

[Nodejs 8+](https://nodejs.org/en/)

### Installing

Install `selenidejs` via npm to your project:

```
npm i --save-dev selenidejs
```

Set your webdriver instance:

```
import { Browser } from "selenidejs";
const webDriverInstance = ...;
Browser.configuration.webdriver = webDriverInstance;
```

And you are ready to go!

## Tutorial


You can start with Typescript or Javascript tutorial to get familiar with basic and some advance features of Selenidejs.
 Using Typescript is recommended when writing tests (it will enable IDE's autocompletion features, compile-time checks,
etc. since Selenidejs itself written in Typescript), but you still can use Javascript.

Typescript tutorial can be found [here](./docs/TUTORIAL_TS.md).

Javascript tutorial can be found [here](./docs/TUTORIAL_TS.md).

## Running the tests
### Prerequisites
- Google Chrome is installed locally

Run unit and integration tests:

```
npm test
```

### Run code style test

Run ts linter:

```
npm run lint
```

## API Documentation

Generated API documentation can be found [here](./tsdocs/README.md).

## Contributing

Please read [CONTRIBUTING](./docs/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting
 pull requests to
 us.

## Versioning

We use [NPM](http://npm.com/) for versioning. For the versions available, see the [NPM](https://www.npmjs.com/package/selenidejs#versions) or github [releases](https://github.com/KnowledgeExpert/selenidejs/releases).

## Authors

* **Yakiv Kramarenko** - *Initial work* - [yashaka](https://github.com/yashaka)
* **Alexander Popov** - *Initial work* - [AleksanderPopov](https://github.com/AleksanderPopov)

See also the list of [contributors](https://github.com/KnowledgeExpert/selenidejs/contributors) who participated in this project.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE.md) file for details
