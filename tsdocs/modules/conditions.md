[selenidejs](../README.md) > [Conditions](../modules/conditions.md)

# Module: Conditions

## Index

### Modules

* [browser](conditions.browser.md)
* [collection](conditions.collection.md)
* [element](conditions.element.md)
* [predicate](conditions.predicate.md)

### Functions

* [described](conditions.md#described)
* [throwIfNot](conditions.md#throwifnot)

---

## Functions

<a id="described"></a>

###  described

▸ **described**<`E`>(description: *`string`*, predicate: *[Condition](condition.md)<`E`>*): `condition`

*Defined in [conditions.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L58)*

**Type parameters:**

#### E 
**Parameters:**

| Param | Type |
| ------ | ------ |
| description | `string` |
| predicate | [Condition](condition.md)<`E`> |

**Returns:** `condition`

___
<a id="throwifnot"></a>

###  throwIfNot

▸ **throwIfNot**<`A`>(reason: *`string`*, predicate: *`function`*): `(Anonymous function)`

*Defined in [conditions.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L33)*

**Type parameters:**

#### A 
**Parameters:**

| Param | Type |
| ------ | ------ |
| reason | `string` |
| predicate | `function` |

**Returns:** `(Anonymous function)`

___

