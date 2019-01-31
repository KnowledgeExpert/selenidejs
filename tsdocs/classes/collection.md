[selenidejs](../README.md) > [Collection](../classes/collection.md)

# Class: Collection

## Hierarchy

**Collection**

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [configuration](collection.md#configuration)
* [locator](collection.md#locator)
* [wait](collection.md#wait)

### Methods

* [filterBy](collection.md#filterby)
* [findBy](collection.md#findby)
* [first](collection.md#first)
* [get](collection.md#get)
* [getAsCashedArray](collection.md#getascashedarray)
* [getWebElements](collection.md#getwebelements)
* [matches](collection.md#matches)
* [matchesNot](collection.md#matchesnot)
* [should](collection.md#should)
* [shouldNot](collection.md#shouldnot)
* [size](collection.md#size)
* [toString](collection.md#tostring)
* [waitUntil](collection.md#waituntil)
* [waitUntilNot](collection.md#waituntilnot)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collection**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*, configuration: *[Configuration](configuration.md)*): [Collection](collection.md)

*Defined in [collection.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>> |
| configuration | [Configuration](configuration.md) |

**Returns:** [Collection](collection.md)

___

## Properties

<a id="configuration"></a>

### `<Private>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [collection.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L30)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*

*Defined in [collection.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L29)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Collection](collection.md)>*

*Defined in [collection.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L27)*

___

## Methods

<a id="filterby"></a>

###  filterBy

▸ **filterBy**(condition: *[ElementCondition](../#elementcondition)*): [Collection](collection.md)

*Defined in [collection.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Collection](collection.md)

___
<a id="findby"></a>

###  findBy

▸ **findBy**(condition: *[ElementCondition](../#elementcondition)*): [Element](element.md)

*Defined in [collection.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Element](element.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L78)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="getascashedarray"></a>

###  getAsCashedArray

▸ **getAsCashedArray**(): `Promise`<[Element](element.md)[]>

*Defined in [collection.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L36)*

**Returns:** `Promise`<[Element](element.md)[]>

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L99)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L45)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="size"></a>

###  size

▸ **size**(): `Promise`<`number`>

*Defined in [collection.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L95)*

**Returns:** `Promise`<`number`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L103)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L55)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntilnot"></a>

###  waitUntilNot

▸ **waitUntilNot**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L59)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

