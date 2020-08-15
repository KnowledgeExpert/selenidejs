[selenidejs](../README.md) › [Entity](entity.md)

# Class: Entity

## Hierarchy

* **Entity**

  ↳ [Element](element.md)

  ↳ [Collection](collection.md)

  ↳ [Browser](browser.md)

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](entity.md#constructor)

### Properties

* [configuration](entity.md#configuration)
* [wait](entity.md#protected-wait)

### Methods

* [get](entity.md#get)
* [matching](entity.md#matching)
* [perform](entity.md#perform)
* [should](entity.md#should)
* [waitUntil](entity.md#waituntil)

## Constructors

###  constructor

\+ **new Entity**(`configuration`: [Configuration](configuration.md)): *[Entity](entity.md)*

*Defined in [lib/entity.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Entity](entity.md)*

## Properties

###  configuration

• **configuration**: *[Configuration](configuration.md)*

*Defined in [lib/entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹this›*

*Defined in [lib/entity.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L53)*

## Methods

###  get

▸ **get**<**R**>(`query`: [Lambda](../README.md#lambda)‹this, R›): *Promise‹R›*

*Defined in [lib/entity.ts:103](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L103)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹this, R› |

**Returns:** *Promise‹R›*

___

###  matching

▸ **matching**(...`conditions`: [Condition](condition.md)‹this›[]): *Promise‹boolean›*

*Defined in [lib/entity.ts:88](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹this›[] |

**Returns:** *Promise‹boolean›*

___

###  perform

▸ **perform**(`command`: [Lambda](../README.md#lambda)‹this, void›): *Promise‹this›*

*Defined in [lib/entity.ts:94](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Lambda](../README.md#lambda)‹this, void› |

**Returns:** *Promise‹this›*

___

###  should

▸ **should**(...`conditions`: [Condition](condition.md)‹this›[]): *Promise‹this›*

*Defined in [lib/entity.ts:77](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹this›[] |

**Returns:** *Promise‹this›*

___

###  waitUntil

▸ **waitUntil**(...`conditions`: [Condition](condition.md)‹this›[]): *Promise‹boolean›*

*Implementation of [Matchable](../interfaces/matchable.md)*

*Defined in [lib/entity.ts:84](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹this›[] |

**Returns:** *Promise‹boolean›*
