[selenidejs](../README.md) > [FilteredByConditionWebElementsLocator](../classes/filteredbyconditionwebelementslocator.md)

# Class: FilteredByConditionWebElementsLocator

## Hierarchy

**FilteredByConditionWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>

## Index

### Constructors

* [constructor](filteredbyconditionwebelementslocator.md#constructor)

### Properties

* [collection](filteredbyconditionwebelementslocator.md#collection)
* [condition](filteredbyconditionwebelementslocator.md#condition)

### Methods

* [find](filteredbyconditionwebelementslocator.md#find)
* [toString](filteredbyconditionwebelementslocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FilteredByConditionWebElementsLocator**(condition: *[ElementCondition](../#elementcondition)*, collection: *[Collection](collection.md)*): [FilteredByConditionWebElementsLocator](filteredbyconditionwebelementslocator.md)

*Defined in [locators/filteredByConditionWebElementsLocator.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |
| collection | [Collection](collection.md) |

**Returns:** [FilteredByConditionWebElementsLocator](filteredbyconditionwebelementslocator.md)

___

## Properties

<a id="collection"></a>

### `<Private>` collection

**● collection**: *[Collection](collection.md)*

*Defined in [locators/filteredByConditionWebElementsLocator.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L24)*

___
<a id="condition"></a>

### `<Private>` condition

**● condition**: *[ElementCondition](../#elementcondition)*

*Defined in [locators/filteredByConditionWebElementsLocator.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L23)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/filteredByConditionWebElementsLocator.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L29)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/filteredByConditionWebElementsLocator.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/filteredByConditionWebElementsLocator.ts#L48)*

**Returns:** `string`

___

