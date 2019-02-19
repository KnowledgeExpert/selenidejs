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

* [onFailureHooks](entity.md#onfailurehooks)
* [timeout](entity.md#timeout)
* [wait](entity.md#wait)

### Methods

* [get](entity.md#get)
* [matching](entity.md#matching)
* [matchingNot](entity.md#matchingnot)
* [perform](entity.md#perform)
* [should](entity.md#should)
* [shouldNot](entity.md#shouldnot)
* [waitUntil](entity.md#waituntil)
* [waitUntilNot](entity.md#waituntilnot)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Entity**(timeout: *`number`*, onFailureHooks: *[OnFailureHook](../#onfailurehook)[]*): [Entity](entity.md)

*Defined in [entity.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| timeout | `number` |
| onFailureHooks | [OnFailureHook](../#onfailurehook)[] |

**Returns:** [Entity](entity.md)

___

## Properties

<a id="onfailurehooks"></a>

### `<Private>` onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]*

*Defined in [entity.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L54)*

___
<a id="timeout"></a>

### `<Private>` timeout

**● timeout**: *`number`*

*Defined in [entity.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L54)*

___
<a id="wait"></a>

### `<Protected>` wait

**● wait**: *[Wait](wait.md)<`this`>*

*Defined in [entity.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

## Methods

<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<`this`, `R`>*): `Promise`<`R`>

*Defined in [entity.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L119)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Query](../#query)<`this`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="matching"></a>

###  matching

▸ **matching**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

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

*Defined in [entity.ts:112](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L112)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | [Command](../#command)<`this`> |

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`this`>

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

*Defined in [entity.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntil](../interfaces/matchable.md#waituntil)*

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

*Defined in [entity.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___

