[selenidejs](../README.md) › [ByIndexWebElementLocator](byindexwebelementlocator.md)

# Class: ByIndexWebElementLocator

## Hierarchy

* **ByIndexWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](byindexwebelementlocator.md#constructor)

### Properties

* [collection](byindexwebelementlocator.md#private-collection)
* [index](byindexwebelementlocator.md#private-index)

### Methods

* [find](byindexwebelementlocator.md#find)
* [toString](byindexwebelementlocator.md#tostring)

## Constructors

###  constructor

\+ **new ByIndexWebElementLocator**(`index`: number, `collection`: [Collection](collection.md)): *[ByIndexWebElementLocator](byindexwebelementlocator.md)*

*Defined in [lib/locators/byIndexWebElementLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`collection` | [Collection](collection.md) |

**Returns:** *[ByIndexWebElementLocator](byindexwebelementlocator.md)*

## Properties

### `Private` collection

• **collection**: *[Collection](collection.md)*

*Defined in [lib/locators/byIndexWebElementLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L23)*

___

### `Private` index

• **index**: *number*

*Defined in [lib/locators/byIndexWebElementLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L22)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/byIndexWebElementLocator.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L28)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/byIndexWebElementLocator.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L39)*

**Returns:** *string*
