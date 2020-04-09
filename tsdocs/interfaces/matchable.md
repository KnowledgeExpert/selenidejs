[selenidejs](../README.md) › [Matchable](matchable.md)

# Interface: Matchable

## Hierarchy

* **Matchable**

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

## Methods

###  matching

▸ **matching**(`condition`: [Condition](../classes/condition.md)‹this›): *Promise‹boolean›*

*Defined in [lib/entity.ts:43](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Condition](../classes/condition.md)‹this› |

**Returns:** *Promise‹boolean›*

___

###  waitUntil

▸ **waitUntil**(...`conditions`: [Condition](../classes/condition.md)‹this›[]): *Promise‹boolean›*

*Defined in [lib/entity.ts:42](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](../classes/condition.md)‹this›[] |

**Returns:** *Promise‹boolean›*
