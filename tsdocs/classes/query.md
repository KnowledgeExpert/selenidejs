[selenidejs](../README.md) › [Query](query.md)

# Class: Query <**T, R**>

We use queries to perform an async query on entity of type T, i.e. get something from entity.
So a query can pass and return something of type R or failed with Error correspondingly.

## Type parameters

▪ **T**

▪ **R**

## Hierarchy

* **Query**

  ↳ [Command](command.md)

## Implements

* [Fn](../interfaces/fn.md)‹T, R›

## Index

### Constructors

* [constructor](query.md#constructor)

### Properties

* [description](query.md#private-description)
* [fn](query.md#private-fn)

### Methods

* [call](query.md#call)
* [toString](query.md#tostring)

## Constructors

###  constructor

\+ **new Query**(`description`: any, `fn`: any): *[Query](query.md)*

*Defined in [lib/wait.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | any |
`fn` | any |

**Returns:** *[Query](query.md)*

## Properties

### `Private` description

• **description**: *string*

*Defined in [lib/wait.ts:40](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L40)*

___

### `Private` fn

• **fn**: *[Lambda](../README.md#lambda)‹T, R›*

*Defined in [lib/wait.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L41)*

## Methods

###  call

▸ **call**(`entity`: T): *Promise‹R›*

*Implementation of [Fn](../interfaces/fn.md)*

*Defined in [lib/wait.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |

**Returns:** *Promise‹R›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/wait.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L52)*

**Returns:** *string*
