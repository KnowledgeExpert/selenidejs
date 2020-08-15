[selenidejs](../README.md) › [Collection](collection.md)

# Class: Collection

## Hierarchy

* [Entity](entity.md)

  ↳ **Collection**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [configuration](collection.md#configuration)
* [locator](collection.md#private-locator)
* [wait](collection.md#protected-wait)

### Accessors

* [first](collection.md#first)

### Methods

* [collected](collection.md#collected)
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

\+ **new Collection**(`locator`: [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››, `configuration`: [Configuration](configuration.md)): *[Collection](collection.md)*

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [lib/collection.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [Locator](../interfaces/locator.md)‹Promise‹WebElement[]›› |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Collection](collection.md)*

## Properties

###  configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [Entity](entity.md).[configuration](entity.md#configuration)*

*Defined in [lib/entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

### `Private` locator

• **locator**: *[Locator](../interfaces/locator.md)‹Promise‹WebElement[]››*

*Defined in [lib/collection.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L32)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹this›*

*Inherited from [Entity](entity.md).[wait](entity.md#protected-wait)*

*Defined in [lib/entity.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L53)*

## Accessors

###  first

• **get first**(): *[Element](element.md)*

*Defined in [lib/collection.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L55)*

**Returns:** *[Element](element.md)*

## Methods

###  collected

▸ **collected**(`searchFunction`: function): *[Collection](collection.md)*

*Defined in [lib/collection.ts:82](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L82)*

**Parameters:**

▪ **searchFunction**: *function*

▸ (`element`: [Element](element.md)): *[Element](element.md) | [Collection](collection.md)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |

**Returns:** *[Collection](collection.md)*

___

###  elementAt

▸ **elementAt**(`index`: number): *[Element](element.md)*

*Defined in [lib/collection.ts:51](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Element](element.md)*

___

###  elementBy

▸ **elementBy**(...`conditions`: [ElementCondition](../README.md#elementcondition)[]): *[Element](element.md)*

*Defined in [lib/collection.ts:75](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [ElementCondition](../README.md#elementcondition)[] |

**Returns:** *[Element](element.md)*

___

###  filteredBy

▸ **filteredBy**(...`conditions`: [ElementCondition](../README.md#elementcondition)[]): *[Collection](collection.md)*

*Defined in [lib/collection.ts:68](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [ElementCondition](../README.md#elementcondition)[] |

**Returns:** *[Collection](collection.md)*

___

###  get

▸ **get**<**R**>(`query`: [Lambda](../README.md#lambda)‹this, R›): *Promise‹R›*

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [lib/entity.ts:103](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L103)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹this, R› |

**Returns:** *Promise‹R›*

___

###  getAsCashedArray

▸ **getAsCashedArray**(): *Promise‹[Element](element.md)[]›*

*Defined in [lib/collection.ts:44](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L44)*

**Returns:** *Promise‹[Element](element.md)[]›*

___

###  getWebElements

▸ **getWebElements**(): *Promise‹WebElement[]›*

*Defined in [lib/collection.ts:86](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L86)*

**Returns:** *Promise‹WebElement[]›*

___

###  matching

▸ **matching**(...`conditions`: [Condition](condition.md)‹this›[]): *Promise‹boolean›*

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [lib/entity.ts:88](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹this›[] |

**Returns:** *Promise‹boolean›*

___

###  perform

▸ **perform**(`command`: [Lambda](../README.md#lambda)‹this, void›): *Promise‹this›*

*Inherited from [Entity](entity.md).[perform](entity.md#perform)*

*Defined in [lib/entity.ts:94](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Lambda](../README.md#lambda)‹this, void› |

**Returns:** *Promise‹this›*

___

###  should

▸ **should**(...`conditions`: [Condition](condition.md)‹this›[]): *Promise‹this›*

*Inherited from [Entity](entity.md).[should](entity.md#should)*

*Defined in [lib/entity.ts:77](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹this›[] |

**Returns:** *Promise‹this›*

___

###  sliced

▸ **sliced**(`start`: number, `end`: number): *[Collection](collection.md)*

*Defined in [lib/collection.ts:64](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L64)*

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

*Defined in [lib/collection.ts:90](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L90)*

**Returns:** *string*

___

###  waitUntil

▸ **waitUntil**(...`conditions`: [Condition](condition.md)‹this›[]): *Promise‹boolean›*

*Implementation of [Matchable](../interfaces/matchable.md)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [lib/entity.ts:84](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹this›[] |

**Returns:** *Promise‹boolean›*

___

###  with

▸ **with**(`customConfig`: Partial‹[Configuration](configuration.md)›): *[Collection](collection.md)*

*Defined in [lib/collection.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/collection.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`customConfig` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Collection](collection.md)*
