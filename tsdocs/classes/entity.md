> **[selenidejs](../README.md)**

[Entity](entity.md) /

# Class: Entity

## Hierarchy

* **Entity**

  * [Element](element.md)

  * [Collection](collection.md)

  * [Browser](browser.md)

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](entity.md#constructor)

### Properties

* [configuration](entity.md#protected-configuration)
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

*Defined in [entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Entity](entity.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Defined in [entity.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L54)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹*this*›*

*Defined in [entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

## Methods

###  get

▸ **get**<**R**>(`query`: [Lambda](../README.md#lambda)‹*this*, *`R`*›): *`Promise<R>`*

*Defined in [entity.ts:100](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L100)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹*this*, *`R`*› |

**Returns:** *`Promise<R>`*

___

###  matching

▸ **matching**(...`conditions`: `Array<Condition<this>>`): *`Promise<boolean>`*

*Defined in [entity.ts:87](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<boolean>`*

___

###  perform

▸ **perform**(`command`: [Lambda](../README.md#lambda)‹*this*, *void*›): *`Promise<this>`*

*Defined in [entity.ts:93](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Lambda](../README.md#lambda)‹*this*, *void*› |

**Returns:** *`Promise<this>`*

___

###  should

▸ **should**(...`conditions`: `Array<Condition<this>>`): *`Promise<this>`*

*Defined in [entity.ts:76](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<this>`*

___

###  waitUntil

▸ **waitUntil**(...`conditions`: `Array<Condition<this>>`): *`Promise<boolean>`*

*Implementation of [Matchable](../interfaces/matchable.md)*

*Defined in [entity.ts:83](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<boolean>`*