[selenidejs](../README.md) > [Collection](../classes/collection.md)

# Class: Collection

## Hierarchy

 [Entity](entity.md)

**↳ Collection**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [configuration](collection.md#configuration)
* [locator](collection.md#locator)
* [wait](collection.md#wait)

### Methods

* [configuredWith](collection.md#configuredwith)
* [elementAt](collection.md#elementat)
* [elementBy](collection.md#elementby)
* [filteredBy](collection.md#filteredby)
* [first](collection.md#first)
* [get](collection.md#get)
* [getAsCashedArray](collection.md#getascashedarray)
* [getWebElements](collection.md#getwebelements)
* [matching](collection.md#matching)
* [matchingNot](collection.md#matchingnot)
* [perform](collection.md#perform)
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

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

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

*Defined in [collection.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L32)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*

*Defined in [collection.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L31)*

___
<a id="wait"></a>

### `<Protected>` wait

**● wait**: *[Wait](wait.md)<`this`>*

*Inherited from [Entity](entity.md).[wait](entity.md#wait)*

*Defined in [entity.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

## Methods

<a id="configuredwith"></a>

###  configuredWith

▸ **configuredWith**(custom: *`Partial`<[Configuration](configuration.md)>*): [Collection](collection.md)

*Defined in [collection.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| custom | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Collection](collection.md)

___
<a id="elementat"></a>

###  elementAt

▸ **elementAt**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="elementby"></a>

###  elementBy

▸ **elementBy**(...conditions: *[ElementCondition](../#elementcondition)[]*): [Element](element.md)

*Defined in [collection.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | [ElementCondition](../#elementcondition)[] |

**Returns:** [Element](element.md)

___
<a id="filteredby"></a>

###  filteredBy

▸ **filteredBy**(...conditions: *[ElementCondition](../#elementcondition)[]*): [Collection](collection.md)

*Defined in [collection.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | [ElementCondition](../#elementcondition)[] |

**Returns:** [Collection](collection.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L64)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<`this`, `R`>*): `Promise`<`R`>

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [entity.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L115)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Query](../#query)<`this`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="getascashedarray"></a>

###  getAsCashedArray

▸ **getAsCashedArray**(): `Promise`<[Element](element.md)[]>

*Defined in [collection.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L44)*

**Returns:** `Promise`<[Element](element.md)[]>

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L82)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="matching"></a>

###  matching

▸ **matching**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [entity.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="matchingnot"></a>

###  matchingNot

▸ **matchingNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Inherited from [Entity](entity.md).[matchingNot](entity.md#matchingnot)*

*Defined in [entity.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Command](../#command)<`this`>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[perform](entity.md#perform)*

*Defined in [entity.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | [Command](../#command)<`this`> |

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[should](entity.md#should)*

*Defined in [entity.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[shouldNot](entity.md#shouldnot)*

*Defined in [entity.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L86)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntil](../interfaces/matchable.md#waituntil)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [entity.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntilnot"></a>

###  waitUntilNot

▸ **waitUntilNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntilNot](../interfaces/matchable.md#waituntilnot)*

*Inherited from [Entity](entity.md).[waitUntilNot](entity.md#waituntilnot)*

*Defined in [entity.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___

