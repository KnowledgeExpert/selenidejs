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

### Accessors

* [first](collection.md#first)

### Methods

* [elementAt](collection.md#elementat)
* [elementBy](collection.md#elementby)
* [filteredBy](collection.md#filteredby)
* [get](collection.md#get)
* [getAsCashedArray](collection.md#getascashedarray)
* [getWebElements](collection.md#getwebelements)
* [matching](collection.md#matching)
* [matchingNot](collection.md#matchingnot)
* [perform](collection.md#perform)
* [should](collection.md#should)
* [shouldNot](collection.md#shouldnot)
* [sliced](collection.md#sliced)
* [toString](collection.md#tostring)
* [waitUntil](collection.md#waituntil)
* [waitUntilNot](collection.md#waituntilnot)
* [with](collection.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collection**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*, configuration: *[Configuration](configuration.md)*): [Collection](collection.md)

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [collection.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>> |
| configuration | [Configuration](configuration.md) |

**Returns:** [Collection](collection.md)

___

## Properties

<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Overrides [Entity](entity.md).[configuration](entity.md#configuration)*

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

*Defined in [entity.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L55)*

___

## Accessors

<a id="first"></a>

###  first

getfirst(): [Element](element.md)

*Defined in [collection.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L54)*

**Returns:** [Element](element.md)

___

## Methods

<a id="elementat"></a>

###  elementAt

▸ **elementAt**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="elementby"></a>

###  elementBy

▸ **elementBy**(...conditions: *[ElementCondition](../#elementcondition)[]*): [Element](element.md)

*Defined in [collection.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | [ElementCondition](../#elementcondition)[] |

**Returns:** [Element](element.md)

___
<a id="filteredby"></a>

###  filteredBy

▸ **filteredBy**(...conditions: *[ElementCondition](../#elementcondition)[]*): [Collection](collection.md)

*Defined in [collection.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | [ElementCondition](../#elementcondition)[] |

**Returns:** [Collection](collection.md)

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<`this`, `R`>*): `Promise`<`R`>

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [entity.ts:118](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L118)*

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

*Defined in [collection.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L43)*

**Returns:** `Promise`<[Element](element.md)[]>

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L81)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="matching"></a>

###  matching

▸ **matching**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [entity.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L101)*

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

*Defined in [entity.ts:105](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L105)*

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

*Defined in [entity.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L111)*

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

*Defined in [entity.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L80)*

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

*Defined in [entity.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="sliced"></a>

###  sliced

▸ **sliced**(start: *`number`*, end: *`number`*): [Collection](collection.md)

*Defined in [collection.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L63)*

Represents a new collection sliced from 'start' element index to 'end' element index exclusive.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The inclusive "start" index of collection to be sliced. |
| end | `number` |  The exclusive "end" index of collection to be sliced |

**Returns:** [Collection](collection.md)

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L85)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntil](../interfaces/matchable.md#waituntil)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [entity.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L92)*

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

*Defined in [entity.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="with"></a>

###  with

▸ **with**(customConfig: *`Partial`<[Configuration](configuration.md)>*): [Collection](collection.md)

*Defined in [collection.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customConfig | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Collection](collection.md)

___

