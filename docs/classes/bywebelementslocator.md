[selenidejs](../README.md) > [ByWebElementsLocator](../classes/bywebelementslocator.md)

# Class: ByWebElementsLocator

## Hierarchy

**ByWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>

## Index

### Constructors

* [constructor](bywebelementslocator.md#constructor)

### Properties

* [by](bywebelementslocator.md#by)
* [searchContext](bywebelementslocator.md#searchcontext)

### Methods

* [find](bywebelementslocator.md#find)
* [toString](bywebelementslocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByWebElementsLocator**(by: *`By`*, searchContext: * [Element](element.md) &#124; [Driver](driver.md)*): [ByWebElementsLocator](bywebelementslocator.md)

*Defined in [locators/byWebElementsLocator.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| searchContext |  [Element](element.md) &#124; [Driver](driver.md)|

**Returns:** [ByWebElementsLocator](bywebelementslocator.md)

___

## Properties

<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/byWebElementsLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L24)*

___
<a id="searchcontext"></a>

### `<Private>` searchContext

**● searchContext**: * [Element](element.md) &#124; [Driver](driver.md)
*

*Defined in [locators/byWebElementsLocator.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L25)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byWebElementsLocator.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L32)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byWebElementsLocator.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L39)*

**Returns:** `string`

___

