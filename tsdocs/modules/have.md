[selenidejs](../README.md) > [have](../modules/have.md)

# Module: have

## Index

### Functions

* [attribute](have.md#attribute)
* [cssClass](have.md#cssclass)
* [exactAttribute](have.md#exactattribute)
* [exactText](have.md#exacttext)
* [exactTexts](have.md#exacttexts)
* [size](have.md#size)
* [sizeGreaterThan](have.md#sizegreaterthan)
* [tabsSize](have.md#tabssize)
* [tabsSizeGreaterThan](have.md#tabssizegreaterthan)
* [text](have.md#text)
* [texts](have.md#texts)
* [title](have.md#title)
* [url](have.md#url)
* [urlPart](have.md#urlpart)
* [value](have.md#value)

---

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(attributeName: *`string`*, attributeValue?: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [helpers/have.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| `Optional` attributeValue |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="cssclass"></a>

### `<Const>` cssClass

▸ **cssClass**(cssClass: *`string`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [helpers/have.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exactattribute"></a>

### `<Const>` exactAttribute

▸ **exactAttribute**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [helpers/have.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exacttext"></a>

### `<Const>` exactText

▸ **exactText**(value: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [helpers/have.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exacttexts"></a>

### `<Const>` exactTexts

▸ **exactTexts**(...texts: *`string`[]*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [helpers/have.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="size"></a>

### `<Const>` size

▸ **size**(size: *`number`*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [helpers/have.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="sizegreaterthan"></a>

### `<Const>` sizeGreaterThan

▸ **sizeGreaterThan**(size: *`number`*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [helpers/have.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="tabssize"></a>

### `<Const>` tabsSize

▸ **tabsSize**(size: *`number`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [helpers/have.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="tabssizegreaterthan"></a>

### `<Const>` tabsSizeGreaterThan

▸ **tabsSizeGreaterThan**(size: *`number`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [helpers/have.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="text"></a>

### `<Const>` text

▸ **text**(value: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [helpers/have.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="texts"></a>

### `<Const>` texts

▸ **texts**(...texts: *`string`[]*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [helpers/have.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="title"></a>

### `<Const>` title

▸ **title**(title: *`string`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [helpers/have.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| title | `string` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="url"></a>

### `<Const>` url

▸ **url**(urlPart: *`string`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [helpers/have.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="urlpart"></a>

### `<Const>` urlPart

▸ **urlPart**(urlPart: *`string`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [helpers/have.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="value"></a>

### `<Const>` value

▸ **value**(value: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [helpers/have.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/have.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___

