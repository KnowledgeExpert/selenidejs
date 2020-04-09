[selenidejs](../README.md) › [Command](command.md)

# Class: Command <**T**>

Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T.
Command can pass or fail with Error correspondingly.

## Type parameters

▪ **T**

## Hierarchy

* [Query](query.md)‹T, void›

  ↳ **Command**

## Implements

* [Fn](../interfaces/fn.md)‹T, void›

## Index

### Constructors

* [constructor](command.md#constructor)

### Methods

* [call](command.md#call)
* [toString](command.md#tostring)

## Constructors

###  constructor

\+ **new Command**(`description`: any, `fn`: any): *[Command](command.md)*

*Inherited from [Query](query.md).[constructor](query.md#constructor)*

*Defined in [lib/wait.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | any |
`fn` | any |

**Returns:** *[Command](command.md)*

## Methods

###  call

▸ **call**(`entity`: T): *Promise‹void›*

*Implementation of [Fn](../interfaces/fn.md)*

*Inherited from [Query](query.md).[call](query.md#call)*

*Defined in [lib/wait.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |

**Returns:** *Promise‹void›*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Query](query.md).[toString](query.md#tostring)*

*Defined in [lib/wait.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L52)*

**Returns:** *string*
