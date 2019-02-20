[selenidejs](../README.md) > [ByIndexWebElementLocator](../classes/byindexwebelementlocator.md)

# Class: ByIndexWebElementLocator

## Hierarchy

**ByIndexWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>

## Index

### Constructors

* [constructor](byindexwebelementlocator.md#constructor)

### Properties

* [collection](byindexwebelementlocator.md#collection)
* [index](byindexwebelementlocator.md#index)

### Methods

* [find](byindexwebelementlocator.md#find)
* [toString](byindexwebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByIndexWebElementLocator**(index: *`number`*, collection: *[Collection](collection.md)*): [ByIndexWebElementLocator](byindexwebelementlocator.md)

*Defined in [locators/byIndexWebElementLocator.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |
| collection | [Collection](collection.md) |

**Returns:** [ByIndexWebElementLocator](byindexwebelementlocator.md)

___

## Properties

<a id="collection"></a>

### `<Private>` collection

**● collection**: *[Collection](collection.md)*

*Defined in [locators/byIndexWebElementLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L23)*

___
<a id="index"></a>

### `<Private>` index

**● index**: *`number`*

*Defined in [locators/byIndexWebElementLocator.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L22)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byIndexWebElementLocator.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L28)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byIndexWebElementLocator.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byIndexWebElementLocator.ts#L39)*

**Returns:** `string`

___

