[selenidejs](../README.md) > [Entity](../classes/entity.md)

# Class: Entity

## Hierarchy

**Entity**

↳  [Element](element.md)

↳  [Collection](collection.md)

↳  [Browser](browser.md)

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](entity.md#constructor)

### Properties

* [configuration](entity.md#configuration)
* [wait](entity.md#wait)

### Methods

* [get](entity.md#get)
* [matching](entity.md#matching)
* [perform](entity.md#perform)
* [should](entity.md#should)
* [waitUntil](entity.md#waituntil)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Entity**(configuration: *[Configuration](configuration.md)*): [Entity](entity.md)

*Defined in [entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| configuration | [Configuration](configuration.md) |

**Returns:** [Entity](entity.md)

___

## Properties

<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [entity.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L54)*

___
<a id="wait"></a>

### `<Protected>` wait

**● wait**: *[Wait](wait.md)<`this`>*

*Defined in [entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

## Methods

<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Lambda](../#lambda)<`this`, `R`>*): `Promise`<`R`>

*Defined in [entity.ts:100](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L100)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Lambda](../#lambda)<`this`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="matching"></a>

###  matching

▸ **matching**(...conditions: *`Array`<[Condition](condition.md)<`this`>>*): `Promise`<`boolean`>

*Defined in [entity.ts:87](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Lambda](../#lambda)<`this`, `void`>*): `Promise`<`this`>

*Defined in [entity.ts:93](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | [Lambda](../#lambda)<`this`, `void`> |

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(...conditions: *`Array`<[Condition](condition.md)<`this`>>*): `Promise`<`this`>

*Defined in [entity.ts:76](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntil](../interfaces/matchable.md#waituntil)*

*Defined in [entity.ts:83](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___

