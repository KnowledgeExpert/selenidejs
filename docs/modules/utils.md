[selenidejs](../README.md) > [Utils](../modules/utils.md)

# Module: Utils

## Index

### Functions

* [getDriver](utils.md#getdriver)
* [savePageSource](utils.md#savepagesource)
* [saveScreenshot](utils.md#savescreenshot)
* [toBy](utils.md#toby)

---

## Functions

<a id="getdriver"></a>

###  getDriver

▸ **getDriver**(entity: * [Element](../classes/element.md) &#124; [Collection](../classes/collection.md)*): [Driver](../classes/driver.md)

*Defined in [utils.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity |  [Element](../classes/element.md) &#124; [Collection](../classes/collection.md)|

**Returns:** [Driver](../classes/driver.md)

___
<a id="savepagesource"></a>

###  savePageSource

▸ **savePageSource**(selenideDriver: *[Driver](../classes/driver.md)*, filePath: *`string`*): `Promise`<`string`>

*Defined in [utils.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| selenideDriver | [Driver](../classes/driver.md) |
| filePath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="savescreenshot"></a>

###  saveScreenshot

▸ **saveScreenshot**(selenideDriver: *[Driver](../classes/driver.md)*, filePath: *`string`*): `Promise`<`string`>

*Defined in [utils.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| selenideDriver | [Driver](../classes/driver.md) |
| filePath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="toby"></a>

###  toBy

▸ **toBy**(cssOrXpathOrBy: * `string` &#124; `By`*): `By`

*Defined in [utils.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `By`

___

