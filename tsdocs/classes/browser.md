> **[selenidejs](../README.md)**

[Browser](browser.md) /

# Class: Browser

## Hierarchy

* [Entity](entity.md)

  * **Browser**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](browser.md#constructor)

### Properties

* [configuration](browser.md#protected-configuration)
* [wait](browser.md#protected-wait)

### Accessors

* [alert](browser.md#alert)
* [driver](browser.md#driver)

### Methods

* [all](browser.md#all)
* [back](browser.md#back)
* [clearCookies](browser.md#clearcookies)
* [clearLocalStorage](browser.md#clearlocalstorage)
* [clearSessionStorage](browser.md#clearsessionstorage)
* [closeCurrentTab](browser.md#closecurrenttab)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [forward](browser.md#forward)
* [get](browser.md#get)
* [goToNextTab](browser.md#gotonexttab)
* [goToPreviousTab](browser.md#gotoprevioustab)
* [goToTab](browser.md#gototab)
* [matching](browser.md#matching)
* [open](browser.md#open)
* [perform](browser.md#perform)
* [quit](browser.md#quit)
* [refresh](browser.md#refresh)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
* [toString](browser.md#tostring)
* [waitUntil](browser.md#waituntil)
* [with](browser.md#with)
* [chrome](browser.md#static-chrome)
* [chromeWith](browser.md#static-chromewith)
* [configuredWith](browser.md#static-configuredwith)

## Constructors

###  constructor

\+ **new Browser**(`configuration`: `Partial<Configuration>`): *[Browser](browser.md)*

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [browser.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | `Partial<Configuration>` |  {} |

**Returns:** *[Browser](browser.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [Entity](entity.md).[configuration](entity.md#protected-configuration)*

*Defined in [entity.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L54)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹*this*›*

*Inherited from [Entity](entity.md).[wait](entity.md#protected-wait)*

*Defined in [entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

## Accessors

###  alert

• **get alert**(): *`AlertPromise`*

*Defined in [browser.ts:209](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L209)*

**Returns:** *`AlertPromise`*

___

###  driver

• **get driver**(): *`WebDriver`*

*Defined in [browser.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L49)*

**Returns:** *`WebDriver`*

## Methods

###  all

▸ **all**(`cssOrXpathOrBy`: string | `By`, `customized?`: `Partial<Configuration>`): *[Collection](collection.md)*

*Defined in [browser.ts:68](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |
`customized?` | `Partial<Configuration>` |

**Returns:** *[Collection](collection.md)*

___

###  back

▸ **back**(): *`Promise<void>`*

*Defined in [browser.ts:127](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L127)*

**Returns:** *`Promise<void>`*

___

###  clearCookies

▸ **clearCookies**(): *`Promise<Browser>`*

*Defined in [browser.ts:197](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L197)*

**Returns:** *`Promise<Browser>`*

___

###  clearLocalStorage

▸ **clearLocalStorage**(): *`Promise<Browser>`*

*Defined in [browser.ts:185](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L185)*

**Returns:** *`Promise<Browser>`*

___

###  clearSessionStorage

▸ **clearSessionStorage**(): *`Promise<Browser>`*

*Defined in [browser.ts:191](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L191)*

**Returns:** *`Promise<Browser>`*

___

###  closeCurrentTab

▸ **closeCurrentTab**(): *`Promise<Browser>`*

*Defined in [browser.ts:114](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L114)*

**Returns:** *`Promise<Browser>`*

___

###  element

▸ **element**(`cssOrXpathOrBy`: string | `By`, `customized?`: `Partial<Configuration>`): *[Element](element.md)*

*Defined in [browser.ts:59](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |
`customized?` | `Partial<Configuration>` |

**Returns:** *[Element](element.md)*

___

###  executeScript

▸ **executeScript**(`script`: string | `Function`, ...`args`: any[]): *`Promise<Object>`*

*Defined in [browser.ts:82](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | string \| `Function` |
`...args` | any[] |

**Returns:** *`Promise<Object>`*

___

###  forward

▸ **forward**(): *`Promise<void>`*

*Defined in [browser.ts:131](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L131)*

**Returns:** *`Promise<void>`*

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

###  goToNextTab

▸ **goToNextTab**(): *`Promise<Browser>`*

*Defined in [browser.ts:135](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L135)*

**Returns:** *`Promise<Browser>`*

___

###  goToPreviousTab

▸ **goToPreviousTab**(): *`Promise<Browser>`*

*Defined in [browser.ts:142](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L142)*

**Returns:** *`Promise<Browser>`*

___

###  goToTab

▸ **goToTab**(`indexOrId`: number | string): *`Promise<Browser>`*

*Defined in [browser.ts:149](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`indexOrId` | number \| string |

**Returns:** *`Promise<Browser>`*

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

###  open

▸ **open**(`relativeOrAbsoluteUrl`: string): *`Promise<Browser>`*

*Defined in [browser.ts:87](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`relativeOrAbsoluteUrl` | string |

**Returns:** *`Promise<Browser>`*

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

###  quit

▸ **quit**(): *`Promise<void>`*

*Defined in [browser.ts:119](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L119)*

**Returns:** *`Promise<void>`*

___

###  refresh

▸ **refresh**(): *`Promise<void>`*

*Defined in [browser.ts:123](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L123)*

**Returns:** *`Promise<void>`*

___

###  resizeWindow

▸ **resizeWindow**(`width`: number, `height`: number): *`Promise<Browser>`*

*Defined in [browser.ts:103](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *`Promise<Browser>`*

___

###  screenshot

▸ **screenshot**(): *`Promise<Buffer>`*

*Defined in [browser.ts:108](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L108)*

**Returns:** *`Promise<Buffer>`*

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

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): *`Promise<Browser>`*

*Defined in [browser.ts:169](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L169)*

**Returns:** *`Promise<Browser>`*

___

###  toString

▸ **toString**(): *string*

*Defined in [browser.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L53)*

**Returns:** *string*

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

▸ **with**(`customConfig`: `Partial<Configuration>`): *[Browser](browser.md)*

*Defined in [browser.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`customConfig` | `Partial<Configuration>` |

**Returns:** *[Browser](browser.md)*

___

### `Static` chrome

▸ **chrome**(): *[Browser](browser.md)*

*Defined in [browser.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L37)*

**Returns:** *[Browser](browser.md)*

___

### `Static` chromeWith

▸ **chromeWith**(): *[Customized](customized.md)‹*[Browser](browser.md)*›*

*Defined in [browser.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L32)*

**Returns:** *[Customized](customized.md)‹*[Browser](browser.md)*›*

___

### `Static` configuredWith

▸ **configuredWith**(): *[Customized](customized.md)‹*[Browser](browser.md)*›*

*Defined in [browser.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L28)*

**Returns:** *[Customized](customized.md)‹*[Browser](browser.md)*›*