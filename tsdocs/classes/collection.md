[selenidejs](../README.md) > [Collection](../classes/collection.md)

# Class: Collection

## Hierarchy

**Collection**

## Implements

* [Assertable](../interfaces/assertable.md)<[Collection](collection.md)>

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [configuration](collection.md#configuration)
* [locator](collection.md#locator)
* [wait](collection.md#wait)

### Methods

* [elementAt](collection.md#elementat)
* [elementBy](collection.md#elementby)
* [filteredBy](collection.md#filteredby)
* [first](collection.md#first)
* [get](collection.md#get)
* [getAsCashedArray](collection.md#getascashedarray)
* [getWebElements](collection.md#getwebelements)
* [matches](collection.md#matches)
* [matchesNot](collection.md#matchesnot)
* [should](collection.md#should)
* [shouldNot](collection.md#shouldnot)
* [toString](collection.md#tostring)
* [waitUntil](collection.md#waituntil)
* [waitUntilNot](collection.md#waituntilnot)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collection**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*, configuration: *[Configuration](configuration.md)*): [Collection](collection.md)

*Defined in [collection.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L28)*

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

*Defined in [collection.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L31)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*

*Defined in [collection.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L30)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Collection](collection.md)>*

*Defined in [collection.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L28)*

___

## Methods

<a id="elementat"></a>

###  elementAt

▸ **elementAt**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="elementby"></a>

###  elementBy

▸ **elementBy**(condition: *[ElementCondition](../#elementcondition)*): [Element](element.md)

*Defined in [collection.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Element](element.md)

___
<a id="filteredby"></a>

###  filteredBy

▸ **filteredBy**(condition: *[ElementCondition](../#elementcondition)*): [Collection](collection.md)

*Defined in [collection.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Collection](collection.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L89)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<[Collection](collection.md), `R`>*, timeout?: *`number`*): `Promise`<`R`>

*Defined in [collection.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L102)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| query | [Query](../#query)<[Collection](collection.md), `R`> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`R`>

___
<a id="getascashedarray"></a>

###  getAsCashedArray

▸ **getAsCashedArray**(): `Promise`<[Element](element.md)[]>

*Defined in [collection.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L38)*

**Returns:** `Promise`<[Element](element.md)[]>

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L106)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Implementation of [Assertable](../interfaces/assertable.md).[should](../interfaces/assertable.md#should)*

*Defined in [collection.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L47)*

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

*Implementation of [Assertable](../interfaces/assertable.md).[shouldNot](../interfaces/assertable.md#shouldnot)*

*Defined in [collection.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L110)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L57)*

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

*Defined in [collection.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L61)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

