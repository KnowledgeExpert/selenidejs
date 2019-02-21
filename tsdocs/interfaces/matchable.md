[selenidejs](../README.md) > [Matchable](../interfaces/matchable.md)

# Interface: Matchable

## Hierarchy

**Matchable**

## Implemented by

* [Browser](../classes/browser.md)
* [Browser](../classes/browser.md)
* [Collection](../classes/collection.md)
* [Collection](../classes/collection.md)
* [Element](../classes/element.md)
* [Element](../classes/element.md)
* [Entity](../classes/entity.md)

## Index

### Methods

* [matching](matchable.md#matching)
* [matchingNot](matchable.md#matchingnot)
* [waitUntil](matchable.md#waituntil)
* [waitUntilNot](matchable.md#waituntilnot)

---

## Methods

<a id="matching"></a>

###  matching

▸ **matching**(condition: *[Condition](../modules/condition.md)<`this`>*): `Promise`<`boolean`>

*Defined in [entity.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../modules/condition.md)<`this`> |

**Returns:** `Promise`<`boolean`>

___
<a id="matchingnot"></a>

###  matchingNot

▸ **matchingNot**(condition: *[Condition](../modules/condition.md)<`this`>*): `Promise`<`boolean`>

*Defined in [entity.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../modules/condition.md)<`this`> |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Defined in [entity.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntilnot"></a>

###  waitUntilNot

▸ **waitUntilNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Defined in [entity.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___

