[selenidejs](../README.md) > [ByFilteredWebElementsLocator](../classes/byfilteredwebelementslocator.md)

# Class: ByFilteredWebElementsLocator

## Hierarchy

**ByFilteredWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>

## Index

### Constructors

* [constructor](byfilteredwebelementslocator.md#constructor)

### Properties

* [elementCondition](byfilteredwebelementslocator.md#elementcondition)
* [searchContext](byfilteredwebelementslocator.md#searchcontext)

### Methods

* [find](byfilteredwebelementslocator.md#find)
* [toString](byfilteredwebelementslocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByFilteredWebElementsLocator**(condition: *[ElementCondition](elementcondition.md)*, searchContext: *[Collection](collection.md)*): [ByFilteredWebElementsLocator](byfilteredwebelementslocator.md)

*Defined in [locators/byFilteredWebElementsLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |
| searchContext | [Collection](collection.md) |

**Returns:** [ByFilteredWebElementsLocator](byfilteredwebelementslocator.md)

___

## Properties

<a id="elementcondition"></a>

### `<Private>` elementCondition

**● elementCondition**: *[ElementCondition](elementcondition.md)*

*Defined in [locators/byFilteredWebElementsLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L23)*

___
<a id="searchcontext"></a>

### `<Private>` searchContext

**● searchContext**: *[Collection](collection.md)*

*Defined in [locators/byFilteredWebElementsLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L24)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byFilteredWebElementsLocator.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L31)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byFilteredWebElementsLocator.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L45)*

**Returns:** `string`

___

