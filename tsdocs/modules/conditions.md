[selenidejs](../README.md) > [Conditions](../modules/conditions.md)

# Module: Conditions

## Index

### Modules

* [browser](conditions.browser.md)
* [collection](conditions.collection.md)
* [element](conditions.element.md)
* [predicate](conditions.predicate.md)

### Functions

* [conditionFromAsyncQuery](conditions.md#conditionfromasyncquery)
* [throwIfNot](conditions.md#throwifnot)
* [throwIfNotActual](conditions.md#throwifnotactual)

---

## Functions

<a id="conditionfromasyncquery"></a>

###  conditionFromAsyncQuery

▸ **conditionFromAsyncQuery**<`E`>(aPredicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L34)*

**Type parameters:**

#### E 
**Parameters:**

| Param | Type |
| ------ | ------ |
| aPredicate | `function` |

**Returns:** [Condition](condition.md)<`E`>

___
<a id="throwifnot"></a>

###  throwIfNot

▸ **throwIfNot**<`A`>(reason: *`string`*, predicate: *`function`*): `(Anonymous function)`

*Defined in [conditions.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L45)*

like conditionFromAsyncQuery but non-async version

**Type parameters:**

#### A 
**Parameters:**

| Param | Type |
| ------ | ------ |
| reason | `string` |
| predicate | `function` |

**Returns:** `(Anonymous function)`

___
<a id="throwifnotactual"></a>

###  throwIfNotActual

▸ **throwIfNotActual**<`E`,`A`>(query: *`function`*, predicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L56)*

throwIfNotActual(query.element.text, predicate.equals(text))

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

