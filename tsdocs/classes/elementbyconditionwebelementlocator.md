[selenidejs](../README.md) › [ElementByConditionWebElementLocator](elementbyconditionwebelementlocator.md)

# Class: ElementByConditionWebElementLocator

## Hierarchy

* **ElementByConditionWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](elementbyconditionwebelementlocator.md#constructor)

### Properties

* [collection](elementbyconditionwebelementlocator.md#private-collection)
* [condition](elementbyconditionwebelementlocator.md#private-condition)

### Methods

* [find](elementbyconditionwebelementlocator.md#find)
* [toString](elementbyconditionwebelementlocator.md#tostring)

## Constructors

###  constructor

\+ **new ElementByConditionWebElementLocator**(`condition`: [ElementCondition](../README.md#elementcondition), `collection`: [Collection](collection.md)): *[ElementByConditionWebElementLocator](elementbyconditionwebelementlocator.md)*

*Defined in [lib/locators/byConditionWebElementLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [ElementCondition](../README.md#elementcondition) |
`collection` | [Collection](collection.md) |

**Returns:** *[ElementByConditionWebElementLocator](elementbyconditionwebelementlocator.md)*

## Properties

### `Private` collection

• **collection**: *[Collection](collection.md)*

*Defined in [lib/locators/byConditionWebElementLocator.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L25)*

___

### `Private` condition

• **condition**: *[ElementCondition](../README.md#elementcondition)*

*Defined in [lib/locators/byConditionWebElementLocator.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L24)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/byConditionWebElementLocator.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L30)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/byConditionWebElementLocator.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L49)*

**Returns:** *string*
