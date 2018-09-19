[selenidejs](../README.md) > [FullpageScreenshot](../classes/fullpagescreenshot.md)

# Class: FullpageScreenshot

## Hierarchy

**FullpageScreenshot**

## Implements

* [Query](../interfaces/query.md)<[Driver](driver.md)>

## Index

### Methods

* [getBrowserData](fullpagescreenshot.md#getbrowserdata)
* [getCurrentFrameWebElement](fullpagescreenshot.md#getcurrentframewebelement)
* [hideScrollbars](fullpagescreenshot.md#hidescrollbars)
* [perform](fullpagescreenshot.md#perform)
* [scrollToNthScreen](fullpagescreenshot.md#scrolltonthscreen)
* [setDocumentOverflow](fullpagescreenshot.md#setdocumentoverflow)
* [setOverflow](fullpagescreenshot.md#setoverflow)
* [take](fullpagescreenshot.md#take)
* [takeScreenshotWithWait](fullpagescreenshot.md#takescreenshotwithwait)
* [crop](fullpagescreenshot.md#crop)

---

## Methods

<a id="getbrowserdata"></a>

### `<Private>` getBrowserData

▸ **getBrowserData**(webdriver: *`WebDriver`*): `Promise`<[BrowserData](../#browserdata)>

*Defined in [queries/fullpageScreenshot.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L120)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<[BrowserData](../#browserdata)>

___
<a id="getcurrentframewebelement"></a>

### `<Private>` getCurrentFrameWebElement

▸ **getCurrentFrameWebElement**(webdriver: *`WebDriver`*): `Promise`<`WebElement`>

*Defined in [queries/fullpageScreenshot.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`WebElement`>

___
<a id="hidescrollbars"></a>

### `<Private>` hideScrollbars

▸ **hideScrollbars**(webdriver: *`WebDriver`*): `Promise`<`void`>

*Defined in [queries/fullpageScreenshot.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`void`>

___
<a id="perform"></a>

###  perform

▸ **perform**(driver: *[Driver](driver.md)*): `Promise`<`any`>

*Defined in [queries/fullpageScreenshot.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="scrolltonthscreen"></a>

### `<Private>` scrollToNthScreen

▸ **scrollToNthScreen**(webdriver: *`WebDriver`*, browserData: *`any`*, index: *`number`*): `Promise`<`void`>

*Defined in [queries/fullpageScreenshot.ts:133](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L133)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |
| browserData | `any` |
| index | `number` |

**Returns:** `Promise`<`void`>

___
<a id="setdocumentoverflow"></a>

### `<Private>` setDocumentOverflow

▸ **setDocumentOverflow**(webdriver: *`WebDriver`*, overflowValue?: *`string`*): `Promise`<`string`>

*Defined in [queries/fullpageScreenshot.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L102)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| webdriver | `WebDriver` | - |
| `Default value` overflowValue | `string` | &quot;hidden&quot; |

**Returns:** `Promise`<`string`>

___
<a id="setoverflow"></a>

### `<Private>` setOverflow

▸ **setOverflow**(webdriver: *`WebDriver`*, element: *`string`*, overflowValue: *`string`*): `Promise`<`string`>

*Defined in [queries/fullpageScreenshot.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |
| element | `string` |
| overflowValue | `string` |

**Returns:** `Promise`<`string`>

___
<a id="take"></a>

### `<Private>` take

▸ **take**(webdriver: *`WebDriver`*): `Promise`<`Buffer`>

*Defined in [queries/fullpageScreenshot.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L36)*

The method allows to take full page screenshots by scrolling screen and merging taken parts of screen (without scrollbars) into one whole screenshot. If there are frames, the method will automatically switch to DEFAULT content to avoid breaking flow.

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`Buffer`>

___
<a id="takescreenshotwithwait"></a>

### `<Private>` takeScreenshotWithWait

▸ **takeScreenshotWithWait**(webdriver: *`WebDriver`*): `Promise`<`Buffer`>

*Defined in [queries/fullpageScreenshot.ts:138](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`Buffer`>

___
<a id="crop"></a>

### `<Static>``<Private>` crop

▸ **crop**(screenBuffer: *`Buffer`*, delta: *`number`*): `Promise`<`Buffer`>

*Defined in [queries/fullpageScreenshot.ts:144](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/queries/fullpageScreenshot.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| screenBuffer | `Buffer` |
| delta | `number` |

**Returns:** `Promise`<`Buffer`>

___

