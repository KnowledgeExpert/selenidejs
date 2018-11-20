[selenidejs](../README.md) > [ByIndexedWebElementLocator](../classes/byindexedwebelementlocator.md)

# Class: ByIndexedWebElementLocator

## Hierarchy

**ByIndexedWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)<`WebElement`>

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

*Defined in [locators/byIndexedWebElementLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L24)*

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

*Defined in [locators/byIndexedWebElementLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L24)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byIndexedWebElementLocator.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L31)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byIndexedWebElementLocator.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexedWebElementLocator.ts#L41)*

**Returns:** `string`

___

