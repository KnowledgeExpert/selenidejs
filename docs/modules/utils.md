[selenidejs](../README.md) > [Utils](../modules/utils.md)

# Module: Utils

## Index

### Functions

* [getDriver](utils.md#getdriver)
* [isDriver](utils.md#isdriver)
* [savePageSource](utils.md#savepagesource)
* [saveScreenshot](utils.md#savescreenshot)
* [toBy](utils.md#toby)

---

## Functions

<a id="getdriver"></a>

###  getDriver

▸ **getDriver**(entity: * [Driver](../classes/driver.md) &#124; [Collection](../classes/collection.md) &#124; [Element](../classes/element.md)*): [Driver](../classes/driver.md)

*Defined in [utils.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/utils.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity |  [Driver](../classes/driver.md) &#124; [Collection](../classes/collection.md) &#124; [Element](../classes/element.md)|

**Returns:** [Driver](../classes/driver.md)

___
<a id="isdriver"></a>

###  isDriver

▸ **isDriver**(entity: * [Driver](../classes/driver.md) &#124; [Element](../classes/element.md)*): `boolean`

*Defined in [utils.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/utils.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity |  [Driver](../classes/driver.md) &#124; [Element](../classes/element.md)|

**Returns:** `boolean`

___
<a id="savepagesource"></a>

###  savePageSource

▸ **savePageSource**(selenideDriver: *[Driver](../classes/driver.md)*, filePath: *`string`*): `Promise`<`string`>

*Defined in [utils.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/utils.ts#L25)*

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

*Defined in [utils.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/utils.ts#L35)*

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

*Defined in [utils.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/utils.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `By`

___

