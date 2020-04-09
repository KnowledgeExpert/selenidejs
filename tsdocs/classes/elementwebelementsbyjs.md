[selenidejs](../README.md) › [ElementWebElementsByJs](elementwebelementsbyjs.md)

# Class: ElementWebElementsByJs

## Hierarchy

* **ElementWebElementsByJs**

## Implements

* [Locator](../interfaces/locator.md)‹Promise‹WebElement[]››

## Index

### Constructors

* [constructor](elementwebelementsbyjs.md#constructor)

### Properties

* [args](elementwebelementsbyjs.md#private-args)
* [element](elementwebelementsbyjs.md#private-element)
* [script](elementwebelementsbyjs.md#private-script)

### Methods

* [find](elementwebelementsbyjs.md#find)
* [toString](elementwebelementsbyjs.md#tostring)

## Constructors

###  constructor

\+ **new ElementWebElementsByJs**(`element`: [Element](element.md), `script`: string | function, `args`: any[]): *[ElementWebElementsByJs](elementwebelementsbyjs.md)*

*Defined in [lib/locators/ElementWebElementsByJs.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByJs.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |
`script` | string &#124; function |
`args` | any[] |

**Returns:** *[ElementWebElementsByJs](elementwebelementsbyjs.md)*

## Properties

### `Private` args

• **args**: *any[]*

*Defined in [lib/locators/ElementWebElementsByJs.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByJs.ts#L25)*

___

### `Private` element

• **element**: *[Element](element.md)*

*Defined in [lib/locators/ElementWebElementsByJs.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByJs.ts#L23)*

___

### `Private` script

• **script**: *string | function*

*Defined in [lib/locators/ElementWebElementsByJs.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByJs.ts#L24)*

## Methods

###  find

▸ **find**(): *Promise‹WebElement[]›*

*Implementation of [Locator](../interfaces/locator.md)*

*Defined in [lib/locators/ElementWebElementsByJs.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByJs.ts#L32)*

**Returns:** *Promise‹WebElement[]›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/locators/ElementWebElementsByJs.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/locators/ElementWebElementsByJs.ts#L36)*

**Returns:** *string*
