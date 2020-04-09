[selenidejs](../README.md) › [FilteredByConditionWebElementsLocator](filteredbyconditionwebelementslocator.md)

# Class: FilteredByConditionWebElementsLocator

## Hierarchy

* **FilteredByConditionWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](filteredbyconditionwebelementslocator.md#constructor)

### Properties

* [collection](filteredbyconditionwebelementslocator.md#private-collection)
* [condition](filteredbyconditionwebelementslocator.md#private-condition)

### Methods

* [find](filteredbyconditionwebelementslocator.md#find)
* [toString](filteredbyconditionwebelementslocator.md#tostring)

## Constructors

###  constructor

\+ **new FilteredByConditionWebElementsLocator**(`condition`: [ElementCondition](../README.md#elementcondition), `collection`: [Collection](collection.md)): *[FilteredByConditionWebElementsLocator](filteredbyconditionwebelementslocator.md)*

*Defined in [lib/locators/filteredByConditionWebElementsLocator.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [ElementCondition](../README.md#elementcondition) |
`collection` | [Collection](collection.md) |

**Returns:** *[FilteredByConditionWebElementsLocator](filteredbyconditionwebelementslocator.md)*

## Properties

### `Private` collection

• **collection**: *[Collection](collection.md)*

*Defined in [lib/locators/filteredByConditionWebElementsLocator.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L24)*

___

### `Private` condition

• **condition**: *[ElementCondition](../README.md#elementcondition)*

*Defined in [lib/locators/filteredByConditionWebElementsLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L23)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/filteredByConditionWebElementsLocator.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L29)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/filteredByConditionWebElementsLocator.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L48)*

**Returns:** *string*
