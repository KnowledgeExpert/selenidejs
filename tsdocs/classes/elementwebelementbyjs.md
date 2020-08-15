[selenidejs](../README.md) › [ElementWebElementByJs](elementwebelementbyjs.md)

# Class: ElementWebElementByJs

## Hierarchy

* **ElementWebElementByJs**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement››

## Index

### Constructors

* [constructor](elementwebelementbyjs.md#constructor)

### Properties

* [args](elementwebelementbyjs.md#private-args)
* [element](elementwebelementbyjs.md#private-element)
* [script](elementwebelementbyjs.md#private-script)

### Methods

* [find](elementwebelementbyjs.md#find)
* [toString](elementwebelementbyjs.md#tostring)

## Constructors

###  constructor

\+ **new ElementWebElementByJs**(`element`: [Element](element.md), `script`: string | function, `args`: any[]): *[ElementWebElementByJs](elementwebelementbyjs.md)*

*Defined in [lib/locators/ElementWebElementByJs.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByJs.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |
`script` | string &#124; function |
`args` | any[] |

**Returns:** *[ElementWebElementByJs](elementwebelementbyjs.md)*

## Properties

### `Private` args

• **args**: *any[]*

*Defined in [lib/locators/ElementWebElementByJs.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByJs.ts#L25)*

___

### `Private` element

• **element**: *[Element](element.md)*

*Defined in [lib/locators/ElementWebElementByJs.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByJs.ts#L23)*

___

### `Private` script

• **script**: *string | function*

*Defined in [lib/locators/ElementWebElementByJs.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByJs.ts#L24)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/ElementWebElementByJs.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByJs.ts#L32)*

**Returns:** *Promise‹WebElement›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/ElementWebElementByJs.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementByJs.ts#L36)*

**Returns:** *string*
