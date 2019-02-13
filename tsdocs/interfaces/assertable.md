[selenidejs](../README.md) > [Assertable](../interfaces/assertable.md)

# Interface: Assertable

## Type parameters
#### T 
## Hierarchy

**Assertable**

## Implemented by

* [Browser](../classes/browser.md)
* [Collection](../classes/collection.md)
* [Element](../classes/element.md)

## Index

### Methods

* [should](assertable.md#should)
* [shouldNot](assertable.md#shouldnot)

---

## Methods

<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](../modules/condition.md)<`T`>*, timeout?: *`number`*): `Promise`<`T`>

*Defined in [entity.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../modules/condition.md)<`T`> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`T`>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[Condition](../modules/condition.md)<`T`>*, timeout?: *`number`*): `Promise`<`T`>

*Defined in [entity.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../modules/condition.md)<`T`> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`T`>

___

