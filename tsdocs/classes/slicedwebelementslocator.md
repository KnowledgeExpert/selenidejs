[selenidejs](../README.md) › [SlicedWebElementsLocator](slicedwebelementslocator.md)

# Class: SlicedWebElementsLocator

## Hierarchy

* **SlicedWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](slicedwebelementslocator.md#constructor)

### Properties

* [collection](slicedwebelementslocator.md#private-collection)
* [end](slicedwebelementslocator.md#private-end)
* [start](slicedwebelementslocator.md#private-start)

### Methods

* [find](slicedwebelementslocator.md#find)
* [toString](slicedwebelementslocator.md#tostring)

## Constructors

###  constructor

\+ **new SlicedWebElementsLocator**(`start`: number, `end`: number, `collection`: [Collection](collection.md)): *[SlicedWebElementsLocator](slicedwebelementslocator.md)*

*Defined in [lib/locators/slicedWebElementsLocator.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/slicedWebElementsLocator.ts#L21)*

Locates a slice in original collection webelements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The inclusive "start" index of webelements to be sliced. |
`end` | number | The exclusive "end" index of webelements to be sliced. |
`collection` | [Collection](collection.md) | Original collection to be sliced.  |

**Returns:** *[SlicedWebElementsLocator](slicedwebelementslocator.md)*

## Properties

### `Private` collection

• **collection**: *[Collection](collection.md)*

*Defined in [lib/locators/slicedWebElementsLocator.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/slicedWebElementsLocator.ts#L31)*

Original collection to be sliced.

___

### `Private` end

• **end**: *number*

*Defined in [lib/locators/slicedWebElementsLocator.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/slicedWebElementsLocator.ts#L30)*

The exclusive "end" index of webelements to be sliced.

___

### `Private` start

• **start**: *number*

*Defined in [lib/locators/slicedWebElementsLocator.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/slicedWebElementsLocator.ts#L29)*

The inclusive "start" index of webelements to be sliced.

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/slicedWebElementsLocator.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/slicedWebElementsLocator.ts#L37)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/slicedWebElementsLocator.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/slicedWebElementsLocator.ts#L41)*

**Returns:** *string*
