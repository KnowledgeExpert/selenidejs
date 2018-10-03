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
* [tabsSize](have.md#tabssize)
* [tabsSizeGreaterThan](have.md#tabssizegreaterthan)
* [text](have.md#text)
* [texts](have.md#texts)
* [url](have.md#url)
* [value](have.md#value)
* [visibleElement](have.md#visibleelement)

---

## Functions

<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*, attributeValue?: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| `Optional` attributeValue |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="cssclass"></a>

###  cssClass

▸ **cssClass**(cssClass: *`string`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="exactattribute"></a>

###  exactAttribute

▸ **exactAttribute**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="exacttext"></a>

###  exactText

▸ **exactText**(value: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="exacttexts"></a>

###  exactTexts

▸ **exactTexts**(...texts: *`string`[]*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/helpers/have.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="size"></a>

###  size

▸ **size**(size: *`number`*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/helpers/have.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="tabssize"></a>

###  tabsSize

▸ **tabsSize**(size: *`number`*): [DriverCondition](../classes/drivercondition.md)

*Defined in [conditions/helpers/have.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [DriverCondition](../classes/drivercondition.md)

___
<a id="tabssizegreaterthan"></a>

###  tabsSizeGreaterThan

▸ **tabsSizeGreaterThan**(size: *`number`*): [DriverCondition](../classes/drivercondition.md)

*Defined in [conditions/helpers/have.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [DriverCondition](../classes/drivercondition.md)

___
<a id="text"></a>

###  text

▸ **text**(value: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="texts"></a>

###  texts

▸ **texts**(...texts: *`string`[]*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/helpers/have.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="url"></a>

###  url

▸ **url**(urlPart: *`string`*): [DriverCondition](../classes/drivercondition.md)

*Defined in [conditions/helpers/have.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [DriverCondition](../classes/drivercondition.md)

___
<a id="value"></a>

###  value

▸ **value**(value: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="visibleelement"></a>

###  visibleElement

▸ **visibleElement**(locator: *`By`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/helpers/have.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/helpers/have.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** [ElementCondition](../classes/elementcondition.md)

___

