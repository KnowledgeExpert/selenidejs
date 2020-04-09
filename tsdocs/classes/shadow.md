[selenidejs](../README.md) › [Shadow](shadow.md)

# Class: Shadow

## Hierarchy

* **Shadow**

## Index

### Constructors

* [constructor](shadow.md#constructor)

### Properties

* [configuration](shadow.md#configuration)
* [context](shadow.md#private-context)

### Methods

* [all](shadow.md#all)
* [element](shadow.md#element)

## Constructors

###  constructor

\+ **new Shadow**(`context`: [Element](element.md), `configuration`: [Configuration](configuration.md)): *[Shadow](shadow.md)*

*Defined in [lib/shadow.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/shadow.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [Element](element.md) |
`configuration` | [Configuration](configuration.md) |

**Returns:** *[Shadow](shadow.md)*

## Properties

###  configuration

• **configuration**: *[Configuration](configuration.md)*

*Defined in [lib/shadow.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/shadow.ts#L26)*

___

### `Private` context

• **context**: *[Element](element.md)*

*Defined in [lib/shadow.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/shadow.ts#L26)*

## Methods

###  all

▸ **all**(`located`: string | By | object, `customized?`: Partial‹[Configuration](configuration.md)›): *[Collection](collection.md)*

*Defined in [lib/shadow.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/shadow.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`located` | string &#124; By &#124; object |
`customized?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Collection](collection.md)*

___

###  element

▸ **element**(`located`: string | By‹› | object, `customized?`: Partial‹[Configuration](configuration.md)›): *[Element](element.md)*

*Defined in [lib/shadow.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/shadow.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`located` | string &#124; By‹› &#124; object |
`customized?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Element](element.md)*
