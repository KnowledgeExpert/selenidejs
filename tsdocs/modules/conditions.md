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
* [throwIfNotActual](conditions.md#throwifnotactual)

---

## Functions

<a id="conditionfromasyncquery"></a>

###  conditionFromAsyncQuery

▸ **conditionFromAsyncQuery**<`E`>(aPredicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L31)*

**Type parameters:**

#### E 
**Parameters:**

| Param | Type |
| ------ | ------ |
| aPredicate | `function` |

**Returns:** [Condition](condition.md)<`E`>

___
<a id="throwifnotactual"></a>

###  throwIfNotActual

▸ **throwIfNotActual**<`E`,`A`>(query: *`function`*, predicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L43)*

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

