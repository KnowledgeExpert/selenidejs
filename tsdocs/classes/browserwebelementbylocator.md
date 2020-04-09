[selenidejs](../README.md) › [BrowserWebElementByLocator](browserwebelementbylocator.md)

# Class: BrowserWebElementByLocator

## Hierarchy

* **BrowserWebElementByLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](browserwebelementbylocator.md#constructor)

### Properties

* [browser](browserwebelementbylocator.md#private-browser)
* [by](browserwebelementbylocator.md#private-by)

### Methods

* [find](browserwebelementbylocator.md#find)
* [toString](browserwebelementbylocator.md#tostring)

## Constructors

###  constructor

\+ **new BrowserWebElementByLocator**(`by`: By, `browser`: [Browser](browser.md)): *[BrowserWebElementByLocator](browserwebelementbylocator.md)*

*Defined in [lib/locators/BrowserWebElementByLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByLocator.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`by` | By |
`browser` | [Browser](browser.md) |

**Returns:** *[BrowserWebElementByLocator](browserwebelementbylocator.md)*

## Properties

### `Private` browser

• **browser**: *[Browser](browser.md)*

*Defined in [lib/locators/BrowserWebElementByLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByLocator.ts#L23)*

___

### `Private` by

• **by**: *By*

*Defined in [lib/locators/BrowserWebElementByLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByLocator.ts#L22)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/BrowserWebElementByLocator.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByLocator.ts#L28)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/BrowserWebElementByLocator.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/BrowserWebElementByLocator.ts#L32)*

**Returns:** *string*
