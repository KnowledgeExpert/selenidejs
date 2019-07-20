> **[selenidejs](../README.md)**

[Element](element.md) /

# Class: Element

## Hierarchy

* [Entity](entity.md)

  * **Element**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](element.md#constructor)

### Properties

* [configuration](element.md#protected-configuration)
* [locator](element.md#private-locator)
* [wait](element.md#protected-wait)

### Accessors

* [followingSibling](element.md#followingsibling)
* [parent](element.md#parent)

### Methods

* [all](element.md#all)
* [clear](element.md#clear)
* [click](element.md#click)
* [contextClick](element.md#contextclick)
* [doubleClick](element.md#doubleclick)
* [element](element.md#element)
* [executeScript](element.md#executescript)
* [get](element.md#get)
* [getWebElement](element.md#getwebelement)
* [hover](element.md#hover)
* [matching](element.md#matching)
* [perform](element.md#perform)
* [pressEnter](element.md#pressenter)
* [pressEscape](element.md#pressescape)
* [pressTab](element.md#presstab)
* [setValue](element.md#setvalue)
* [should](element.md#should)
* [toString](element.md#tostring)
* [type](element.md#type)
* [waitUntil](element.md#waituntil)
* [with](element.md#with)

## Constructors

###  constructor

\+ **new Element**(`locator`: [Locator](../interfaces/locator.md)‹*`Promise<WebElement>`*›, `configuration`: [Configuration](configuration.md)): *[Element](element.md)*

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [element.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [Locator](../interfaces/locator.md)‹*`Promise<WebElement>`*› |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Element](element.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Overrides [Entity](entity.md).[configuration](entity.md#protected-configuration)*

*Defined in [element.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L34)*

___

### `Private` locator

• **locator**: *[Locator](../interfaces/locator.md)‹*`Promise<WebElement>`*›*

*Defined in [element.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L32)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹*this*›*

*Inherited from [Entity](entity.md).[wait](entity.md#protected-wait)*

*Defined in [entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

## Accessors

###  followingSibling

• **get followingSibling**(): *[Element](element.md)*

*Defined in [element.ts:64](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L64)*

**Returns:** *[Element](element.md)*

___

###  parent

• **get parent**(): *[Element](element.md)*

*Defined in [element.ts:60](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L60)*

**Returns:** *[Element](element.md)*

## Methods

###  all

▸ **all**(`cssOrXpathOrBy`: string | `By`): *[Collection](collection.md)*

*Defined in [element.ts:68](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |

**Returns:** *[Collection](collection.md)*

___

###  clear

▸ **clear**(): *`Promise<this>`*

*Defined in [element.ts:108](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L108)*

**Returns:** *`Promise<this>`*

___

###  click

▸ **click**(): *`Promise<this>`*

*Defined in [element.ts:101](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L101)*

**Returns:** *`Promise<this>`*

___

###  contextClick

▸ **contextClick**(): *`Promise<this>`*

*Defined in [element.ts:163](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L163)*

**Returns:** *`Promise<this>`*

___

###  doubleClick

▸ **doubleClick**(): *`Promise<this>`*

*Defined in [element.ts:139](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L139)*

**Returns:** *`Promise<this>`*

___

###  element

▸ **element**(`cssOrXpathOrBy`: string | `By`): *[Element](element.md)*

*Defined in [element.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |

**Returns:** *[Element](element.md)*

___

###  executeScript

▸ **executeScript**(`scriptOnThisWebElement`: string | `Function`, ...`additionalArgs`: any[]): *`Promise<Object>`*

*Defined in [element.ts:94](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`scriptOnThisWebElement` | string \| `Function` |
`...additionalArgs` | any[] |

**Returns:** *`Promise<Object>`*

___

###  get

▸ **get**<**R**>(`query`: [Lambda](../README.md#lambda)‹*this*, *`R`*›): *`Promise<R>`*

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [entity.ts:100](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L100)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹*this*, *`R`*› |

**Returns:** *`Promise<R>`*

___

###  getWebElement

▸ **getWebElement**(): *`Promise<WebElement>`*

*Defined in [element.ts:43](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L43)*

**Returns:** *`Promise<WebElement>`*

___

###  hover

▸ **hover**(): *`Promise<this>`*

*Defined in [element.ts:151](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L151)*

**Returns:** *`Promise<this>`*

___

###  matching

▸ **matching**(...`conditions`: `Array<Condition<this>>`): *`Promise<boolean>`*

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [entity.ts:87](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<boolean>`*

___

###  perform

▸ **perform**(`command`: [Lambda](../README.md#lambda)‹*this*, *void*›): *`Promise<this>`*

*Inherited from [Entity](entity.md).[perform](entity.md#perform)*

*Defined in [entity.ts:93](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Lambda](../README.md#lambda)‹*this*, *void*› |

**Returns:** *`Promise<this>`*

___

###  pressEnter

▸ **pressEnter**(): *`Promise<this>`*

*Defined in [element.ts:182](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L182)*

**Returns:** *`Promise<this>`*

___

###  pressEscape

▸ **pressEscape**(): *`Promise<this>`*

*Defined in [element.ts:186](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L186)*

**Returns:** *`Promise<this>`*

___

###  pressTab

▸ **pressTab**(): *`Promise<this>`*

*Defined in [element.ts:190](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L190)*

**Returns:** *`Promise<this>`*

___

###  setValue

▸ **setValue**(`value`: string | number): *`Promise<this>`*

*Defined in [element.ts:115](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string \| number |

**Returns:** *`Promise<this>`*

___

###  should

▸ **should**(...`conditions`: `Array<Condition<this>>`): *`Promise<this>`*

*Inherited from [Entity](entity.md).[should](entity.md#should)*

*Defined in [entity.ts:76](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<this>`*

___

###  toString

▸ **toString**(): *string*

*Defined in [element.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L39)*

**Returns:** *string*

___

###  type

▸ **type**(`keys`: string | number): *`Promise<this>`*

*Defined in [element.ts:129](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string \| number |

**Returns:** *`Promise<this>`*

___

###  waitUntil

▸ **waitUntil**(...`conditions`: `Array<Condition<this>>`): *`Promise<boolean>`*

*Implementation of [Matchable](../interfaces/matchable.md)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [entity.ts:83](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | `Array<Condition<this>>` |

**Returns:** *`Promise<boolean>`*

___

###  with

▸ **with**(`customConfig`: `Partial<Configuration>`): *[Element](element.md)*

*Defined in [element.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`customConfig` | `Partial<Configuration>` |

**Returns:** *[Element](element.md)*