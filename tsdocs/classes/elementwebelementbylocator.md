[selenidejs](../README.md) › [ElementWebElementByLocator](elementwebelementbylocator.md)

# Class: ElementWebElementByLocator

## Hierarchy

* **ElementWebElementByLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](elementwebelementbylocator.md#constructor)

### Properties

* [by](elementwebelementbylocator.md#private-by)
* [element](elementwebelementbylocator.md#private-element)

### Methods

* [find](elementwebelementbylocator.md#find)
* [toString](elementwebelementbylocator.md#tostring)

## Constructors

###  constructor

\+ **new ElementWebElementByLocator**(`by`: By, `element`: [Element](element.md)): *[ElementWebElementByLocator](elementwebelementbylocator.md)*

*Defined in [lib/locators/ElementWebElementByLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`by` | By |
`element` | [Element](element.md) |

**Returns:** *[ElementWebElementByLocator](elementwebelementbylocator.md)*

## Properties

### `Private` by

• **by**: *By*

*Defined in [lib/locators/ElementWebElementByLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L22)*

___

### `Private` element

• **element**: *[Element](element.md)*

*Defined in [lib/locators/ElementWebElementByLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L23)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/ElementWebElementByLocator.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L28)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/ElementWebElementByLocator.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L32)*

**Returns:** *string*
