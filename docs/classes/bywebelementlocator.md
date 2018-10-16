[selenidejs](../README.md) > [ByWebElementLocator](../classes/bywebelementlocator.md)

# Class: ByWebElementLocator

## Hierarchy

**ByWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>

## Index

### Constructors

* [constructor](bywebelementlocator.md#constructor)

### Properties

* [by](bywebelementlocator.md#by)
* [context](bywebelementlocator.md#context)

### Methods

* [find](bywebelementlocator.md#find)
* [toString](bywebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByWebElementLocator**(by: *`By`*, context: *[SearchContext](../interfaces/searchcontext.md)*): [ByWebElementLocator](bywebelementlocator.md)

*Defined in [locators/byWebElementLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| context | [SearchContext](../interfaces/searchcontext.md) |

**Returns:** [ByWebElementLocator](bywebelementlocator.md)

___

## Properties

<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/byWebElementLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L23)*

___
<a id="context"></a>

### `<Private>` context

**● context**: *[SearchContext](../interfaces/searchcontext.md)*

*Defined in [locators/byWebElementLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L24)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byWebElementLocator.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L31)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byWebElementLocator.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L41)*

**Returns:** `string`

___

