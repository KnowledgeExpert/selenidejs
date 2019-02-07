[selenidejs](../README.md) > [condition](../modules/condition.md)

# Module: condition

## Index

### Modules

* [browser](condition.browser.md)
* [collection](condition.collection.md)
* [element](condition.element.md)

### Functions

* [conditionFromAsyncQuery](condition.md#conditionfromasyncquery)
* [throwIfNot](condition.md#throwifnot)
* [throwIfNotActual](condition.md#throwifnotactual)

---

## Functions

<a id="conditionfromasyncquery"></a>

###  conditionFromAsyncQuery

▸ **conditionFromAsyncQuery**<`E`>(describedPredicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L31)*

**Type parameters:**

#### E 
**Parameters:**

| Param | Type |
| ------ | ------ |
| describedPredicate | `function` |

**Returns:** [Condition](condition.md)<`E`>

___
<a id="throwifnot"></a>

###  throwIfNot

▸ **throwIfNot**<`E`>(description: *`string`*, predicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L45)*

like conditionFromAsyncQuery but with custom description

**Type parameters:**

#### E 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| description | `string` |  - |
| predicate | `function` |  - |

**Returns:** [Condition](condition.md)<`E`>

___
<a id="throwifnotactual"></a>

###  throwIfNotActual

▸ **throwIfNotActual**<`E`,`A`>(query: *`function`*, predicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L57)*

Transforms an entity query compared through predicate - to Condition Example: throwIfNotActual(query.element.text, predicate.equals(text))

**Type parameters:**

#### E 
#### A 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | `function` |
| predicate | `function` |

**Returns:** [Condition](condition.md)<`E`>

___

