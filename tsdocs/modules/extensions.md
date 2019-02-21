[selenidejs](../README.md) > [Extensions](../modules/extensions.md)

# Module: Extensions

## Index

### Functions

* [isAbsoluteUrl](extensions.md#isabsoluteurl)
* [savePageSource](extensions.md#savepagesource)
* [saveScreenshot](extensions.md#savescreenshot)
* [toBy](extensions.md#toby)

---

## Functions

<a id="isabsoluteurl"></a>

###  isAbsoluteUrl

▸ **isAbsoluteUrl**(relativeOrAbsoluteUrl: *`string`*): `boolean`

*Defined in [utils/extensions.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| relativeOrAbsoluteUrl | `string` |

**Returns:** `boolean`

___
<a id="savepagesource"></a>

###  savePageSource

▸ **savePageSource**(driver: *`WebDriver`*, filePath: *`string`*): `Promise`<`string`>

*Defined in [utils/extensions.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |
| filePath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="savescreenshot"></a>

###  saveScreenshot

▸ **saveScreenshot**(driver: *`WebDriver`*, filePath: *`string`*): `Promise`<`string`>

*Defined in [utils/extensions.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |
| filePath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="toby"></a>

###  toBy

▸ **toBy**(cssOrXpathOrBy: * `string` &#124; `By`*): `By`

*Defined in [utils/extensions.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `By`

___

