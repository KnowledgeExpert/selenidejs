[selenidejs](../README.md) › [BrowserWebElementsByLocator](browserwebelementsbylocator.md)

# Class: BrowserWebElementsByLocator

## Hierarchy

* **BrowserWebElementsByLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](browserwebelementsbylocator.md#constructor)

### Properties

* [browser](browserwebelementsbylocator.md#private-browser)
* [by](browserwebelementsbylocator.md#private-by)

### Methods

* [find](browserwebelementsbylocator.md#find)
* [toString](browserwebelementsbylocator.md#tostring)

## Constructors

###  constructor

\+ **new BrowserWebElementsByLocator**(`by`: By, `browser`: [Browser](browser.md)): *[BrowserWebElementsByLocator](browserwebelementsbylocator.md)*

*Defined in [lib/locators/BrowserWebElementsByLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`by` | By |
`browser` | [Browser](browser.md) |

**Returns:** *[BrowserWebElementsByLocator](browserwebelementsbylocator.md)*

## Properties

### `Private` browser

• **browser**: *[Browser](browser.md)*

*Defined in [lib/locators/BrowserWebElementsByLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L23)*

___

### `Private` by

• **by**: *By*

*Defined in [lib/locators/BrowserWebElementsByLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L22)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/BrowserWebElementsByLocator.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L28)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/BrowserWebElementsByLocator.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L32)*

**Returns:** *string*
