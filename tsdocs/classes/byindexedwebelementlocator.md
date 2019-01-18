[selenidejs](../README.md) > [ByIndexedWebElementLocator](../classes/byindexedwebelementlocator.md)

# Class: ByIndexedWebElementLocator

## Hierarchy

**ByIndexedWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>

## Index

### Constructors

* [constructor](byindexedwebelementlocator.md#constructor)

### Properties

* [collection](byindexedwebelementlocator.md#collection)
* [index](byindexedwebelementlocator.md#index)

### Methods

* [find](byindexedwebelementlocator.md#find)
* [toString](byindexedwebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByIndexedWebElementLocator**(index: *`number`*, collection: *[Collection](collection.md)*): [ByIndexedWebElementLocator](byindexedwebelementlocator.md)

*Defined in [locators/byIndexedWebElementLocator.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |
| collection | [Collection](collection.md) |

**Returns:** [ByIndexedWebElementLocator](byindexedwebelementlocator.md)

___

## Properties

<a id="collection"></a>

### `<Private>` collection

**● collection**: *[Collection](collection.md)*

*Defined in [locators/byIndexedWebElementLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L23)*

___
<a id="index"></a>

### `<Private>` index

**● index**: *`number`*

*Defined in [locators/byIndexedWebElementLocator.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L22)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byIndexedWebElementLocator.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L28)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byIndexedWebElementLocator.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L38)*

**Returns:** `string`

___

