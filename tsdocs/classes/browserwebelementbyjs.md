[selenidejs](../README.md) › [BrowserWebElementByJs](browserwebelementbyjs.md)

# Class: BrowserWebElementByJs

## Hierarchy

* **BrowserWebElementByJs**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](browserwebelementbyjs.md#constructor)

### Properties

* [args](browserwebelementbyjs.md#private-args)
* [browser](browserwebelementbyjs.md#private-browser)
* [script](browserwebelementbyjs.md#private-script)

### Methods

* [find](browserwebelementbyjs.md#find)
* [toString](browserwebelementbyjs.md#tostring)

## Constructors

###  constructor

\+ **new BrowserWebElementByJs**(`browser`: [Browser](browser.md), `script`: string | function, `args`: any[]): *[BrowserWebElementByJs](browserwebelementbyjs.md)*

*Defined in [lib/locators/BrowserWebElementByJs.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByJs.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](browser.md) |
`script` | string &#124; function |
`args` | any[] |

**Returns:** *[BrowserWebElementByJs](browserwebelementbyjs.md)*

## Properties

### `Private` args

• **args**: *any[]*

*Defined in [lib/locators/BrowserWebElementByJs.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByJs.ts#L25)*

___

### `Private` browser

• **browser**: *[Browser](browser.md)*

*Defined in [lib/locators/BrowserWebElementByJs.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByJs.ts#L23)*

___

### `Private` script

• **script**: *string | function*

*Defined in [lib/locators/BrowserWebElementByJs.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByJs.ts#L24)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/BrowserWebElementByJs.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByJs.ts#L32)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/BrowserWebElementByJs.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByJs.ts#L36)*

**Returns:** *string*
