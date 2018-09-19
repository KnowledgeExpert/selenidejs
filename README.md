[![Build Status](https://travis-ci.com/KnowledgeExpert/selenidejs.svg?branch=master)](https://travis-ci.com/KnowledgeExpert/selenidejs)
[![Coverage Status](https://coveralls.io/repos/github/KnowledgeExpert/selenidejs/badge.svg?branch=master)](https://coveralls.io/github/KnowledgeExpert/selenidejs?branch=master)
[![NPM Version](https://badge.fury.io/js/selenidejs.svg)](https://badge.fury.io/js/selenidejs)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/selenidejs.svg)

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
Browser.setDriver({webdriver: myWebdriverInstance});
```

And you are ready to go!

## Running the tests

Run unit and integration tests:

```
export SELENIDEJS_REMOTE_URL="YOUR_REMOTE_WEBDRIVER_URL" && npm test
```

### Run code style test

Run ts linter:

```
npm run lint
```

## Documentation

Generated API documentation can be found [here](docs/README.md).

## Contributing

TBD

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to
 us.

## Versioning

We use [NPM](http://npm.com/) for versioning. For the versions available, see the [NPM](https://www.npmjs.com/package/selenidejs#versions) or github [releases](https://github.com/KnowledgeExpert/selenidejs/releases).

## Authors

* **Yakiv Kramarenko** - *Initial work* - [yashaka](https://github.com/yashaka)
* **Alexander Popov** - *Initial work* - [AleksanderPopov](https://github.com/AleksanderPopov)

See also the list of [contributors](https://github.com/KnowledgeExpert/selenidejs/contributors) who participated in this project.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE.md](LICENSE.md) file for details
