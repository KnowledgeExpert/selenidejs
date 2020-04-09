[selenidejs](../README.md) › [Element](element.md)

# Class: Element

## Hierarchy

* [Entity](entity.md)

  ↳ **Element**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](element.md#constructor)

### Properties

* [configuration](element.md#configuration)
* [locator](element.md#locator)
* [wait](element.md#protected-wait)

### Accessors

* [followingSibling](element.md#followingsibling)
* [parent](element.md#parent)
* [shadow](element.md#shadow)

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

\+ **new Element**(`locator`: [Locator](../interfaces/locator.md)‹Promise‹WebElement››, `configuration`: [Configuration](configuration.md)): *[Element](element.md)*

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [lib/element.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`locator` | [Locator](../interfaces/locator.md)‹Promise‹WebElement›› |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Element](element.md)*

## Properties

###  configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [Entity](entity.md).[configuration](entity.md#configuration)*

*Defined in [lib/entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

###  locator

• **locator**: *[Locator](../interfaces/locator.md)‹Promise‹WebElement››*

*Defined in [lib/element.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L33)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹this›*

*Inherited from [Entity](entity.md).[wait](entity.md#protected-wait)*

*Defined in [lib/entity.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L53)*

## Accessors

###  followingSibling

• **get followingSibling**(): *[Element](element.md)*

*Defined in [lib/element.ts:92](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L92)*

**Returns:** *[Element](element.md)*

___

###  parent

• **get parent**(): *[Element](element.md)*

*Defined in [lib/element.ts:88](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L88)*

**Returns:** *[Element](element.md)*

___

###  shadow

• **get shadow**(): *[Shadow](shadow.md)*

*Defined in [lib/element.ts:96](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L96)*

**Returns:** *[Shadow](shadow.md)*

## Methods

###  all

▸ **all**(`located`: string | By | object, `customized?`: Partial‹[Configuration](configuration.md)›): *[Collection](collection.md)*

*Defined in [lib/element.ts:71](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`located` | string &#124; By &#124; object |
`customized?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Collection](collection.md)*

___

###  clear

▸ **clear**(): *Promise‹this›*

*Defined in [lib/element.ts:117](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L117)*

**Returns:** *Promise‹this›*

___

###  click

▸ **click**(): *Promise‹this›*

*Defined in [lib/element.ts:110](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L110)*

**Returns:** *Promise‹this›*

___

###  contextClick

▸ **contextClick**(): *Promise‹this›*

*Defined in [lib/element.ts:172](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L172)*

**Returns:** *Promise‹this›*

___

###  doubleClick

▸ **doubleClick**(): *Promise‹this›*

*Defined in [lib/element.ts:148](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L148)*

**Returns:** *Promise‹this›*

___

###  element

▸ **element**(`located`: string | By‹› | object, `customized?`: Partial‹[Configuration](configuration.md)›): *[Element](element.md)*

*Defined in [lib/element.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`located` | string &#124; By‹› &#124; object |
`customized?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Element](element.md)*

___

###  executeScript

▸ **executeScript**(`script`: string | function, ...`args`: any[]): *Promise‹unknown›*

*Defined in [lib/element.ts:101](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | string &#124; function |
`...args` | any[] |

**Returns:** *Promise‹unknown›*

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

###  getWebElement

▸ **getWebElement**(): *Promise‹WebElement›*

*Defined in [lib/element.ts:44](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L44)*

**Returns:** *Promise‹WebElement›*

___

###  hover

▸ **hover**(): *Promise‹this›*

*Defined in [lib/element.ts:160](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L160)*

**Returns:** *Promise‹this›*

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

###  pressEnter

▸ **pressEnter**(): *Promise‹this›*

*Defined in [lib/element.ts:191](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L191)*

**Returns:** *Promise‹this›*

___

###  pressEscape

▸ **pressEscape**(): *Promise‹this›*

*Defined in [lib/element.ts:195](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L195)*

**Returns:** *Promise‹this›*

___

###  pressTab

▸ **pressTab**(): *Promise‹this›*

*Defined in [lib/element.ts:199](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L199)*

**Returns:** *Promise‹this›*

___

###  setValue

▸ **setValue**(`value`: string | number): *Promise‹this›*

*Defined in [lib/element.ts:124](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

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

###  toString

▸ **toString**(): *string*

*Defined in [lib/element.ts:40](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L40)*

**Returns:** *string*

___

###  type

▸ **type**(`keys`: string | number): *Promise‹this›*

*Defined in [lib/element.ts:138](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string &#124; number |

**Returns:** *Promise‹this›*

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

▸ **with**(`customConfig`: Partial‹[Configuration](configuration.md)›): *[Element](element.md)*

*Defined in [lib/element.ts:50](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/element.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`customConfig` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Element](element.md)*
