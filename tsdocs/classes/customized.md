[selenidejs](../README.md) > [Customized](../classes/customized.md)

# Class: Customized

## Type parameters
#### T 
## Hierarchy

**Customized**

## Index

### Constructors

* [constructor](customized.md#constructor)

### Properties

* [configuration](customized.md#configuration)
* [customizedType](customized.md#customizedtype)

### Methods

* [baseUrl](customized.md#baseurl)
* [build](customized.md#build)
* [driver](customized.md#driver)
* [fullPageScreenshot](customized.md#fullpagescreenshot)
* [htmlPath](customized.md#htmlpath)
* [onFailureHooks](customized.md#onfailurehooks)
* [screenshotPath](customized.md#screenshotpath)
* [timeout](customized.md#timeout)
* [windowHeight](customized.md#windowheight)
* [windowWidth](customized.md#windowwidth)
* [browser](customized.md#browser)
* [configuration](customized.md#configuration-1)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Customized**(customizedType: *`any`*): [Customized](customized.md)

*Defined in [configuration.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customizedType | `any` |

**Returns:** [Customized](customized.md)

___

## Properties

<a id="configuration"></a>

### `<Private>` configuration

**● configuration**: *`Partial`<[Configuration](configuration.md)>*

*Defined in [configuration.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L83)*

___
<a id="customizedtype"></a>

### `<Private>` customizedType

**● customizedType**: *`any`*

*Defined in [configuration.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L86)*

___

## Methods

<a id="baseurl"></a>

###  baseUrl

▸ **baseUrl**(base: *`string`*): `this`

*Defined in [configuration.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| base | `string` |

**Returns:** `this`

___
<a id="build"></a>

###  build

▸ **build**(): `T`

*Defined in [configuration.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L91)*

**Returns:** `T`

___
<a id="driver"></a>

###  driver

▸ **driver**(webdriver: *`WebDriver`*): `this`

*Defined in [configuration.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `this`

___
<a id="fullpagescreenshot"></a>

###  fullPageScreenshot

▸ **fullPageScreenshot**(turnedOn: *`boolean`*): `this`

*Defined in [configuration.ts:130](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L130)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| turnedOn | `boolean` |

**Returns:** `this`

___
<a id="htmlpath"></a>

###  htmlPath

▸ **htmlPath**(path: *`string`*): `this`

*Defined in [configuration.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L120)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `this`

___
<a id="onfailurehooks"></a>

###  onFailureHooks

▸ **onFailureHooks**(hooks: *[OnFailureHook](../#onfailurehook)[]*): `this`

*Defined in [configuration.ts:135](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L135)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [OnFailureHook](../#onfailurehook)[] |

**Returns:** `this`

___
<a id="screenshotpath"></a>

###  screenshotPath

▸ **screenshotPath**(path: *`string`*): `this`

*Defined in [configuration.ts:125](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `this`

___
<a id="timeout"></a>

###  timeout

▸ **timeout**(milliseconds: *`number`*): `this`

*Defined in [configuration.ts:105](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L105)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `this`

___
<a id="windowheight"></a>

###  windowHeight

▸ **windowHeight**(value: *`string`*): `this`

*Defined in [configuration.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `this`

___
<a id="windowwidth"></a>

###  windowWidth

▸ **windowWidth**(value: *`string`*): `this`

*Defined in [configuration.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `this`

___
<a id="browser"></a>

### `<Static>` browser

▸ **browser**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [configuration.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L75)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="configuration-1"></a>

### `<Static>` configuration

▸ **configuration**(): [Customized](customized.md)<[Configuration](configuration.md)>

*Defined in [configuration.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L79)*

**Returns:** [Customized](customized.md)<[Configuration](configuration.md)>

___

