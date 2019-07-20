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

⊕ **new Wait**(entity: *`T`*, timeout: *`number`*): [Wait](wait.md)

*Defined in [wait.ts:203](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L203)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |
| timeout | `number` |

**Returns:** [Wait](wait.md)

___

## Properties

<a id="entity"></a>

### `<Private>` entity

**● entity**: *`T`*

*Defined in [wait.ts:202](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L202)*

___
<a id="timeout"></a>

### `<Private>` timeout

**● timeout**: *`number`*

*Defined in [wait.ts:203](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L203)*

___

## Methods

<a id="command"></a>

###  command

▸ **command**(fn: *[Lambda](../#lambda)<`T`, `void`>*): `Promise`<`void`>

*Defined in [wait.ts:215](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L215)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Lambda](../#lambda)<`T`, `void`> |

**Returns:** `Promise`<`void`>

___
<a id="for"></a>

###  for

▸ **for**<`R`>(fn: *[Fn](../interfaces/fn.md)<`T`, `R`>*): `Promise`<`R`>

*Defined in [wait.ts:223](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L223)*

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

*Defined in [wait.ts:210](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L210)*

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

*Defined in [wait.ts:219](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L219)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | [Fn](../interfaces/fn.md)<`T`, `R`> |

**Returns:** `Promise`<`boolean`>

___

