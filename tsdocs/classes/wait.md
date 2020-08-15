[selenidejs](../README.md) › [Wait](wait.md)

# Class: Wait <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Wait**

## Index

### Constructors

* [constructor](wait.md#constructor)

### Properties

* [entity](wait.md#private-entity)
* [timeout](wait.md#private-timeout)

### Methods

* [command](wait.md#command)
* [for](wait.md#for)
* [query](wait.md#query)
* [until](wait.md#until)

## Constructors

###  constructor

\+ **new Wait**(`entity`: T, `timeout`: number): *[Wait](wait.md)*

*Defined in [lib/wait.ts:203](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |
`timeout` | number |

**Returns:** *[Wait](wait.md)*

## Properties

### `Private` entity

• **entity**: *T*

*Defined in [lib/wait.ts:202](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L202)*

___

### `Private` timeout

• **timeout**: *number*

*Defined in [lib/wait.ts:203](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L203)*

## Methods

###  command

▸ **command**(`fn`: [Lambda](../README.md#lambda)‹T, void›): *Promise‹void›*

*Defined in [lib/wait.ts:214](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Lambda](../README.md#lambda)‹T, void› |

**Returns:** *Promise‹void›*

___

###  for

▸ **for**<**R**>(`fn`: [Fn](../interfaces/fn.md)‹T, R›): *Promise‹R›*

*Defined in [lib/wait.ts:222](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L222)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Fn](../interfaces/fn.md)‹T, R› |

**Returns:** *Promise‹R›*

___

###  query

▸ **query**<**R**>(`fn`: [Lambda](../README.md#lambda)‹T, R›): *Promise‹R›*

*Defined in [lib/wait.ts:210](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L210)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Lambda](../README.md#lambda)‹T, R› |

**Returns:** *Promise‹R›*

___

###  until

▸ **until**<**R**>(`fn`: [Fn](../interfaces/fn.md)‹T, R›): *Promise‹boolean›*

*Defined in [lib/wait.ts:218](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L218)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Fn](../interfaces/fn.md)‹T, R› |

**Returns:** *Promise‹boolean›*
