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
* [waitUntil](matchable.md#waituntil)

---

## Methods

<a id="matching"></a>

###  matching

▸ **matching**(condition: *[Condition](../classes/condition.md)<`this`>*): `Promise`<`boolean`>

*Defined in [entity.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<`this`> |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](../classes/condition.md)<`this`>>*): `Promise`<`boolean`>

*Defined in [entity.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../classes/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___

