[selenidejs](../README.md) > [Wait](../classes/wait.md)

# Class: Wait

## Type parameters
#### T 
## Hierarchy

**Wait**

## Index

### Constructors

* [constructor](wait.md#constructor)

### Properties

* [entity](wait.md#entity)
* [onFailureHooks](wait.md#onfailurehooks)
* [timeout](wait.md#timeout)

### Methods

* [command](wait.md#command)
* [query](wait.md#query)
* [until](wait.md#until)
* [untilNot](wait.md#untilnot)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wait**(entity: *`T`*, timeout: *`number`*, onFailureHooks: *[OnFailureHook](../#onfailurehook)[]*): [Wait](wait.md)

*Defined in [wait.ts:154](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L154)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |
| timeout | `number` |
| onFailureHooks | [OnFailureHook](../#onfailurehook)[] |

**Returns:** [Wait](wait.md)

___

## Properties

<a id="entity"></a>

### `<Private>` entity

**● entity**: *`T`*

*Defined in [wait.ts:156](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L156)*

___
<a id="onfailurehooks"></a>

### `<Private>` onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]*

*Defined in [wait.ts:158](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L158)*

___
<a id="timeout"></a>

### `<Private>` timeout

**● timeout**: *`number`*

*Defined in [wait.ts:157](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L157)*

___

## Methods

<a id="command"></a>

###  command

▸ **command**(fn: *[Command](../#command)<`T`>*): `Promise`<`void`>

*Defined in [wait.ts:173](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L173)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Command](../#command)<`T`> |

**Returns:** `Promise`<`void`>

___
<a id="query"></a>

###  query

▸ **query**<`R`>(fn: *[Query](../#query)<`T`, `R`>*): `Promise`<`R`>

*Defined in [wait.ts:177](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L177)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Query](../#query)<`T`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="until"></a>

###  until

▸ **until**(...conditions: *`Array`<[Condition](../modules/condition.md)<`T`>>*): `Promise`<`boolean`>

*Defined in [wait.ts:164](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`T`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="untilnot"></a>

###  untilNot

▸ **untilNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`T`>>*): `Promise`<`boolean`>

*Defined in [wait.ts:168](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L168)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`T`>> |

**Returns:** `Promise`<`boolean`>

___

