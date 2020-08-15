[selenidejs](../README.md) › [Browser](browser.md)

# Class: Browser

## Hierarchy

* [Entity](entity.md)

  ↳ **Browser**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](browser.md#constructor)

### Properties

* [configuration](browser.md#configuration)
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

\+ **new Browser**(`configuration`: Partial‹[Configuration](configuration.md)›): *[Browser](browser.md)*

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [lib/browser.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | Partial‹[Configuration](configuration.md)› | {} |

**Returns:** *[Browser](browser.md)*

## Properties

###  configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [Entity](entity.md).[configuration](entity.md#configuration)*

*Defined in [lib/entity.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

### `Protected` wait

• **wait**: *[Wait](wait.md)‹this›*

*Inherited from [Entity](entity.md).[wait](entity.md#protected-wait)*

*Defined in [lib/entity.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/entity.ts#L53)*

## Accessors

###  alert

• **get alert**(): *AlertPromise‹›*

*Defined in [lib/browser.ts:227](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L227)*

**Returns:** *AlertPromise‹›*

___

###  driver

• **get driver**(): *WebDriver*

*Defined in [lib/browser.ts:51](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L51)*

**Returns:** *WebDriver*

## Methods

###  all

▸ **all**(`located`: string | By | object, `customized?`: Partial‹[Configuration](configuration.md)›): *[Collection](collection.md)*

*Defined in [lib/browser.ts:78](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`located` | string &#124; By &#124; object |
`customized?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Collection](collection.md)*

___

###  back

▸ **back**(): *Promise‹void›*

*Defined in [lib/browser.ts:145](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L145)*

**Returns:** *Promise‹void›*

___

###  clearCookies

▸ **clearCookies**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:215](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L215)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  clearLocalStorage

▸ **clearLocalStorage**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:203](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L203)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  clearSessionStorage

▸ **clearSessionStorage**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:209](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L209)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  closeCurrentTab

▸ **closeCurrentTab**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:132](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L132)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  element

▸ **element**(`located`: string | By‹› | object, `customized?`: Partial‹[Configuration](configuration.md)›): *[Element](element.md)*

*Defined in [lib/browser.ts:61](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`located` | string &#124; By‹› &#124; object |
`customized?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Element](element.md)*

___

###  executeScript

▸ **executeScript**(`script`: string | function, ...`args`: any[]): *Promise‹unknown›*

*Defined in [lib/browser.ts:97](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | string &#124; function |
`...args` | any[] |

**Returns:** *Promise‹unknown›*

___

###  forward

▸ **forward**(): *Promise‹void›*

*Defined in [lib/browser.ts:149](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L149)*

**Returns:** *Promise‹void›*

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

###  goToNextTab

▸ **goToNextTab**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:153](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L153)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  goToPreviousTab

▸ **goToPreviousTab**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:160](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L160)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  goToTab

▸ **goToTab**(`indexOrId`: number | string): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:167](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`indexOrId` | number &#124; string |

**Returns:** *Promise‹[Browser](browser.md)›*

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

###  open

▸ **open**(`relativeOrAbsoluteUrl`: string): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:105](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`relativeOrAbsoluteUrl` | string |

**Returns:** *Promise‹[Browser](browser.md)›*

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

###  quit

▸ **quit**(): *Promise‹void›*

*Defined in [lib/browser.ts:137](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L137)*

**Returns:** *Promise‹void›*

___

###  refresh

▸ **refresh**(): *Promise‹void›*

*Defined in [lib/browser.ts:141](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L141)*

**Returns:** *Promise‹void›*

___

###  resizeWindow

▸ **resizeWindow**(`width`: number, `height`: number): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:121](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  screenshot

▸ **screenshot**(): *Promise‹Buffer›*

*Defined in [lib/browser.ts:126](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L126)*

**Returns:** *Promise‹Buffer›*

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

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): *Promise‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:187](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L187)*

**Returns:** *Promise‹[Browser](browser.md)›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/browser.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L55)*

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

▸ **with**(`customConfig`: Partial‹[Configuration](configuration.md)›): *[Browser](browser.md)*

*Defined in [lib/browser.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`customConfig` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Browser](browser.md)*

___

### `Static` chrome

▸ **chrome**(): *[Browser](browser.md)*

*Defined in [lib/browser.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L39)*

**Returns:** *[Browser](browser.md)*

___

### `Static` chromeWith

▸ **chromeWith**(): *[Customized](customized.md)‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L34)*

**Returns:** *[Customized](customized.md)‹[Browser](browser.md)›*

___

### `Static` configuredWith

▸ **configuredWith**(): *[Customized](customized.md)‹[Browser](browser.md)›*

*Defined in [lib/browser.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L30)*

**Returns:** *[Customized](customized.md)‹[Browser](browser.md)›*
