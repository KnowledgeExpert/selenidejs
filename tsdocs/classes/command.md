[selenidejs](../README.md) > [Command](../classes/command.md)

# Class: Command

Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T. Command can pass or fail with Error correspondingly.

## Type parameters
#### T 
## Hierarchy

 [Query](query.md)<`T`, `void`>

**↳ Command**

## Implements

* [Fn](../interfaces/fn.md)<`T`, `void`>

## Index

### Constructors

* [constructor](command.md#constructor)

### Methods

* [call](command.md#call)
* [toString](command.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Command**(description: *`string`*, fn: *[Lambda](../#lambda)<`T`, `void`>*): [Command](command.md)

*Inherited from [Query](query.md).[constructor](query.md#constructor)*

*Defined in [wait.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| description | `string` |
| fn | [Lambda](../#lambda)<`T`, `void`> |

**Returns:** [Command](command.md)

___

## Methods

<a id="call"></a>

###  call

▸ **call**(entity: *`T`*): `Promise`<`void`>

*Implementation of [Fn](../interfaces/fn.md).[call](../interfaces/fn.md#call)*

*Inherited from [Query](query.md).[call](query.md#call)*

*Defined in [wait.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`void`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Inherited from [Query](query.md).[toString](query.md#tostring)*

*Defined in [wait.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L50)*

**Returns:** `string`

___

