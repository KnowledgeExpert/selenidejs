[selenidejs](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [fullpageScreenshot](configuration.md#fullpagescreenshot)
* [hardTimeout](configuration.md#hardtimeout)
* [htmlPath](configuration.md#htmlpath)
* [onFailureHooks](configuration.md#onfailurehooks)
* [screenshotPath](configuration.md#screenshotpath)
* [timeout](configuration.md#timeout)
* [webdriver](configuration.md#webdriver)
* [windowHeight](configuration.md#windowheight)
* [windowWidth](configuration.md#windowwidth)

### Object literals

* [DEFAULT](configuration.md#default)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Configuration**(customConfiguration: *[Configuration](configuration.md)*): [Configuration](configuration.md)

*Defined in [configuration.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customConfiguration | [Configuration](configuration.md) |

**Returns:** [Configuration](configuration.md)

___

## Properties

<a id="fullpagescreenshot"></a>

###  fullpageScreenshot

**● fullpageScreenshot**: *`boolean`*

*Defined in [configuration.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L61)*

___
<a id="hardtimeout"></a>

###  hardTimeout

**● hardTimeout**: *`number`*

*Defined in [configuration.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L58)*

___
<a id="htmlpath"></a>

###  htmlPath

**● htmlPath**: *`string`*

*Defined in [configuration.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L55)*

___
<a id="onfailurehooks"></a>

###  onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]*

*Defined in [configuration.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L62)*

___
<a id="screenshotpath"></a>

###  screenshotPath

**● screenshotPath**: *`string`*

*Defined in [configuration.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L56)*

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`*

*Defined in [configuration.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L57)*

___
<a id="webdriver"></a>

###  webdriver

**● webdriver**: *`WebDriver`*

*Defined in [configuration.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L63)*

___
<a id="windowheight"></a>

###  windowHeight

**● windowHeight**: *`string`*

*Defined in [configuration.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L60)*

___
<a id="windowwidth"></a>

###  windowWidth

**● windowWidth**: *`string`*

*Defined in [configuration.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L59)*

___

## Object literals

<a id="default"></a>

### `<Static>` DEFAULT

**DEFAULT**: *`object`*

*Defined in [configuration.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L28)*

<a id="default.fullpagescreenshot-1"></a>

####  fullpageScreenshot

**● fullpageScreenshot**: *`true`* = true

*Defined in [configuration.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L29)*

___
<a id="default.hardtimeout-1"></a>

####  hardTimeout

**● hardTimeout**: *`number`* = 4000

*Defined in [configuration.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L30)*

___
<a id="default.htmlpath-1"></a>

####  htmlPath

**● htmlPath**: *`string`* =  path.resolve('./htmls')

*Defined in [configuration.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L31)*

___
<a id="default.onfailurehooks-1"></a>

####  onFailureHooks

**● onFailureHooks**: *`(Anonymous function)`[]* =  [
            async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
                const driver = Utils.getDriver(entity);
                if (driver.config.screenshotPath) {
                    const screenshotPath = await Utils.saveScreenshot(driver, Browser.config.screenshotPath);
                    lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
                }
            },
            async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
                const driver = Utils.getDriver(entity);
                if (driver.config.htmlPath) {
                    const htmlPath = await Utils.savePageSource(driver, Browser.config.htmlPath);
                    lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
                }
            }
        ]

*Defined in [configuration.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L32)*

___
<a id="default.screenshotpath-1"></a>

####  screenshotPath

**● screenshotPath**: *`string`* =  path.resolve('./screenshots')

*Defined in [configuration.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L48)*

___
<a id="default.timeout-1"></a>

####  timeout

**● timeout**: *`number`* = 4000

*Defined in [configuration.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L49)*

___
<a id="default.webdriver-1"></a>

####  webdriver

**● webdriver**: *`null`* =  null

*Defined in [configuration.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L50)*

___
<a id="default.windowheight-1"></a>

####  windowHeight

**● windowHeight**: *`string`* = ""

*Defined in [configuration.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L51)*

___
<a id="default.windowwidth-1"></a>

####  windowWidth

**● windowWidth**: *`string`* = ""

*Defined in [configuration.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/configuration.ts#L52)*

___

___

