[selenidejs](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

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

* [with](configuration.md#with)
* [withDriver](configuration.md#withdriver)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Configuration**(init?: *`Partial`<[Configuration](configuration.md)>*): [Configuration](configuration.md)

*Defined in [configuration.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` init | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Configuration](configuration.md)

___

## Properties

<a id="baseurl"></a>

###  baseUrl

**● baseUrl**: *`string`* = ""

*Defined in [configuration.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L45)*

___
<a id="driver"></a>

###  driver

**● driver**: *`WebDriver`* =  null

*Defined in [configuration.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L43)*

___
<a id="fullpagescreenshot"></a>

###  fullPageScreenshot

**● fullPageScreenshot**: *`boolean`* = true

*Defined in [configuration.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L52)*

___
<a id="setvaluebyjs"></a>

###  setValueByJs

**● setValueByJs**: *`boolean`* = false

*Defined in [configuration.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L46)*

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`* = 4000

*Defined in [configuration.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L44)*

___
<a id="typebyjs"></a>

###  typeByJs

**● typeByJs**: *`boolean`* = false

*Defined in [configuration.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L47)*

___
<a id="windowheight"></a>

###  windowHeight

**● windowHeight**: *`string`* = ""

*Defined in [configuration.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L49)*

___
<a id="windowwidth"></a>

###  windowWidth

**● windowWidth**: *`string`* = ""

*Defined in [configuration.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L48)*

___

## Methods

<a id="with"></a>

### `<Static>` with

▸ **with**(): [Customized](customized.md)<[Configuration](configuration.md)>

*Defined in [configuration.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L35)*

**Returns:** [Customized](customized.md)<[Configuration](configuration.md)>

___
<a id="withdriver"></a>

### `<Static>` withDriver

▸ **withDriver**(driver: *`WebDriver`*): [Customized](customized.md)<[Configuration](configuration.md)>

*Defined in [configuration.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |

**Returns:** [Customized](customized.md)<[Configuration](configuration.md)>

___

