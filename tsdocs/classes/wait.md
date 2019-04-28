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
* [for](wait.md#for)
* [query](wait.md#query)
* [until](wait.md#until)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wait**(entity: *`T`*, timeout: *`number`*, onFailureHooks: *`Array`<[OnFailureHook](../#onfailurehook)<`T`>>*): [Wait](wait.md)

*Defined in [wait.ts:191](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L191)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |
| timeout | `number` |
| onFailureHooks | `Array`<[OnFailureHook](../#onfailurehook)<`T`>> |

**Returns:** [Wait](wait.md)

___

## Properties

<a id="entity"></a>

### `<Private>` entity

**● entity**: *`T`*

*Defined in [wait.ts:193](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L193)*

___
<a id="onfailurehooks"></a>

### `<Private>` onFailureHooks

**● onFailureHooks**: *`Array`<[OnFailureHook](../#onfailurehook)<`T`>>*

*Defined in [wait.ts:195](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L195)*

___
<a id="timeout"></a>

### `<Private>` timeout

**● timeout**: *`number`*

*Defined in [wait.ts:194](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L194)*

___

## Methods

<a id="command"></a>

###  command

▸ **command**(fn: *[Lambda](../#lambda)<`T`, `void`>*): `Promise`<`void`>

*Defined in [wait.ts:205](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L205)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Lambda](../#lambda)<`T`, `void`> |

**Returns:** `Promise`<`void`>

___
<a id="for"></a>

###  for

▸ **for**<`R`>(fn: *[Fn](../interfaces/fn.md)<`T`, `R`>*): `Promise`<`R`>

*Defined in [wait.ts:213](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L213)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Fn](../interfaces/fn.md)<`T`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="query"></a>

###  query

▸ **query**<`R`>(fn: *[Lambda](../#lambda)<`T`, `R`>*): `Promise`<`R`>

*Defined in [wait.ts:201](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L201)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Lambda](../#lambda)<`T`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="until"></a>

###  until

▸ **until**<`R`>(fn: *[Fn](../interfaces/fn.md)<`T`, `R`>*): `Promise`<`boolean`>

*Defined in [wait.ts:209](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L209)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Fn](../interfaces/fn.md)<`T`, `R`> |

**Returns:** `Promise`<`boolean`>

___

