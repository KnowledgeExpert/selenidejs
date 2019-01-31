[selenidejs](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [driver](configuration.md#driver)
* [fullPageScreenshot](configuration.md#fullpagescreenshot)
* [htmlPath](configuration.md#htmlpath)
* [onFailureHooks](configuration.md#onfailurehooks)
* [screenshotPath](configuration.md#screenshotpath)
* [timeout](configuration.md#timeout)
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

*Defined in [configuration.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` init | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Configuration](configuration.md)

___

## Properties

<a id="driver"></a>

###  driver

**● driver**: *`WebDriver`* =  null

*Defined in [configuration.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L34)*

___
<a id="fullpagescreenshot"></a>

###  fullPageScreenshot

**● fullPageScreenshot**: *`boolean`* = true

*Defined in [configuration.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L40)*

___
<a id="htmlpath"></a>

###  htmlPath

**● htmlPath**: *`string`* =  path.resolve('./htmls')

*Defined in [configuration.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L38)*

___
<a id="onfailurehooks"></a>

###  onFailureHooks

**● onFailureHooks**: *[OnFailureHook](../#onfailurehook)[]* =  [
        /*
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
        */
    ]

*Defined in [configuration.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L41)*

___
<a id="screenshotpath"></a>

###  screenshotPath

**● screenshotPath**: *`string`* =  path.resolve('./screenshots')

*Defined in [configuration.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L39)*

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`* = 4000

*Defined in [configuration.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L35)*

___
<a id="windowheight"></a>

###  windowHeight

**● windowHeight**: *`string`* = ""

*Defined in [configuration.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L37)*

___
<a id="windowwidth"></a>

###  windowWidth

**● windowWidth**: *`string`* = ""

*Defined in [configuration.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L36)*

___

## Methods

<a id="with"></a>

### `<Static>` with

▸ **with**(): [Customized](customized.md)<[Configuration](configuration.md)>

*Defined in [configuration.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L25)*

**Returns:** [Customized](customized.md)<[Configuration](configuration.md)>

___
<a id="withdriver"></a>

### `<Static>` withDriver

▸ **withDriver**(driver: *`WebDriver`*): [Customized](customized.md)<[Configuration](configuration.md)>

*Defined in [configuration.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |

**Returns:** [Customized](customized.md)<[Configuration](configuration.md)>

___

