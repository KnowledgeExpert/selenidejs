[selenidejs](../README.md) › [Customized](customized.md)

# Class: Customized <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Customized**

## Index

### Constructors

* [constructor](customized.md#private-constructor)

### Properties

* [configuration](customized.md#private-configuration)
* [customizedType](customized.md#private-customizedtype)

### Methods

* [baseUrl](customized.md#baseurl)
* [build](customized.md#build)
* [driver](customized.md#driver)
* [fullPageScreenshot](customized.md#fullpagescreenshot)
* [setValueByJs](customized.md#setvaluebyjs)
* [timeout](customized.md#timeout)
* [typeByJs](customized.md#typebyjs)
* [windowHeight](customized.md#windowheight)
* [windowWidth](customized.md#windowwidth)
* [browser](customized.md#static-browser)
* [configuration](customized.md#static-configuration)

## Constructors

### `Private` constructor

\+ **new Customized**(`customizedType`: any): *[Customized](customized.md)*

*Defined in [lib/configuration.ts:93](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`customizedType` | any |

**Returns:** *[Customized](customized.md)*

## Properties

### `Private` configuration

• **configuration**: *Partial‹[Configuration](configuration.md)›*

*Defined in [lib/configuration.ts:93](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L93)*

___

### `Private` customizedType

• **customizedType**: *any*

*Defined in [lib/configuration.ts:96](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L96)*

## Methods

###  baseUrl

▸ **baseUrl**(`base`: string): *this*

*Defined in [lib/configuration.ts:110](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |

**Returns:** *this*

___

###  build

▸ **build**(): *T*

*Defined in [lib/configuration.ts:101](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L101)*

**Returns:** *T*

___

###  driver

▸ **driver**(`webdriver`: WebDriver): *this*

*Defined in [lib/configuration.ts:105](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`webdriver` | WebDriver |

**Returns:** *this*

___

###  fullPageScreenshot

▸ **fullPageScreenshot**(`turnedOn`: boolean): *this*

*Defined in [lib/configuration.ts:150](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`turnedOn` | boolean |

**Returns:** *this*

___

###  setValueByJs

▸ **setValueByJs**(`value`: boolean): *this*

*Defined in [lib/configuration.ts:130](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *this*

___

###  timeout

▸ **timeout**(`milliseconds`: number): *this*

*Defined in [lib/configuration.ts:115](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`milliseconds` | number |

**Returns:** *this*

___

###  typeByJs

▸ **typeByJs**(`value`: boolean): *this*

*Defined in [lib/configuration.ts:135](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *this*

___

###  windowHeight

▸ **windowHeight**(`value`: string): *this*

*Defined in [lib/configuration.ts:125](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *this*

___

###  windowWidth

▸ **windowWidth**(`value`: string): *this*

*Defined in [lib/configuration.ts:120](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *this*

___

### `Static` browser

▸ **browser**(): *[Customized](customized.md)‹[Browser](browser.md)›*

*Defined in [lib/configuration.ts:85](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L85)*

**Returns:** *[Customized](customized.md)‹[Browser](browser.md)›*

___

### `Static` configuration

▸ **configuration**(): *[Customized](customized.md)‹[Configuration](configuration.md)›*

*Defined in [lib/configuration.ts:89](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L89)*

**Returns:** *[Customized](customized.md)‹[Configuration](configuration.md)›*
