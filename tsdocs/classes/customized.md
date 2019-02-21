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
* [setValueByJs](customized.md#setvaluebyjs)
* [timeout](customized.md#timeout)
* [typeByJs](customized.md#typebyjs)
* [windowHeight](customized.md#windowheight)
* [windowWidth](customized.md#windowwidth)
* [browser](customized.md#browser)
* [configuration](customized.md#configuration-1)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Customized**(customizedType: *`any`*): [Customized](customized.md)

*Defined in [configuration.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L84)*

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

*Defined in [configuration.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L84)*

___
<a id="customizedtype"></a>

### `<Private>` customizedType

**● customizedType**: *`any`*

*Defined in [configuration.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L87)*

___

## Methods

<a id="baseurl"></a>

###  baseUrl

▸ **baseUrl**(base: *`string`*): `this`

*Defined in [configuration.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| base | `string` |

**Returns:** `this`

___
<a id="build"></a>

###  build

▸ **build**(): `T`

*Defined in [configuration.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L92)*

**Returns:** `T`

___
<a id="driver"></a>

###  driver

▸ **driver**(webdriver: *`WebDriver`*): `this`

*Defined in [configuration.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `this`

___
<a id="fullpagescreenshot"></a>

###  fullPageScreenshot

▸ **fullPageScreenshot**(turnedOn: *`boolean`*): `this`

*Defined in [configuration.ts:141](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L141)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| turnedOn | `boolean` |

**Returns:** `this`

___
<a id="htmlpath"></a>

###  htmlPath

▸ **htmlPath**(path: *`string`*): `this`

*Defined in [configuration.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `this`

___
<a id="onfailurehooks"></a>

###  onFailureHooks

▸ **onFailureHooks**(hooks: *[OnFailureHook](../#onfailurehook)[]*): `this`

*Defined in [configuration.ts:146](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L146)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [OnFailureHook](../#onfailurehook)[] |

**Returns:** `this`

___
<a id="screenshotpath"></a>

###  screenshotPath

▸ **screenshotPath**(path: *`string`*): `this`

*Defined in [configuration.ts:136](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L136)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `this`

___
<a id="setvaluebyjs"></a>

###  setValueByJs

▸ **setValueByJs**(value: *`boolean`*): `this`

*Defined in [configuration.ts:121](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L121)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `boolean` |

**Returns:** `this`

___
<a id="timeout"></a>

###  timeout

▸ **timeout**(milliseconds: *`number`*): `this`

*Defined in [configuration.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `this`

___
<a id="typebyjs"></a>

###  typeByJs

▸ **typeByJs**(value: *`boolean`*): `this`

*Defined in [configuration.ts:126](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `boolean` |

**Returns:** `this`

___
<a id="windowheight"></a>

###  windowHeight

▸ **windowHeight**(value: *`string`*): `this`

*Defined in [configuration.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `this`

___
<a id="windowwidth"></a>

###  windowWidth

▸ **windowWidth**(value: *`string`*): `this`

*Defined in [configuration.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `this`

___
<a id="browser"></a>

### `<Static>` browser

▸ **browser**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [configuration.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L76)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="configuration-1"></a>

### `<Static>` configuration

▸ **configuration**(): [Customized](customized.md)<[Configuration](configuration.md)>

*Defined in [configuration.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L80)*

**Returns:** [Customized](customized.md)<[Configuration](configuration.md)>

___

