[selenidejs](../README.md) › [ElementWebElementsByLocator](elementwebelementsbylocator.md)

# Class: ElementWebElementsByLocator

## Hierarchy

* **ElementWebElementsByLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](elementwebelementsbylocator.md#constructor)

### Properties

* [by](elementwebelementsbylocator.md#private-by)
* [element](elementwebelementsbylocator.md#private-element)

### Methods

* [find](elementwebelementsbylocator.md#find)
* [toString](elementwebelementsbylocator.md#tostring)

## Constructors

###  constructor

\+ **new ElementWebElementsByLocator**(`by`: By, `element`: [Element](element.md)): *[ElementWebElementsByLocator](elementwebelementsbylocator.md)*

*Defined in [lib/locators/ElementWebElementsByLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`by` | By |
`element` | [Element](element.md) |

**Returns:** *[ElementWebElementsByLocator](elementwebelementsbylocator.md)*

## Properties

### `Private` by

• **by**: *By*

*Defined in [lib/locators/ElementWebElementsByLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L22)*

___

### `Private` element

• **element**: *[Element](element.md)*

*Defined in [lib/locators/ElementWebElementsByLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L23)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/ElementWebElementsByLocator.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L28)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/ElementWebElementsByLocator.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L32)*

**Returns:** *string*
