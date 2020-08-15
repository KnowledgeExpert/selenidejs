[selenidejs](../README.md) › [Configuration](configuration.md)

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [baseUrl](configuration.md#baseurl)
* [driver](configuration.md#driver)
* [fullPageScreenshot](configuration.md#fullpagescreenshot)
* [setValueByJs](configuration.md#setvaluebyjs)
* [timeout](configuration.md#timeout)
* [typeByJs](configuration.md#typebyjs)
* [windowHeight](configuration.md#windowheight)
* [windowWidth](configuration.md#windowwidth)

### Methods

* [with](configuration.md#static-with)
* [withDriver](configuration.md#static-withdriver)

## Constructors

###  constructor

\+ **new Configuration**(`init?`: Partial‹[Configuration](configuration.md)›): *[Configuration](configuration.md)*

*Defined in [lib/configuration.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`init?` | Partial‹[Configuration](configuration.md)› |

**Returns:** *[Configuration](configuration.md)*

## Properties

###  baseUrl

• **baseUrl**: *string* = ""

*Defined in [lib/configuration.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L45)*

___

###  driver

• **driver**: *WebDriver* = null

*Defined in [lib/configuration.ts:43](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L43)*

___

###  fullPageScreenshot

• **fullPageScreenshot**: *boolean* = true

*Defined in [lib/configuration.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L52)*

___

###  setValueByJs

• **setValueByJs**: *boolean* = false

*Defined in [lib/configuration.ts:46](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L46)*

___

###  timeout

• **timeout**: *number* = 4000

*Defined in [lib/configuration.ts:44](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L44)*

___

###  typeByJs

• **typeByJs**: *boolean* = false

*Defined in [lib/configuration.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L47)*

___

###  windowHeight

• **windowHeight**: *string* = ""

*Defined in [lib/configuration.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L49)*

___

###  windowWidth

• **windowWidth**: *string* = ""

*Defined in [lib/configuration.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L48)*

## Methods

### `Static` with

▸ **with**(): *[Customized](customized.md)‹[Configuration](configuration.md)›*

*Defined in [lib/configuration.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L35)*

**Returns:** *[Customized](customized.md)‹[Configuration](configuration.md)›*

___

### `Static` withDriver

▸ **withDriver**(`driver`: WebDriver): *[Customized](customized.md)‹[Configuration](configuration.md)›*

*Defined in [lib/configuration.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | WebDriver |

**Returns:** *[Customized](customized.md)‹[Configuration](configuration.md)›*
