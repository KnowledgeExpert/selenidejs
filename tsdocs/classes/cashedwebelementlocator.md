[selenidejs](../README.md) › [CashedWebElementLocator](cashedwebelementlocator.md)

# Class: CashedWebElementLocator

## Hierarchy

* **CashedWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](cashedwebelementlocator.md#constructor)

### Properties

* [cash](cashedwebelementlocator.md#private-cash)
* [description](cashedwebelementlocator.md#private-description)

### Methods

* [find](cashedwebelementlocator.md#find)
* [toString](cashedwebelementlocator.md#tostring)

## Constructors

###  constructor

\+ **new CashedWebElementLocator**(`cash`: WebElement, `description`: string): *[CashedWebElementLocator](cashedwebelementlocator.md)*

*Defined in [lib/locators/cashedWebElementLocator.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`cash` | WebElement |
`description` | string |

**Returns:** *[CashedWebElementLocator](cashedwebelementlocator.md)*

## Properties

### `Private` cash

• **cash**: *WebElement*

*Defined in [lib/locators/cashedWebElementLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L20)*

___

### `Private` description

• **description**: *string*

*Defined in [lib/locators/cashedWebElementLocator.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L21)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/cashedWebElementLocator.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L26)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/cashedWebElementLocator.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L30)*

**Returns:** *string*
