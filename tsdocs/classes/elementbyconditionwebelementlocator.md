[selenidejs](../README.md) > [ElementByConditionWebElementLocator](../classes/elementbyconditionwebelementlocator.md)

# Class: ElementByConditionWebElementLocator

## Hierarchy

**ElementByConditionWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>

## Index

### Constructors

* [constructor](elementbyconditionwebelementlocator.md#constructor)

### Properties

* [collection](elementbyconditionwebelementlocator.md#collection)
* [condition](elementbyconditionwebelementlocator.md#condition)

### Methods

* [find](elementbyconditionwebelementlocator.md#find)
* [toString](elementbyconditionwebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ElementByConditionWebElementLocator**(condition: *[ElementCondition](../#elementcondition)*, collection: *[Collection](collection.md)*): [ElementByConditionWebElementLocator](elementbyconditionwebelementlocator.md)

*Defined in [locators/byConditionWebElementLocator.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |
| collection | [Collection](collection.md) |

**Returns:** [ElementByConditionWebElementLocator](elementbyconditionwebelementlocator.md)

___

## Properties

<a id="collection"></a>

### `<Private>` collection

**● collection**: *[Collection](collection.md)*

*Defined in [locators/byConditionWebElementLocator.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L25)*

___
<a id="condition"></a>

### `<Private>` condition

**● condition**: *[ElementCondition](../#elementcondition)*

*Defined in [locators/byConditionWebElementLocator.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L24)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byConditionWebElementLocator.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L30)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byConditionWebElementLocator.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/byConditionWebElementLocator.ts#L49)*

**Returns:** `string`

___

