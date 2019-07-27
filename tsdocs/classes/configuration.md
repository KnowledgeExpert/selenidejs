> **[selenidejs](../README.md)**

[Configuration](configuration.md) /

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

\+ **new Configuration**(`init?`: `Partial<Configuration>`): *[Configuration](configuration.md)*

*Defined in [configuration.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`init?` | `Partial<Configuration>` |

**Returns:** *[Configuration](configuration.md)*

## Properties

###  baseUrl

• **baseUrl**: *string* = ""

*Defined in [configuration.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L45)*

___

###  driver

• **driver**: *`WebDriver`* =  null

*Defined in [configuration.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L43)*

___

###  fullPageScreenshot

• **fullPageScreenshot**: *boolean* = true

*Defined in [configuration.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L52)*

___

###  setValueByJs

• **setValueByJs**: *boolean* = false

*Defined in [configuration.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L46)*

___

###  timeout

• **timeout**: *number* = 4000

*Defined in [configuration.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L44)*

___

###  typeByJs

• **typeByJs**: *boolean* = false

*Defined in [configuration.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L47)*

___

###  windowHeight

• **windowHeight**: *string* = ""

*Defined in [configuration.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L49)*

___

###  windowWidth

• **windowWidth**: *string* = ""

*Defined in [configuration.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L48)*

## Methods

### `Static` with

▸ **with**(): *[Customized](customized.md)‹*[Configuration](configuration.md)*›*

*Defined in [configuration.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L35)*

**Returns:** *[Customized](customized.md)‹*[Configuration](configuration.md)*›*

___

### `Static` withDriver

▸ **withDriver**(`driver`: `WebDriver`): *[Customized](customized.md)‹*[Configuration](configuration.md)*›*

*Defined in [configuration.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | `WebDriver` |

**Returns:** *[Customized](customized.md)‹*[Configuration](configuration.md)*›*