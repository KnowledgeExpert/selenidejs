[selenidejs](../README.md) > [query](../modules/query.md) > [browser](../modules/query.browser.md)

# Module: browser

## Index

### Variables

* [pageSource](query.browser.md#pagesource)
* [tabs](query.browser.md#tabs)
* [tabsNumber](query.browser.md#tabsnumber)
* [title](query.browser.md#title)
* [url](query.browser.md#url)

---

## Variables

<a id="pagesource"></a>

### `<Const>` pageSource

**● pageSource**: *`(Anonymous function)`* =  lambda('page source', async (browser: Browser) =>
            browser.driver.getPageSource())

*Defined in [queries.ts:98](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L98)*

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

