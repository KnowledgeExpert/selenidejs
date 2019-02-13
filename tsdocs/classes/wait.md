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

*Defined in [wait.ts:117](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L117)*

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

*Defined in [wait.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L119)*

___
<a id="onfailurehooks"></a>

### `<Private>` onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]*

*Defined in [wait.ts:121](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L121)*

___
<a id="timeout"></a>

### `<Private>` timeout

**● timeout**: *`number`*

*Defined in [wait.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L120)*

___

## Methods

<a id="command"></a>

###  command

▸ **command**(fn: *[Command](../#command)<`T`>*, timeout?: *`number`*): `Promise`<`void`>

*Defined in [wait.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L131)*

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

*Defined in [wait.ts:135](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L135)*

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

*Defined in [wait.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L127)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| fn | [Condition](../modules/condition.md)<`T`> | - |
| `Default value` timeout | `number` |  this.timeout |

**Returns:** `Promise`<`boolean`>

___

