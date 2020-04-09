[selenidejs](../README.md) › [CollectedByLocator](collectedbylocator.md)

# Class: CollectedByLocator

## Hierarchy

* **CollectedByLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](collectedbylocator.md#constructor)

### Properties

* [collection](collectedbylocator.md#private-collection)
* [searchFunction](collectedbylocator.md#private-searchfunction)

### Methods

* [find](collectedbylocator.md#find)
* [toString](collectedbylocator.md#tostring)

## Constructors

###  constructor

\+ **new CollectedByLocator**(`searchFunction`: function, `collection`: [Collection](collection.md)): *[CollectedByLocator](collectedbylocator.md)*

*Defined in [lib/locators/collectedByLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/collectedByLocator.ts#L22)*

**Parameters:**

▪ **searchFunction**: *function*

▸ (`element`: [Element](element.md)): *[Element](element.md) | [Collection](collection.md)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |

▪ **collection**: *[Collection](collection.md)*

**Returns:** *[CollectedByLocator](collectedbylocator.md)*

## Properties

### `Private` collection

• **collection**: *[Collection](collection.md)*

*Defined in [lib/locators/collectedByLocator.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/collectedByLocator.ts#L26)*

___

### `Private` searchFunction

• **searchFunction**: *function*

*Defined in [lib/locators/collectedByLocator.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/collectedByLocator.ts#L25)*

#### Type declaration:

▸ (`element`: [Element](element.md)): *[Element](element.md) | [Collection](collection.md)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/collectedByLocator.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/collectedByLocator.ts#L32)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/collectedByLocator.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/collectedByLocator.ts#L54)*

**Returns:** *string*
