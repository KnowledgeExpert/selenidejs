[selenidejs](../README.md) > [ByFilteredWebElementsLocator](../classes/byfilteredwebelementslocator.md)

# Class: ByFilteredWebElementsLocator

## Hierarchy

**ByFilteredWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)<`WebElement`[]>

## Index

### Constructors

* [constructor](byfilteredwebelementslocator.md#constructor)

### Properties

* [collection](byfilteredwebelementslocator.md#collection)
* [elementCondition](byfilteredwebelementslocator.md#elementcondition)

### Methods

* [find](byfilteredwebelementslocator.md#find)
* [toString](byfilteredwebelementslocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByFilteredWebElementsLocator**(condition: *[Condition](condition.md)<[Element](element.md)>*, collection: *[Collection](collection.md)*): [ByFilteredWebElementsLocator](byfilteredwebelementslocator.md)

*Defined in [locators/byFilteredWebElementsLocator.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |
| collection | [Collection](collection.md) |

**Returns:** [ByFilteredWebElementsLocator](byfilteredwebelementslocator.md)

___

## Properties

<a id="collection"></a>

### `<Private>` collection

**● collection**: *[Collection](collection.md)*

*Defined in [locators/byFilteredWebElementsLocator.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L25)*

___
<a id="elementcondition"></a>

### `<Private>` elementCondition

**● elementCondition**: *[Condition](condition.md)<[Element](element.md)>*

*Defined in [locators/byFilteredWebElementsLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L24)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byFilteredWebElementsLocator.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L32)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byFilteredWebElementsLocator.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byFilteredWebElementsLocator.ts#L46)*

**Returns:** `string`

___

