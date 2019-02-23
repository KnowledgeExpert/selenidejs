[selenidejs](../README.md) > [ElementWebElementByLocator](../classes/elementwebelementbylocator.md)

# Class: ElementWebElementByLocator

## Hierarchy

**ElementWebElementByLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>

## Index

### Constructors

* [constructor](elementwebelementbylocator.md#constructor)

### Properties

* [by](elementwebelementbylocator.md#by)
* [element](elementwebelementbylocator.md#element)

### Methods

* [find](elementwebelementbylocator.md#find)
* [toString](elementwebelementbylocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ElementWebElementByLocator**(by: *`By`*, element: *[Element](element.md)*): [ElementWebElementByLocator](elementwebelementbylocator.md)

*Defined in [locators/ElementWebElementByLocator.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| element | [Element](element.md) |

**Returns:** [ElementWebElementByLocator](elementwebelementbylocator.md)

___

## Properties

<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/ElementWebElementByLocator.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L22)*

___
<a id="element"></a>

### `<Private>` element

**● element**: *[Element](element.md)*

*Defined in [locators/ElementWebElementByLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L23)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/ElementWebElementByLocator.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L28)*

**Returns:** `Promise`<`WebElement`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/ElementWebElementByLocator.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementByLocator.ts#L32)*

**Returns:** `string`

___

