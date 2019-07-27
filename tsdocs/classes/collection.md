> **[selenidejs](../README.md)**

[Collection](collection.md) /

# Class: Collection

## Hierarchy

* [Entity](entity.md)

  * **Collection**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [configuration](collection.md#protected-configuration)
* [locator](collection.md#private-locator)
* [wait](collection.md#protected-wait)

### Accessors

* [first](collection.md#first)

### Methods

* [elementAt](collection.md#elementat)
* [elementBy](collection.md#elementby)
* [filteredBy](collection.md#filteredby)
* [get](collection.md#get)
* [getAsCashedArray](collection.md#getascashedarray)
* [getWebElements](collection.md#getwebelements)
* [matching](collection.md#matching)
* [perform](collection.md#perform)
* [should](collection.md#should)
* [sliced](collection.md#sliced)
* [toString](collection.md#tostring)
* [waitUntil](collection.md#waituntil)
* [with](collection.md#with)

## Constructors

###  constructor

\+ **new Collection**(`locator`: [Locator](../interfaces/locator.md)‹*`Promise<WebElement[]>`*›, `configuration`: [Configuration](configuration.md)): *[Collection](collection.md)*

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [collection.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [Locator](../interfaces/locator.md)‹*`Promise<WebElement[]>`*› |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Collection](collection.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Overrides [Entity](entity.md).[configuration](entity.md#protected-configuration)*

*Defined in [collection.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L32)*

___

### `Private` locator

• **locator**: *[Locator](../interfaces/locator.md)‹*`Promise<WebElement[]>`*›*

*Defined in [collection.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L31)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹*this*›*

*Inherited from [Entity](entity.md).[wait](entity.md#protected-wait)*

*Defined in [entity.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L52)*

## Accessors

###  first

• **get first**(): *[Element](element.md)*

*Defined in [collection.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L54)*

**Returns:** *[Element](element.md)*

## Methods

###  elementAt

▸ **elementAt**(`index`: number): *[Element](element.md)*

*Defined in [collection.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Element](element.md)*

___

###  elementBy

▸ **elementBy**(...`conditions`: [ElementCondition](../README.md#elementcondition)[]): *[Element](element.md)*

*Defined in [collection.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [ElementCondition](../README.md#elementcondition)[] |

**Returns:** *[Element](element.md)*

___

###  filteredBy

▸ **filteredBy**(...`conditions`: [ElementCondition](../README.md#elementcondition)[]): *[Collection](collection.md)*

*Defined in [collection.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [ElementCondition](../README.md#elementcondition)[] |

**Returns:** *[Collection](collection.md)*

___

###  get

▸ **get**<**R**>(`query`: [Lambda](../README.md#lambda)‹*this*, *`R`*›): *`Promise<R>`*

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [entity.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L100)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹*this*, *`R`*› |

**Returns:** *`Promise<R>`*

___

###  getAsCashedArray

▸ **getAsCashedArray**(): *`Promise<Element[]>`*

*Defined in [collection.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L43)*

**Returns:** *`Promise<Element[]>`*

___

###  getWebElements

▸ **getWebElements**(): *`Promise<WebElement[]>`*

*Defined in [collection.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L81)*

**Returns:** *`Promise<WebElement[]>`*

___

###  matching

▸ **matching**(...`conditions`: `Array<Condition<this>>`): *`Promise<boolean>`*

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [entity.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<boolean>`*

___

###  perform

▸ **perform**(`command`: [Lambda](../README.md#lambda)‹*this*, *void*›): *`Promise<this>`*

*Inherited from [Entity](entity.md).[perform](entity.md#perform)*

*Defined in [entity.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Lambda](../README.md#lambda)‹*this*, *void*› |

**Returns:** *`Promise<this>`*

___

###  should

▸ **should**(...`conditions`: `Array<Condition<this>>`): *`Promise<this>`*

*Inherited from [Entity](entity.md).[should](entity.md#should)*

*Defined in [entity.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<this>`*

___

###  sliced

▸ **sliced**(`start`: number, `end`: number): *[Collection](collection.md)*

*Defined in [collection.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L63)*

Represents a new collection sliced from 'start' element index to 'end' element index exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The inclusive "start" index of collection to be sliced. |
`end` | number | The exclusive "end" index of collection to be sliced  |

**Returns:** *[Collection](collection.md)*

___

###  toString

▸ **toString**(): *string*

*Defined in [collection.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L85)*

**Returns:** *string*

___

###  waitUntil

▸ **waitUntil**(...`conditions`: `Array<Condition<this>>`): *`Promise<boolean>`*

*Implementation of [Matchable](../interfaces/matchable.md)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [entity.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<boolean>`*

___

###  with

▸ **with**(`customConfig`: `Partial<Configuration>`): *[Collection](collection.md)*

*Defined in [collection.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`customConfig` | `Partial<Configuration>` |

**Returns:** *[Collection](collection.md)*