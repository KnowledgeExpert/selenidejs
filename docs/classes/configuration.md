[selenidejs](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [afterElementActionHooks](configuration.md#afterelementactionhooks)
* [beforeElementActionHooks](configuration.md#beforeelementactionhooks)
* [clickByJs](configuration.md#clickbyjs)
* [fullpageScreenshot](configuration.md#fullpagescreenshot)
* [htmlPath](configuration.md#htmlpath)
* [onCollectionFailureHooks](configuration.md#oncollectionfailurehooks)
* [onElementFailureHooks](configuration.md#onelementfailurehooks)
* [onFailureHooks](configuration.md#onfailurehooks)
* [screenshotPath](configuration.md#screenshotpath)
* [setValueByJs](configuration.md#setvaluebyjs)
* [timeout](configuration.md#timeout)
* [webdriver](configuration.md#webdriver)
* [windowHeight](configuration.md#windowheight)
* [windowWidth](configuration.md#windowwidth)
* [DEFAULT_HTML_PATH](configuration.md#default_html_path)
* [DEFAULT_ON_FAILURE_HOOKS](configuration.md#default_on_failure_hooks)
* [DEFAULT_SCREENSHOT_PATH](configuration.md#default_screenshot_path)

### Object literals

* [DEFAULT](configuration.md#default)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Configuration**(customConfiguration: *`any`*): [Configuration](configuration.md)

*Defined in [configuration.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customConfiguration | `any` |

**Returns:** [Configuration](configuration.md)

___

## Properties

<a id="afterelementactionhooks"></a>

### `<Optional>` afterElementActionHooks

**● afterElementActionHooks**: *[AfterElementActionHook](../#afterelementactionhook)[]*

*Defined in [configuration.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L62)*

___
<a id="beforeelementactionhooks"></a>

### `<Optional>` beforeElementActionHooks

**● beforeElementActionHooks**: *[BeforeElementActionHook](../#beforeelementactionhook)[]*

*Defined in [configuration.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L63)*

___
<a id="clickbyjs"></a>

### `<Optional>` clickByJs

**● clickByJs**: *`boolean`*

*Defined in [configuration.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L64)*

___
<a id="fullpagescreenshot"></a>

### `<Optional>` fullpageScreenshot

**● fullpageScreenshot**: *`boolean`*

*Defined in [configuration.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L65)*

___
<a id="htmlpath"></a>

### `<Optional>` htmlPath

**● htmlPath**: *`string`*

*Defined in [configuration.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L66)*

___
<a id="oncollectionfailurehooks"></a>

### `<Optional>` onCollectionFailureHooks

**● onCollectionFailureHooks**: *[OnCollectionFailureHook](../#oncollectionfailurehook)[]*

*Defined in [configuration.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L67)*

___
<a id="onelementfailurehooks"></a>

### `<Optional>` onElementFailureHooks

**● onElementFailureHooks**: *[OnElementFailureHook](../#onelementfailurehook)[]*

*Defined in [configuration.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L68)*

___
<a id="onfailurehooks"></a>

### `<Optional>` onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]*

*Defined in [configuration.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L69)*

___
<a id="screenshotpath"></a>

### `<Optional>` screenshotPath

**● screenshotPath**: *`string`*

*Defined in [configuration.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L70)*

___
<a id="setvaluebyjs"></a>

### `<Optional>` setValueByJs

**● setValueByJs**: *`boolean`*

*Defined in [configuration.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L71)*

___
<a id="timeout"></a>

### `<Optional>` timeout

**● timeout**: *`number`*

*Defined in [configuration.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L72)*

___
<a id="webdriver"></a>

### `<Optional>` webdriver

**● webdriver**: *`WebDriver`*

*Defined in [configuration.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L73)*

___
<a id="windowheight"></a>

### `<Optional>` windowHeight

**● windowHeight**: *`number`*

*Defined in [configuration.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L74)*

___
<a id="windowwidth"></a>

### `<Optional>` windowWidth

**● windowWidth**: *`number`*

*Defined in [configuration.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L75)*

___
<a id="default_html_path"></a>

### `<Static>` DEFAULT_HTML_PATH

**● DEFAULT_HTML_PATH**: *`string`* =  path.resolve('./htmls')

*Defined in [configuration.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L28)*

___
<a id="default_on_failure_hooks"></a>

### `<Static>` DEFAULT_ON_FAILURE_HOOKS

**● DEFAULT_ON_FAILURE_HOOKS**: *`(Anonymous function)`[]* =  [
        async(error: Error, driver: Driver) => {
            if (driver.configuration.screenshotPath) {
                const screenshotPath = await Utils.saveScreenshot(driver, driver.configuration.screenshotPath);
                error.message = `${error.message}\nSaved screenshot: ${screenshotPath}`;
            }
        },
        async(error: Error, driver: Driver) => {
            if (driver.configuration.htmlPath) {
                const htmlPath = await Utils.savePageSource(driver, driver.configuration.htmlPath);
                error.message = `${error.message}\nSaved html: ${htmlPath}`;
            }
        }
    ]

*Defined in [configuration.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L30)*

___
<a id="default_screenshot_path"></a>

### `<Static>` DEFAULT_SCREENSHOT_PATH

**● DEFAULT_SCREENSHOT_PATH**: *`string`* =  path.resolve('./screenshots')

*Defined in [configuration.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L29)*

___

## Object literals

<a id="default"></a>

### `<Static>` DEFAULT

**DEFAULT**: *`object`*

*Defined in [configuration.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L45)*

<a id="default.afterelementactionhooks-1"></a>

####  afterElementActionHooks

**● afterElementActionHooks**: *`undefined`[]* =  []

*Defined in [configuration.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L46)*

___
<a id="default.beforeelementactionhooks-1"></a>

####  beforeElementActionHooks

**● beforeElementActionHooks**: *`undefined`[]* =  []

*Defined in [configuration.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L47)*

___
<a id="default.clickbyjs-1"></a>

####  clickByJs

**● clickByJs**: *`false`* = false

*Defined in [configuration.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L48)*

___
<a id="default.fullpagescreenshot-1"></a>

####  fullpageScreenshot

**● fullpageScreenshot**: *`false`* = false

*Defined in [configuration.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L49)*

___
<a id="default.htmlpath-1"></a>

####  htmlPath

**● htmlPath**: *`string`* =  Configuration.DEFAULT_HTML_PATH

*Defined in [configuration.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L50)*

___
<a id="default.oncollectionfailurehooks-1"></a>

####  onCollectionFailureHooks

**● onCollectionFailureHooks**: *`undefined`[]* =  []

*Defined in [configuration.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L51)*

___
<a id="default.onelementfailurehooks-1"></a>

####  onElementFailureHooks

**● onElementFailureHooks**: *`undefined`[]* =  []

*Defined in [configuration.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L52)*

___
<a id="default.onfailurehooks-1"></a>

####  onFailureHooks

**● onFailureHooks**: *`(Anonymous function)`[]* =  Configuration.DEFAULT_ON_FAILURE_HOOKS

*Defined in [configuration.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L53)*

___
<a id="default.screenshotpath-1"></a>

####  screenshotPath

**● screenshotPath**: *`string`* =  Configuration.DEFAULT_SCREENSHOT_PATH

*Defined in [configuration.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L54)*

___
<a id="default.setvaluebyjs-1"></a>

####  setValueByJs

**● setValueByJs**: *`false`* = false

*Defined in [configuration.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L55)*

___
<a id="default.timeout-1"></a>

####  timeout

**● timeout**: *`number`* = 4000

*Defined in [configuration.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L56)*

___
<a id="default.webdriver-1"></a>

####  webdriver

**● webdriver**: *`null`* =  null

*Defined in [configuration.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L57)*

___
<a id="default.windowheight-1"></a>

####  windowHeight

**● windowHeight**: *`number`* = 480

*Defined in [configuration.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L58)*

___
<a id="default.windowwidth-1"></a>

####  windowWidth

**● windowWidth**: *`number`* = 640

*Defined in [configuration.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L59)*

___

___

