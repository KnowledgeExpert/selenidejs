[selenidejs](../README.md) > [ElementWebElementsByLocator](../classes/elementwebelementsbylocator.md)

# Class: ElementWebElementsByLocator

## Hierarchy

**ElementWebElementsByLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>

## Index

### Constructors

* [constructor](elementwebelementsbylocator.md#constructor)

### Properties

* [by](elementwebelementsbylocator.md#by)
* [element](elementwebelementsbylocator.md#element)

### Methods

* [find](elementwebelementsbylocator.md#find)
* [toString](elementwebelementsbylocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ElementWebElementsByLocator**(by: *`By`*, element: *[Element](element.md)*): [ElementWebElementsByLocator](elementwebelementsbylocator.md)

*Defined in [locators/ElementWebElementsByLocator.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| element | [Element](element.md) |

**Returns:** [ElementWebElementsByLocator](elementwebelementsbylocator.md)

___

## Properties

<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/ElementWebElementsByLocator.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L22)*

___
<a id="element"></a>

### `<Private>` element

**● element**: *[Element](element.md)*

*Defined in [locators/ElementWebElementsByLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L23)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/ElementWebElementsByLocator.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L28)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/ElementWebElementsByLocator.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/ElementWebElementsByLocator.ts#L32)*

**Returns:** `string`

___

