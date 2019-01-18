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

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wait**(entity: *`T`*, timeout: *`number`*, onFailureHooks: *[OnFailureHook](../#onfailurehook)[]*): [Wait](wait.md)

*Defined in [wait.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L52)*

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

*Defined in [wait.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L54)*

___
<a id="onfailurehooks"></a>

### `<Private>` onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]*

*Defined in [wait.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L56)*

___
<a id="timeout"></a>

### `<Private>` timeout

**● timeout**: *`number`*

*Defined in [wait.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L55)*

___

## Methods

<a id="command"></a>

###  command

▸ **command**(fn: *[Command](../#command)<`T`>*, timeout?: *`number`*): `Promise`<`void`>

*Defined in [wait.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L70)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| fn | [Command](../#command)<`T`> | - |
| `Default value` timeout | `number` |  this.timeout |

**Returns:** `Promise`<`void`>

___
<a id="query"></a>

###  query

▸ **query**<`R`>(fn: *[Query](../#query)<`T`, `R`>*, timeout?: *`number`*): `Promise`<`R`>

*Defined in [wait.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L74)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| fn | [Query](../#query)<`T`, `R`> | - |
| `Default value` timeout | `number` |  this.timeout |

**Returns:** `Promise`<`R`>

___
<a id="until"></a>

###  until

▸ **until**(fn: *[Condition](../modules/condition.md)<`T`>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [wait.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L62)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| fn | [Condition](../modules/condition.md)<`T`> | - |
| `Default value` timeout | `number` |  this.timeout |

**Returns:** `Promise`<`boolean`>

___

