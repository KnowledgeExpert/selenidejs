[selenidejs](../README.md) > [CashedWebElementLocator](../classes/cashedwebelementlocator.md)

# Class: CashedWebElementLocator

## Hierarchy

**CashedWebElementLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>

## Index

### Constructors

* [constructor](cashedwebelementlocator.md#constructor)

### Properties

* [cash](cashedwebelementlocator.md#cash)
* [description](cashedwebelementlocator.md#description)

### Methods

* [find](cashedwebelementlocator.md#find)
* [toString](cashedwebelementlocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CashedWebElementLocator**(cash: *`WebElement`*, description: *`string`*): [CashedWebElementLocator](cashedwebelementlocator.md)

*Defined in [locators/cashedWebElementLocator.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cash | `WebElement` |
| description | `string` |

**Returns:** [CashedWebElementLocator](cashedwebelementlocator.md)

___

## Properties

<a id="cash"></a>

### `<Private>` cash

**● cash**: *`WebElement`*

*Defined in [locators/cashedWebElementLocator.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L20)*

___
<a id="description"></a>

### `<Private>` description

**● description**: *`string`*

*Defined in [locators/cashedWebElementLocator.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L21)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/cashedWebElementLocator.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L25)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/cashedWebElementLocator.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/cashedWebElementLocator.ts#L29)*

**Returns:** `string`

___

