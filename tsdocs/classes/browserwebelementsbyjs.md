[selenidejs](../README.md) › [BrowserWebElementsByJs](browserwebelementsbyjs.md)

# Class: BrowserWebElementsByJs

## Hierarchy

* **BrowserWebElementsByJs**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](browserwebelementsbyjs.md#constructor)

### Properties

* [args](browserwebelementsbyjs.md#private-args)
* [browser](browserwebelementsbyjs.md#private-browser)
* [script](browserwebelementsbyjs.md#private-script)

### Methods

* [find](browserwebelementsbyjs.md#find)
* [toString](browserwebelementsbyjs.md#tostring)

## Constructors

###  constructor

\+ **new BrowserWebElementsByJs**(`browser`: [Browser](browser.md), `script`: string | function, `args`: any[]): *[BrowserWebElementsByJs](browserwebelementsbyjs.md)*

*Defined in [lib/locators/BrowserWebElementsByJs.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByJs.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](browser.md) |
`script` | string &#124; function |
`args` | any[] |

**Returns:** *[BrowserWebElementsByJs](browserwebelementsbyjs.md)*

## Properties

### `Private` args

• **args**: *any[]*

*Defined in [lib/locators/BrowserWebElementsByJs.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByJs.ts#L25)*

___

### `Private` browser

• **browser**: *[Browser](browser.md)*

*Defined in [lib/locators/BrowserWebElementsByJs.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByJs.ts#L23)*

___

### `Private` script

• **script**: *string | function*

*Defined in [lib/locators/BrowserWebElementsByJs.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByJs.ts#L24)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/BrowserWebElementsByJs.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByJs.ts#L32)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/BrowserWebElementsByJs.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByJs.ts#L36)*

**Returns:** *string*
