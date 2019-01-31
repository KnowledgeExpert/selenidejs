[selenidejs](../README.md) > [Condition](../modules/condition.md)

# Module: Condition

## Type parameters
#### T 
## Index

### Functions

* [not](condition.md#not)
* [toBoolean](condition.md#toboolean)

---

## Functions

<a id="not"></a>

### `<Const>` not

▸ **not**<`T`>(condition: *[Condition](condition.md)<`T`>*, description?: *`string`*): `notCondition`

*Defined in [wait.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L32)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |
| `Optional` description | `string` |

**Returns:** `notCondition`

___
<a id="toboolean"></a>

### `<Const>` toBoolean

▸ **toBoolean**<`T`>(condition: *[Condition](condition.md)<`T`>*): `(Anonymous function)`

*Defined in [wait.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L48)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |

**Returns:** `(Anonymous function)`

___

