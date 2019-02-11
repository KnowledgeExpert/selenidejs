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

<a id="elementat"></a>

###  elementAt

▸ **elementAt**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="elementby"></a>

###  elementBy

▸ **elementBy**(condition: *[ElementCondition](../#elementcondition)*): [Element](element.md)

*Defined in [collection.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Element](element.md)

___
<a id="filteredby"></a>

###  filteredBy

▸ **filteredBy**(condition: *[ElementCondition](../#elementcondition)*): [Collection](collection.md)

*Defined in [collection.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** [Collection](collection.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L87)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<[Collection](collection.md), `R`>*, timeout?: *`number`*): `Promise`<`R`>

*Defined in [collection.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L100)*

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

*Defined in [collection.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L37)*

**Returns:** `Promise`<[Element](element.md)[]>

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L104)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[CollectionCondition](../#collectioncondition)*): `Promise`<`boolean`>

*Defined in [collection.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L46)*

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

*Defined in [collection.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L51)*

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

*Defined in [collection.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L108)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[CollectionCondition](../#collectioncondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L56)*

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

*Defined in [collection.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L60)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [CollectionCondition](../#collectioncondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

