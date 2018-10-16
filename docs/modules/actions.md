[selenidejs](../README.md) > [Actions](../modules/actions.md)

# Module: Actions

## Index

### Type aliases

* [BrowserData](actions.md#browserdata)
* [DriverAction](actions.md#driveraction)
* [ElementAction](actions.md#elementaction)

### Variables

* [pressEnter](actions.md#pressenter)
* [pressEscape](actions.md#pressescape)
* [pressTab](actions.md#presstab)

### Functions

* [acceptAlert](actions.md#acceptalert)
* [all](actions.md#all)
* [attribute](actions.md#attribute)
* [clearCacheAndCookies](actions.md#clearcacheandcookies)
* [click](actions.md#click)
* [clickByJs](actions.md#clickbyjs)
* [close](actions.md#close)
* [commonClick](actions.md#commonclick)
* [commonSetValue](actions.md#commonsetvalue)
* [contextClick](actions.md#contextclick)
* [createDriverAction](actions.md#createdriveraction)
* [createElementAction](actions.md#createelementaction)
* [createElementOnVisibleAction](actions.md#createelementonvisibleaction)
* [crop](actions.md#crop)
* [doubleClick](actions.md#doubleclick)
* [element](actions.md#element)
* [executeHooksOnDriverFailure](actions.md#executehooksondriverfailure)
* [executeHooksOnElementFailure](actions.md#executehooksonelementfailure)
* [executeScript](actions.md#executescript)
* [filtered](actions.md#filtered)
* [find](actions.md#find)
* [followingSibling](actions.md#followingsibling)
* [fullpageScreenshot](actions.md#fullpagescreenshot)
* [getBrowserData](actions.md#getbrowserdata)
* [getCurrentFrameWebElement](actions.md#getcurrentframewebelement)
* [hideScrollbars](actions.md#hidescrollbars)
* [hover](actions.md#hover)
* [nextTab](actions.md#nexttab)
* [nth](actions.md#nth)
* [open](actions.md#open)
* [pageSource](actions.md#pagesource)
* [parent](actions.md#parent)
* [performActionOnVisible](actions.md#performactiononvisible)
* [presence](actions.md#presence)
* [pressKey](actions.md#presskey)
* [previousTab](actions.md#previoustab)
* [quit](actions.md#quit)
* [refresh](actions.md#refresh)
* [resizeWindow](actions.md#resizewindow)
* [screenshot](actions.md#screenshot)
* [scrollTo](actions.md#scrollto)
* [scrollToNthScreen](actions.md#scrolltonthscreen)
* [sendKeys](actions.md#sendkeys)
* [setDocumentOverflow](actions.md#setdocumentoverflow)
* [setOverflow](actions.md#setoverflow)
* [setValue](actions.md#setvalue)
* [setValueByJs](actions.md#setvaluebyjs)
* [size](actions.md#size)
* [switchToDefaultFrame](actions.md#switchtodefaultframe)
* [switchToFrame](actions.md#switchtoframe)
* [switchToTab](actions.md#switchtotab)
* [tabs](actions.md#tabs)
* [takeScreenshotWithWait](actions.md#takescreenshotwithwait)
* [text](actions.md#text)
* [title](actions.md#title)
* [url](actions.md#url)
* [viewportScreenshot](actions.md#viewportscreenshot)
* [visibility](actions.md#visibility)

---

## Type aliases

<a id="browserdata"></a>

###  BrowserData

**Ƭ BrowserData**: *`object`*

*Defined in [actions.ts:383](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L383)*

#### Type declaration

 devicePixelRatio: `number`

 height: `number`

 innerHeight: `number`

 pageHeight: `number`

 pageWidth: `number`

 width: `number`

___
<a id="driveraction"></a>

###  DriverAction

**Ƭ DriverAction**: *`function`*

*Defined in [actions.ts:491](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L491)*

#### Type declaration
▸(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="elementaction"></a>

###  ElementAction

**Ƭ ElementAction**: *`function`*

*Defined in [actions.ts:490](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L490)*

#### Type declaration
▸(element: *[Element](../classes/element.md)*): `Promise`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___

## Variables

<a id="pressenter"></a>

### `<Const>` pressEnter

**● pressEnter**: *`(Anonymous function)`* =  pressKey(Key.ENTER)

*Defined in [actions.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L102)*

___
<a id="pressescape"></a>

### `<Const>` pressEscape

**● pressEscape**: *`(Anonymous function)`* =  pressKey(Key.ESCAPE)

*Defined in [actions.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L104)*

___
<a id="presstab"></a>

### `<Const>` pressTab

**● pressTab**: *`(Anonymous function)`* =  pressKey(Key.TAB)

*Defined in [actions.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L106)*

___

## Functions

<a id="acceptalert"></a>

### `<Const>` acceptAlert

▸ **acceptAlert**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:259](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L259)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): `(Anonymous function)`

*Defined in [actions.ts:203](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L203)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `(Anonymous function)`

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:178](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L178)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `(Anonymous function)`

___
<a id="clearcacheandcookies"></a>

### `<Const>` clearCacheAndCookies

▸ **clearCacheAndCookies**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:345](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L345)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="click"></a>

### `<Const>` click

▸ **click**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="clickbyjs"></a>

###  clickByJs

▸ **clickByJs**(element: *[Element](../classes/element.md)*): `Promise`<`any`>

*Defined in [actions.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___
<a id="close"></a>

###  close

▸ **close**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:359](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L359)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="commonclick"></a>

###  commonClick

▸ **commonClick**(element: *[Element](../classes/element.md)*): `Promise`<`any`>

*Defined in [actions.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___
<a id="commonsetvalue"></a>

###  commonSetValue

▸ **commonSetValue**(element: *[Element](../classes/element.md)*, value: * `string` &#124; `number`*): `Promise`<`any`>

*Defined in [actions.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`any`>

___
<a id="contextclick"></a>

### `<Const>` contextClick

▸ **contextClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="createdriveraction"></a>

###  createDriverAction

▸ **createDriverAction**(driver: *[Driver](../classes/driver.md)*, action: *[DriverAction](actions.md#driveraction)*): `Promise`<`any`>

*Defined in [actions.ts:510](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L510)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |
| action | [DriverAction](actions.md#driveraction) |

**Returns:** `Promise`<`any`>

___
<a id="createelementaction"></a>

###  createElementAction

▸ **createElementAction**(element: *[Element](../classes/element.md)*, action: *[ElementAction](actions.md#elementaction)*): `Promise`<`any`>

*Defined in [actions.ts:502](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L502)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| action | [ElementAction](actions.md#elementaction) |

**Returns:** `Promise`<`any`>

___
<a id="createelementonvisibleaction"></a>

###  createElementOnVisibleAction

▸ **createElementOnVisibleAction**(element: *[Element](../classes/element.md)*, action: *[ElementAction](actions.md#elementaction)*): `Promise`<`any`>

*Defined in [actions.ts:493](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L493)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| action | [ElementAction](actions.md#elementaction) |

**Returns:** `Promise`<`any`>

___
<a id="crop"></a>

###  crop

▸ **crop**(screenBuffer: *`Buffer`*, delta: *`number`*): `Promise`<`Buffer`>

*Defined in [actions.ts:482](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L482)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| screenBuffer | `Buffer` |
| delta | `number` |

**Returns:** `Promise`<`Buffer`>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): `(Anonymous function)`

*Defined in [actions.ts:194](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L194)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `(Anonymous function)`

___
<a id="executehooksondriverfailure"></a>

###  executeHooksOnDriverFailure

▸ **executeHooksOnDriverFailure**(driver: *[Driver](../classes/driver.md)*, error: *`Error`*): `Promise`<`void`>

*Defined in [actions.ts:544](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L544)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="executehooksonelementfailure"></a>

###  executeHooksOnElementFailure

▸ **executeHooksOnElementFailure**(element: *[Element](../classes/element.md)*, error: *`Error`*): `Promise`<`void`>

*Defined in [actions.ts:537](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L537)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `(Anonymous function)`

*Defined in [actions.ts:284](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L284)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `(Anonymous function)`

___
<a id="filtered"></a>

###  filtered

▸ **filtered**(condition: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>*): `(Anonymous function)`

*Defined in [actions.ts:212](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L212)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Element](../classes/element.md)> |

**Returns:** `(Anonymous function)`

___
<a id="find"></a>

###  find

▸ **find**(condition: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>*): `(Anonymous function)`

*Defined in [actions.ts:229](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L229)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Element](../classes/element.md)> |

**Returns:** `(Anonymous function)`

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:188](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L188)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** `(Anonymous function)`

___
<a id="fullpagescreenshot"></a>

###  fullpageScreenshot

▸ **fullpageScreenshot**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:392](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L392)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="getbrowserdata"></a>

###  getBrowserData

▸ **getBrowserData**(webdriver: *`WebDriver`*): `Promise`<[BrowserData](actions.md#browserdata)>

*Defined in [actions.ts:458](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L458)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<[BrowserData](actions.md#browserdata)>

___
<a id="getcurrentframewebelement"></a>

###  getCurrentFrameWebElement

▸ **getCurrentFrameWebElement**(webdriver: *`WebDriver`*): `Promise`<`WebElement`>

*Defined in [actions.ts:435](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L435)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`WebElement`>

___
<a id="hidescrollbars"></a>

###  hideScrollbars

▸ **hideScrollbars**(webdriver: *`WebDriver`*): `Promise`<`void`>

*Defined in [actions.ts:440](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L440)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`void`>

___
<a id="hover"></a>

###  hover

▸ **hover**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="nexttab"></a>

### `<Const>` nextTab

▸ **nextTab**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:300](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L300)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="nth"></a>

###  nth

▸ **nth**(index: *`number`*): `(Anonymous function)`

*Defined in [actions.ts:218](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L218)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `(Anonymous function)`

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:236](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L236)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `(Anonymous function)`

___
<a id="pagesource"></a>

### `<Const>` pageSource

▸ **pageSource**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:277](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L277)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="parent"></a>

### `<Const>` parent

▸ **parent**(element: *[Element](../classes/element.md)*): [Element](../classes/element.md)

*Defined in [actions.ts:184](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L184)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** [Element](../classes/element.md)

___
<a id="performactiononvisible"></a>

###  performActionOnVisible

▸ **performActionOnVisible**(element: *[Element](../classes/element.md)*, action: *[ElementAction](actions.md#elementaction)*): `Promise`<`any`>

*Defined in [actions.ts:520](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L520)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| action | [ElementAction](actions.md#elementaction) |

**Returns:** `Promise`<`any`>

___
<a id="presence"></a>

### `<Const>` presence

▸ **presence**(element: *[Element](../classes/element.md)*): `Promise`<`boolean`>

*Defined in [actions.ts:166](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L166)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="presskey"></a>

###  pressKey

▸ **pressKey**(key: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `(Anonymous function)`

___
<a id="previoustab"></a>

### `<Const>` previousTab

▸ **previousTab**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:311](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L311)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="quit"></a>

###  quit

▸ **quit**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:365](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L365)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="refresh"></a>

### `<Const>` refresh

▸ **refresh**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:252](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L252)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `(Anonymous function)`

*Defined in [actions.ts:244](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L244)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `(Anonymous function)`

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(driver: *[Driver](../classes/driver.md)*): `Promise`<`Buffer`>

*Defined in [actions.ts:371](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L371)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`Buffer`>

___
<a id="scrollto"></a>

###  scrollTo

▸ **scrollTo**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="scrolltonthscreen"></a>

###  scrollToNthScreen

▸ **scrollToNthScreen**(webdriver: *`WebDriver`*, browserData: *`any`*, index: *`number`*): `Promise`<`void`>

*Defined in [actions.ts:471](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L471)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |
| browserData | `any` |
| index | `number` |

**Returns:** `Promise`<`void`>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [actions.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="setdocumentoverflow"></a>

###  setDocumentOverflow

▸ **setDocumentOverflow**(webdriver: *`WebDriver`*, overflowValue?: *`string`*): `Promise`<`string`>

*Defined in [actions.ts:444](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L444)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| webdriver | `WebDriver` | - |
| `Default value` overflowValue | `string` | &quot;hidden&quot; |

**Returns:** `Promise`<`string`>

___
<a id="setoverflow"></a>

###  setOverflow

▸ **setOverflow**(webdriver: *`WebDriver`*, element: *`string`*, overflowValue: *`string`*): `Promise`<`string`>

*Defined in [actions.ts:448](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L448)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |
| element | `string` |
| overflowValue | `string` |

**Returns:** `Promise`<`string`>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [actions.ts:125](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="setvaluebyjs"></a>

###  setValueByJs

▸ **setValueByJs**(element: *[Element](../classes/element.md)*, value: * `string` &#124; `number`*): `Promise`<`any`>

*Defined in [actions.ts:139](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L139)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`any`>

___
<a id="size"></a>

### `<Const>` size

▸ **size**(collection: *[Collection](../classes/collection.md)*): `Promise`<`number`>

*Defined in [actions.ts:224](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L224)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| collection | [Collection](../classes/collection.md) |

**Returns:** `Promise`<`number`>

___
<a id="switchtodefaultframe"></a>

### `<Const>` switchToDefaultFrame

▸ **switchToDefaultFrame**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:339](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L339)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `(Anonymous function)`

*Defined in [actions.ts:329](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L329)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `(Anonymous function)`

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:321](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L321)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `(Anonymous function)`

___
<a id="tabs"></a>

### `<Const>` tabs

▸ **tabs**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:294](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L294)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="takescreenshotwithwait"></a>

###  takeScreenshotWithWait

▸ **takeScreenshotWithWait**(webdriver: *`WebDriver`*): `Promise`<`Buffer`>

*Defined in [actions.ts:476](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L476)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`Buffer`>

___
<a id="text"></a>

### `<Const>` text

▸ **text**(element: *[Element](../classes/element.md)*): `Promise`<`any`>

*Defined in [actions.ts:172](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L172)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___
<a id="title"></a>

### `<Const>` title

▸ **title**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:271](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L271)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="url"></a>

### `<Const>` url

▸ **url**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:265](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L265)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="viewportscreenshot"></a>

###  viewportScreenshot

▸ **viewportScreenshot**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:377](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L377)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="visibility"></a>

### `<Const>` visibility

▸ **visibility**(element: *[Element](../classes/element.md)*): `Promise`<`boolean`>

*Defined in [actions.ts:160](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`boolean`>

___

