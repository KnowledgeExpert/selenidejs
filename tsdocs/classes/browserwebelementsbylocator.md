[selenidejs](../README.md) > [BrowserWebElementsByLocator](../classes/browserwebelementsbylocator.md)

# Class: BrowserWebElementsByLocator

## Hierarchy

**BrowserWebElementsByLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>

## Index

### Constructors

* [constructor](browserwebelementsbylocator.md#constructor)

### Properties

* [browser](browserwebelementsbylocator.md#browser)
* [by](browserwebelementsbylocator.md#by)

### Methods

* [find](browserwebelementsbylocator.md#find)
* [toString](browserwebelementsbylocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BrowserWebElementsByLocator**(by: *`By`*, browser: *[Browser](browser.md)*): [BrowserWebElementsByLocator](browserwebelementsbylocator.md)

*Defined in [locators/BrowserWebElementsByLocator.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| browser | [Browser](browser.md) |

**Returns:** [BrowserWebElementsByLocator](browserwebelementsbylocator.md)

___

## Properties

<a id="browser"></a>

### `<Private>` browser

**● browser**: *[Browser](browser.md)*

*Defined in [locators/BrowserWebElementsByLocator.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L24)*

___
<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/BrowserWebElementsByLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L23)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/BrowserWebElementsByLocator.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L29)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/BrowserWebElementsByLocator.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/BrowserWebElementsByLocator.ts#L33)*

**Returns:** `string`

___

