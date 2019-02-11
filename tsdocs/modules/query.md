[selenidejs](../README.md) > [query](../modules/query.md)

# Module: query

Raw queries on actual element's webelement 'Raw' means - without any waiting...

All are implemented through element.getWebElement() e.g. element.getWebElement().getText over element.text() because element.text() already has waiting built in. this is needed, because these queries are used not only to build corresponding element methods with waiting built in but also for conditions...

Hence, these functions are not supposed to be used in "perform/get" context: `element.click().then(query.text)` this query may fail if element was absent after click for some milliseconds... use the following alternative instead: `element.click().then(get.text)`

Here, queries do not contain has* and is* queries, like hasText, or isVisible. User can use has* and is* conditions instead. Example: `if (element.matches(has.text('foo'))) { ... } We really don't need such has* or is* queries both here and built in the entity itself (like element.isVisible), because their use case is very rare. The user will mainly use steps (entity commands, like click) and assertions (entity should(condition)) in tests. And SelenideJs is a tests tool, not something else.

## Index

### Variables

* [innerHtml](query.md#innerhtml)
* [outerHtml](query.md#outerhtml)
* [pageSource](query.md#pagesource)
* [size](query.md#size)
* [someText](query.md#sometext)
* [tabs](query.md#tabs)
* [tabsNumber](query.md#tabsnumber)
* [text](query.md#text)
* [texts](query.md#texts)
* [title](query.md#title)
* [url](query.md#url)
* [value](query.md#value)

### Functions

* [attribute](query.md#attribute)

---

## Variables

<a id="innerhtml"></a>

### `<Const>` innerHtml

**● innerHtml**: *`(Anonymous function)`* =  attribute('innerHTML')

*Defined in [queries.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L67)*

___
<a id="outerhtml"></a>

### `<Const>` outerHtml

**● outerHtml**: *`(Anonymous function)`* =  attribute('outerHTML')

*Defined in [queries.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L69)*

___
<a id="pagesource"></a>

### `<Const>` pageSource

**● pageSource**: *`(Anonymous function)`* =  lambda('page source', async (browser: Browser) =>
       browser.driver.getPageSource())

*Defined in [queries.ts:98](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L98)*

___
<a id="size"></a>

### `<Const>` size

**● size**: *`(Anonymous function)`* =  lambda('size', async (collection: Collection) =>
        (await collection.getWebElements()).length)

*Defined in [queries.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L76)*

___
<a id="sometext"></a>

### `<Const>` someText

**● someText**: *`(Anonymous function)`* =  lambda('some nonempty visible text', async (element: Element) => {
        const text = await (await element.getWebElement()).getText();
        if (!text) {
            throw new Error('there is no visible nonempty text');
        }
        return text;
    })

*Defined in [queries.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L55)*

___
<a id="tabs"></a>

### `<Const>` tabs

**● tabs**: *`(Anonymous function)`* =  lambda('tabs (all window handles)', async (browser: Browser) =>
        browser.driver.getAllWindowHandles())

*Defined in [queries.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L92)*

___
<a id="tabsnumber"></a>

### `<Const>` tabsNumber

**● tabsNumber**: *`(Anonymous function)`* =  lambda('tabs number', async (browser: Browser) =>
        (await browser.driver.getAllWindowHandles()).length)

*Defined in [queries.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L95)*

___
<a id="text"></a>

### `<Const>` text

**● text**: *`(Anonymous function)`* =  lambda('text', async (element: Element) =>
        (await element.getWebElement()).getText())

*Defined in [queries.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L52)*

___
<a id="texts"></a>

### `<Const>` texts

**● texts**: *`(Anonymous function)`* =  lambda('texts', async (collection: Collection) => {
        const webelements = await collection.getWebElements();
        return Promise.all(webelements.map(webElement => webElement.getText()));
    })

*Defined in [queries.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L79)*

___
<a id="title"></a>

### `<Const>` title

**● title**: *`(Anonymous function)`* =  lambda('title', async (browser: Browser) =>
        browser.driver.getTitle())

*Defined in [queries.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L89)*

___
<a id="url"></a>

### `<Const>` url

**● url**: *`(Anonymous function)`* =  lambda('url', async (browser: Browser) =>
        browser.driver.getCurrentUrl())

*Defined in [queries.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L86)*

___
<a id="value"></a>

### `<Const>` value

**● value**: *`(Anonymous function)`* =  attribute('value')

*Defined in [queries.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L71)*

___

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): `(Anonymous function)`

*Defined in [queries.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___

