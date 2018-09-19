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

* [index](byindexedwebelementlocator.md#index)
* [searchContext](byindexedwebelementlocator.md#searchcontext)

### Methods

* [find](byindexedwebelementlocator.md#find)
* [toString](byindexedwebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByIndexedWebElementLocator**(index: *`number`*, searchContext: *[Collection](collection.md)*): [ByIndexedWebElementLocator](byindexedwebelementlocator.md)

*Defined in [locators/byIndexedWebElementLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/locators/byIndexedWebElementLocator.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |
| searchContext | [Collection](collection.md) |

**Returns:** [ByIndexedWebElementLocator](byindexedwebelementlocator.md)

___

## Properties

<a id="index"></a>

### `<Private>` index

**● index**: *`number`*

*Defined in [locators/byIndexedWebElementLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/locators/byIndexedWebElementLocator.ts#L23)*

___
<a id="searchcontext"></a>

### `<Private>` searchContext

**● searchContext**: *[Collection](collection.md)*

*Defined in [locators/byIndexedWebElementLocator.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/locators/byIndexedWebElementLocator.ts#L22)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byIndexedWebElementLocator.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/locators/byIndexedWebElementLocator.ts#L30)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byIndexedWebElementLocator.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/locators/byIndexedWebElementLocator.ts#L38)*

**Returns:** `string`

___

