# Changelog

## next

* think on refactoring
  * `await browser.element('#new-todo').type('do something').then(perform.pressEnter)`
  * to
  * `await browser.element('#new-todo').type('do something').then(command.pressEnter)`
* consider returning ElementPromise from all Element.* commands to allow:
  * `await browser.element('#new-todo').type('do something').pressEnter()`
  * same like in raw Selenium WebDriver

## 1.4.6 (to be released on 2023.11.20)

* fix `command.js.type` working when when value is `null`
* fix `element.perform(command)` incorrect typing issues
* update selenium to 4.15.0

## 1.4.5 (released on 2023.06.29)

Flatten inner lists inside `have.texts(HERE)`. Now you can pass nested arrays to `have.texts`:

```typescript
// Like:
await table.all('tr').all('td').should(
    have.texts(
        ['Bach', 'Frank', 'fbach@yahoo.com'],
        ['Conway', 'Tim', 'tconway@earthlink.net'],
    )
)

// Instead of:
await table.all('tr').all('td').should(
    have.texts(
        'Bach', 'Frank', 'fbach@yahoo.com',
        'Conway', 'Tim', 'tconway@earthlink.net',
    )
)
```

You might need this if you use formatter like prettier, that will format your code more like:

```typescript
await table.all('tr').all('td').should(
    have.texts(
        'Bach',
        'Frank',
        'fbach@yahoo.com',
        'Conway', 
        'Tim', 
        'tconway@earthlink.net',
    )
)
```

– that is pretty not readable in context of table data...

## 1.4.4 (released on 2023.06.29)

new commands:

* collection.even
* collection.odd
* collection.sliced(start, end, STEP)
* collection.all(selector)
* collection.allFirst(selector)

new import alias:

* `import { command } from 'selenidejs'`
  * as alias to `import { perform } from 'selenidejs'`

fix bugs:

* once `collection.should(have.texts(...))` fails,
  sometimes returns unclear reason in error message:
  "Cannot read properties of undefined (reading 'includes')"

upgrade selenium to 4.10.0

## 1.4.3

fix bugs:

* have.exactText does not accept numbers
* have.exactTexts does not type hint for expected texts as numbers

## 1.4.2

* accept Locator in browser.element, browser.element.element, browser.element.all, and browser.all
* update Selenium to 4.9.2

## 1.4.0

* add prebuilt browser object to selenidejs imports

## 1.3.7 (to be released on 2022.12.08)

* added `collection.second` as alias to `collection.elementAt(1)`
* added `collection.by(condition)` as alias to `collection.filteredBy(condition)`
  * filteredBy will be deprecated in future releases
* updated selenium to 4.7.0

## 1.3.6 (to be released on 2022.07.12)

### New Features

* now you can pass a function that returns driver to provide smarter driver management: 

  ```typescript
  let globalDriver: WebDriver; // to be initialized later

  Browser.configuredWith()
    .driver(() => globalDriver)
    ._locationStrategy(mobile.selectorToBy)
    .timeout(10000)
    .build();
  ```

### CHANGES

* update selenium from 4.1.0 to 4.3.1

## 1.3.5 (broken release)

## 1.3.4 (released on 2022.05.31)

### New Features

* added Configuration._locationStrategy
    to customize the conversion from string selector to By in element builders
    like browser.element(selector), browser.all(selector),
         element.element(selector), element.all(selector)
    By default equals to built in Extensions.cssOrXpathToBy function
    that is as simple as:

    ```typescript
        export function cssOrXPathToBy(selector: string): By {
        const cssOrXPath = selector.trim();

        const isXpath = (str: string) => (
            str.startsWith('/')
            || str.startsWith('./')
            || str.startsWith('..')
            || str.startsWith('(')
            || str.startsWith('*/')
        );

        return isXpath(cssOrXPath)
            ? by.xpath(cssOrXPath)
            : by.css(cssOrXPath);
    }
    ```

    Hence you can provide any other custom conversion fn;)
    For example adapt selenidejs for appium with corresponding mobile selectors,
    see an example for android at [github.com/automician/selenidejs-mobile-test-appium-ts-template](https://github.com/automician/selenidejs-mobile-test-appium-ts-template/blob/32d1e55c8d749f56774a84f467b0166c7cd893e0/common/selenidejs/mobile.extensions.ts#L4) with usage in test by [link](https://github.com/automician/selenidejs-mobile-test-appium-ts-template/blob/main/__tests__/mobile.example.selenidejs.drd.test.ts)

  * !NOTE! The option starts with underscore dangle.
      In selenidejs the underscore dangle is used as a mark of "experimental" featues
      that might change in future releases.
      Speaking about `_locationStrategy` either its name of signature of fn value can be changed

### CHANGES

* update selenium to 4.1.0

### FIXES

*

## 1.3.3 (released on 2020.10.08)

### FIXES

* fixed `byXpath` function, so it trims input now to allow passing values such as `.//div`

## 1.3.2 (released on 2020.06.01)

### FIXES

* fixed finding by xpath when using `element`/`all` methods

## 1.3.1 (released on 2020.04.15)

### FIXES

* fixed `have.text` condition - it was using always `match` instead of using `match` or `includes` depending on passed argument

## 1.3.0 (released on 2020.04.09)

### New Features

* `executeScript` improvements:
  * `browser.executeScript(...)` and `element.executeScript(...)` - now accepts not plain `string`/`Function` - but brand new ones:
    * `browser.executeScript` - now accepts `(document, args, window) => ...` function, where:
      * `document` - is [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
      * `args` - is an array of passed additional arguments, like `browser.executeScript((document, args) => args[0] === 'foo' && args[1] === 'bar', 'foo', 'bar')`
      * `window` - is [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
    * `element.executeScript` - now accepts `(element, args, window) => ...` function, where:
      * `element` - is [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which corresponds to `element`'s actual `WebElement`
      * `args` - is an array of passed additional arguments, like `element.executeScript((element, args) => args[0] === 'foo' && args[1] === 'bar', 'foo', 'bar')`
      * `window` - is [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

            ```
            // assume dom looks like
            // <body>
            //   <span>first</span>
            //   <div>
            //     <span>second</span>
            //     <span>third</span>
            //   </div>
            // </body>

            const text = await browser.executeScript(document => document.getElementsByTagName('span')[0].innerHTML);
            console.log(text); // 'first item'

            const texts = await browser.element('div').executeScript(
              (element, args) => {
                var spans = element.getElementsByTagName('span');
                var textOne = spans[0].innerHTML;
                var textTwo = spans[1].innerHTML;
                return [args[0], textOne, textTwo];
              },
              'first'
            );
            console.log(texts); // ['first', 'second', 'third']
            ```
  * all new arguments for `executeScript` function are typed, so if you use Typescript - you will be able to use full completion inside passed function right in your IDE
* you can now find elements not only with `string` (which is xpath or css) or `By`, but using js function also:

      ```
            // assume dom looks like
            // <body>
            //   <span>first</span>
            //   <div>
            //     <span>second</span>
            //     <span>third</span>
            //   </div>
            // </body>

            const body = browser.element({ script: document => document.body });
            const div = body.element({ script: element => element.getElementsByTagName('div')[0] });
            const spans = div.all({ script: element => element.getElementsByTagName('span') });
            console.log(await spans.get(their.texts)); // ['second', 'third']
      ```

* [Shadow DOM]( https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM ) support:

      ```
            // assume dom looks like
            // <body>
            // ...shadowRoot...
            //   <span>first</span>
            // ...shadowRoot...
            // </body>

            const span = browser.element('body').shadow.element('span');
            console.log(await span.get(its.text)); // 'first'
      ```

* mapping collection elements to inner (relative) elements:

      ```
            // assume dom looks like
            // <body>
            //  <div>
            //    <span>first</span>
            //    <span>second</span>
            //  </div>
            //  <div>
            //    <span>third</span>
            //    <span>fourth</span>
            //  </div>
            // </body>

            const firstSpans = browser.all('div').collected(it => it.element('span'));
            console.log(await firstSpans.get(their.texts)); // ['first', 'third']

            const allSpans = browser.all('div').collected(it => it.all('span'));
            console.log(await allSpans.get(their.texts)); // ['first', 'second', 'third', 'fourth']
      ```

## 1.2.2 (released on 2019.08.10)

### FIXES

* fixed `setSize(...)` to `setRect({height: ..., width:...})` in `resizeWindow` according to latest upgrade of`selenium-webdriver` version up to `4.0.0-alpha.4`

## 1.2.1 (released on 2019.08.16)

### CHANGES

* updated `selenium-webdriver` version up to `4.0.0-alpha.4`

## 1.2.0

### BREAKING CHANGES

* removed
  * `Browser.drivedBy` (see [#88](https://github.com/KnowledgeExpert/selenidejs/issues/88))
  * (see [#92](https://github.com/KnowledgeExpert/selenidejs/issues/92))
    * `wait.untilNot`
    * `entity.*Not`
      * like `element.shouldNot`, etc.
      * use now something like `element.should(be.not.*)` instead
* changed
  * (see [#92](https://github.com/KnowledgeExpert/selenidejs/issues/92))
    * refactored conditions to be object-based over function-based (should not break anything actually, if you have not created your own conditions...)
    * `wait.until` now accepts only one argument (no varargs anymore)
    * changed `have.jsReturnedTrue` to `have.jsReturned` which accepts expected result now ( f.e. `have.jsReturned(10, 'return 10;')` )

### New Features

* added `condition.or` and `condition.and` (see [#92](https://github.com/KnowledgeExpert/selenidejs/issues/92))
  * example: `elements.filteredBy(have.cssClass('green').or(have.cssClass('red')))`
* added `be.not.*` and `have.no.*`
  * example:
    * `element.should(be.not.visible)`
    * `element.should(have.no.text('foo'))`
    * `elements.filteredBy(have.no.cssClass('green'))`

## 1.1.0 (released on 2019.03.02)

### BREAKING CHANGES (hot fixing main release:D)

* changed Collection#first
  * `browser.all('#alphabet *').first().should(have.text('a'))`
  * to
  * `browser.all('#alphabet *').first.should(have.text('a'))`
* changed Element#followingSibling
  * `browser.element('#alphabet *').followingSibling('[@class="vowel"]').should(have.text('e'))`
  * to
  * `browser.element('#alphabet *').followingSibling.should(have.text('b'))`
    * to achieve the same, you have to be more verbose now:
      * `browser.element('#alphabet *').element('./followingSibling::*[@class="vowel"]').should(have.text('e'))`
* renamed according to correct english grammar (read [more-than-VS-greater-than](http://www.gmatpill.com/more-than-vs-greater-than-vs-less-than-fewer-than/))
  * `condition.collection.hasSizeMoreThan`
  * to
  * `condition.collection.hasGreaterThan`

### New features

* added a few collection conditions
  * have.sizeGreaterThan
  * have.sizeLessThan
  * have.sizeGreaterThanOrEqual
  * have.sizeLessThanOrEqual

* added collection.sliced(start, endExclusive):
  * `browser.all('#alphabet *').sliced(0, 2).should(have.texts('a', 'b'))`

## 1.0.0 (released on 2019.02.23)

The all new API. Let's do our best to keep it stable:)
