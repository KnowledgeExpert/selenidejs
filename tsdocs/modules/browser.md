[selenidejs](../README.md) > [Browser](../modules/browser.md)

# Module: Browser

## Index

### Variables

* [configuration](browser.md#configuration)
* [driver](browser.md#driver)

### Functions

* [acceptAlert](browser.md#acceptalert)
* [actions](browser.md#actions)
* [all](browser.md#all)
* [clearCacheAndCookies](browser.md#clearcacheandcookies)
* [close](browser.md#close)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [getTabs](browser.md#gettabs)
* [is](browser.md#is)
* [isNot](browser.md#isnot)
* [nextTab](browser.md#nexttab)
* [open](browser.md#open)
* [pageSource](browser.md#pagesource)
* [previousTab](browser.md#previoustab)
* [quit](browser.md#quit)
* [refresh](browser.md#refresh)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [shouldNot](browser.md#shouldnot)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
* [switchToFrame](browser.md#switchtoframe)
* [switchToTab](browser.md#switchtotab)
* [title](browser.md#title)
* [url](browser.md#url)
* [wrapAll](browser.md#wrapall)
* [wrapElement](browser.md#wrapelement)

---

## Variables

<a id="configuration"></a>

### `<Const>` configuration

**● configuration**: *[Configuration](../classes/configuration.md)* =  driver.configuration

*Defined in [browser.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L25)*

___
<a id="driver"></a>

### `<Const>` driver

**● driver**: *[Driver](../classes/driver.md)* =  new Driver()

*Defined in [browser.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L24)*

___

## Functions

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L43)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [browser.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L67)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](../classes/collection.md)

*Defined in [browser.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](../classes/collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:134](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L134)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L31)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](../classes/element.md)

*Defined in [browser.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](../classes/element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`any`>

*Defined in [browser.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `Promise`<`any`>

___
<a id="gettabs"></a>

###  getTabs

▸ **getTabs**(): `Promise`<`any`>

*Defined in [browser.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L110)*

**Returns:** `Promise`<`any`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L99)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:114](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L114)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [browser.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L55)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:118](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L118)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L35)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L39)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(): `Promise`<`Buffer`>

*Defined in [browser.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L59)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:130](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L130)*

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:126](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [browser.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L51)*

**Returns:** `Promise`<`string`>

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [browser.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L47)*

**Returns:** `Promise`<`string`>

___
<a id="wrapall"></a>

###  wrapAll

▸ **wrapAll**(webelements: *`WebElement`[]*): [Collection](../classes/collection.md)

*Defined in [browser.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webelements | `WebElement`[] |

**Returns:** [Collection](../classes/collection.md)

___
<a id="wrapelement"></a>

###  wrapElement

▸ **wrapElement**(webelement: *`WebElement`*): [Element](../classes/element.md)

*Defined in [browser.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webelement | `WebElement` |

**Returns:** [Element](../classes/element.md)

___

