[selenidejs](../README.md) > [Utils](../modules/utils.md)

# Module: Utils

## Index

### Functions

* [lambda](utils.md#lambda)
* [savePageSource](utils.md#savepagesource)
* [saveScreenshot](utils.md#savescreenshot)
* [toBy](utils.md#toby)

---

## Functions

<a id="lambda"></a>

###  lambda

▸ **lambda**<`F`>(toString: *`string`*, fn: *`F`*): `F`

*Defined in [helpers/utils.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/utils.ts#L49)*

**Type parameters:**

#### F 
**Parameters:**

| Param | Type |
| ------ | ------ |
| toString | `string` |
| fn | `F` |

**Returns:** `F`

___
<a id="savepagesource"></a>

###  savePageSource

▸ **savePageSource**(selenideDriver: *[Browser](../classes/browser.md)*, filePath: *`string`*): `Promise`<`string`>

*Defined in [helpers/utils.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/utils.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| selenideDriver | [Browser](../classes/browser.md) |
| filePath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="savescreenshot"></a>

###  saveScreenshot

▸ **saveScreenshot**(selenideDriver: *[Browser](../classes/browser.md)*, filePath: *`string`*): `Promise`<`string`>

*Defined in [helpers/utils.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/utils.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| selenideDriver | [Browser](../classes/browser.md) |
| filePath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="toby"></a>

###  toBy

▸ **toBy**(cssOrXpathOrBy: * `string` &#124; `By`*): `By`

*Defined in [helpers/utils.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/utils.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `By`

___

