[selenidejs](../README.md) > [Condition](../modules/condition.md)

# Module: Condition

Like Command, i.e. can pass or fail with Error. It is defined as separate type alias to differentiate the usage scenarios. Conditions we use in context of matching condition on entity. Condition is like a predicate but instead of (true | false) you get (passed | throws Error)

Read "void" in Query<T, void> as "matched", or "passed".

## Type parameters
#### T 
## Index

### Functions

* [asPredicate](condition.md#aspredicate)
* [not](condition.md#not)

---

## Functions

<a id="aspredicate"></a>

### `<Const>` asPredicate

▸ **asPredicate**<`T`>(condition: *[Condition](condition.md)<`T`>*): `(Anonymous function)`

*Defined in [wait.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L63)*

Transforms Condition (returning (passed | Error)) to async Predicate (returning (true | false))

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| condition | [Condition](condition.md)<`T`> |  - |

**Returns:** `(Anonymous function)`

___
<a id="not"></a>

### `<Const>` not

▸ **not**<`T`>(condition: *[Condition](condition.md)<`T`>*, description?: *`string`*): [Condition](condition.md)<`T`>

*Defined in [wait.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L47)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |
| `Optional` description | `string` |

**Returns:** [Condition](condition.md)<`T`>

___

