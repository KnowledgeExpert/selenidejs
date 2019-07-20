[selenidejs](../README.md) > [Query](../classes/query.md)

# Class: Query

We use queries to perform an async query on entity of type T, i.e. get something from entity. So a query can pass and return something of type R or failed with Error correspondingly.

## Type parameters
#### T 
#### R 
## Hierarchy

**Query**

↳  [Command](command.md)

## Implements

* [Fn](../interfaces/fn.md)<`T`, `R`>

## Index

### Constructors

* [constructor](query.md#constructor)

### Properties

* [description](query.md#description)
* [fn](query.md#fn)

### Methods

* [call](query.md#call)
* [toString](query.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Query**(description: *`any`*, fn: *`any`*): [Query](query.md)

*Defined in [wait.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| description | `any` |
| fn | `any` |

**Returns:** [Query](query.md)

___

## Properties

<a id="description"></a>

### `<Private>` description

**● description**: *`string`*

*Defined in [wait.ts:40](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L40)*

___
<a id="fn"></a>

### `<Private>` fn

**● fn**: *[Lambda](../#lambda)<`T`, `R`>*

*Defined in [wait.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L41)*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(entity: *`T`*): `Promise`<`R`>

*Implementation of [Fn](../interfaces/fn.md).[call](../interfaces/fn.md#call)*

*Defined in [wait.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`R`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [wait.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L52)*

**Returns:** `string`

___

