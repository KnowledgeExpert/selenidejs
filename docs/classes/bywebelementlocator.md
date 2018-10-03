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
* [searchContext](bywebelementlocator.md#searchcontext)

### Methods

* [find](bywebelementlocator.md#find)
* [toString](bywebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByWebElementLocator**(by: *`By`*, searchContext: * [Element](element.md) &#124; [Driver](driver.md)*): [ByWebElementLocator](bywebelementlocator.md)

*Defined in [locators/byWebElementLocator.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| searchContext |  [Element](element.md) &#124; [Driver](driver.md)|

**Returns:** [ByWebElementLocator](bywebelementlocator.md)

___

## Properties

<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/byWebElementLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L24)*

___
<a id="searchcontext"></a>

### `<Private>` searchContext

**● searchContext**: * [Element](element.md) &#124; [Driver](driver.md)
*

*Defined in [locators/byWebElementLocator.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L25)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byWebElementLocator.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L32)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byWebElementLocator.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementLocator.ts#L45)*

**Returns:** `string`

___

