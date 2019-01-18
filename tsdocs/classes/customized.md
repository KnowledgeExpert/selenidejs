[selenidejs](../README.md) > [Customized](../classes/customized.md)

# Class: Customized

## Hierarchy

**Customized**

## Index

### Constructors

* [constructor](customized.md#constructor)

### Properties

* [configuration](customized.md#configuration)
* [customizedType](customized.md#customizedtype)

### Methods

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

*Defined in [configuration.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L82)*

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

*Defined in [configuration.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L82)*

___
<a id="customizedtype"></a>

### `<Private>` customizedType

**● customizedType**: *`any`*

*Defined in [configuration.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L85)*

___

## Methods

<a id="build"></a>

###  build

▸ **build**(): `any`

*Defined in [configuration.ts:90](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L90)*

**Returns:** `any`

___
<a id="driver"></a>

###  driver

▸ **driver**(webdriver: *`WebDriver`*): `this`

*Defined in [configuration.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `this`

___
<a id="fullpagescreenshot"></a>

###  fullPageScreenshot

▸ **fullPageScreenshot**(turnedOn: *`boolean`*): `this`

*Defined in [configuration.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| turnedOn | `boolean` |

**Returns:** `this`

___
<a id="htmlpath"></a>

###  htmlPath

▸ **htmlPath**(path: *`string`*): `this`

*Defined in [configuration.ts:114](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L114)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `this`

___
<a id="onfailurehooks"></a>

###  onFailureHooks

▸ **onFailureHooks**(hooks: *[OnFailureHook](../#onfailurehook)[]*): `this`

*Defined in [configuration.ts:129](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [OnFailureHook](../#onfailurehook)[] |

**Returns:** `this`

___
<a id="screenshotpath"></a>

###  screenshotPath

▸ **screenshotPath**(path: *`string`*): `this`

*Defined in [configuration.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `this`

___
<a id="timeout"></a>

###  timeout

▸ **timeout**(milliseconds: *`number`*): `this`

*Defined in [configuration.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L99)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `this`

___
<a id="windowheight"></a>

###  windowHeight

▸ **windowHeight**(value: *`string`*): `this`

*Defined in [configuration.ts:109](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L109)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `this`

___
<a id="windowwidth"></a>

###  windowWidth

▸ **windowWidth**(value: *`string`*): `this`

*Defined in [configuration.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `this`

___
<a id="browser"></a>

### `<Static>` browser

▸ **browser**(): [Customized](customized.md)

*Defined in [configuration.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L74)*

**Returns:** [Customized](customized.md)

___
<a id="configuration-1"></a>

### `<Static>` configuration

▸ **configuration**(): [Customized](customized.md)

*Defined in [configuration.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L78)*

**Returns:** [Customized](customized.md)

___

