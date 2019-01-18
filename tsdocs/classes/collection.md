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

*Defined in [collection.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Collection](collection.md)

___
<a id="findby"></a>

###  findBy

▸ **findBy**(condition: *[ElementCondition](../#elementcondition)*): [Element](element.md)

*Defined in [collection.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L84)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Element](element.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L76)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="getascashedarray"></a>

###  getAsCashedArray

▸ **getAsCashedArray**(): `Promise`<[Element](element.md)[]>

*Defined in [collection.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L35)*

**Returns:** `Promise`<[Element](element.md)[]>

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L97)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L44)*

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

*Defined in [collection.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L49)*

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

*Defined in [collection.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L93)*

**Returns:** `Promise`<`number`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L101)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L54)*

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

*Defined in [collection.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L58)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

