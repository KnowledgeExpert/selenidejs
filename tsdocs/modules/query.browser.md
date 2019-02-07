[selenidejs](../README.md) > [query](../modules/query.md) > [browser](../modules/query.browser.md)

# Module: browser

## Index

### Variables

* [tabsNumber](query.browser.md#tabsnumber)
* [url](query.browser.md#url)

---

## Variables

<a id="tabsnumber"></a>

### `<Const>` tabsNumber

**● tabsNumber**: *`(Anonymous function)`* =  lambda('tabs number', async (browser: Browser) =>
            (await browser.driver.getAllWindowHandles()).length)

*Defined in [queries.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L89)*

___
<a id="url"></a>

### `<Const>` url

**● url**: *`(Anonymous function)`* =  lambda('url', async (browser: Browser) =>
            browser.driver.getCurrentUrl())

*Defined in [queries.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L86)*

___

