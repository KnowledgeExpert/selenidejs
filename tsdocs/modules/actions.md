[selenidejs](../README.md) > [Actions](../modules/actions.md)

# Module: Actions

## Index

### Type aliases

* [BrowserData](actions.md#browserdata)
* [DriverCommand](actions.md#drivercommand)
* [DriverQuery](actions.md#driverquery)
* [ElementCommand](actions.md#elementcommand)
* [ElementQuery](actions.md#elementquery)

### Variables

* [pressEnter](actions.md#pressenter)
* [pressEscape](actions.md#pressescape)
* [pressTab](actions.md#presstab)

### Functions

* [acceptAlert](actions.md#acceptalert)
* [attribute](actions.md#attribute)
* [clearCacheAndCookies](actions.md#clearcacheandcookies)
* [click](actions.md#click)
* [clickByJs](actions.md#clickbyjs)
* [close](actions.md#close)
* [commonClick](actions.md#commonclick)
* [commonSetValue](actions.md#commonsetvalue)
* [contextClick](actions.md#contextclick)
* [createDriverCommand](actions.md#createdrivercommand)
* [createDriverQuery](actions.md#createdriverquery)
* [createElementOnVisibleCommand](actions.md#createelementonvisiblecommand)
* [createElementQuery](actions.md#createelementquery)
* [crop](actions.md#crop)
* [doubleClick](actions.md#doubleclick)
* [executeHooksOnDriverFailure](actions.md#executehooksondriverfailure)
* [executeHooksOnElementFailure](actions.md#executehooksonelementfailure)
* [executeScript](actions.md#executescript)
* [focused](actions.md#focused)
* [fullpageScreenshot](actions.md#fullpagescreenshot)
* [getBrowserData](actions.md#getbrowserdata)
* [getCurrentFrameWebElement](actions.md#getcurrentframewebelement)
* [hideScrollbars](actions.md#hidescrollbars)
* [hover](actions.md#hover)
* [nextTab](actions.md#nexttab)
* [open](actions.md#open)
* [pageSource](actions.md#pagesource)
* [performCommandOnVisible](actions.md#performcommandonvisible)
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

*Defined in [actions.ts:332](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L332)*

#### Type declaration

 devicePixelRatio: `number`

 height: `number`

 innerHeight: `number`

 pageHeight: `number`

 pageWidth: `number`

 width: `number`

___
<a id="drivercommand"></a>

###  DriverCommand

**Ƭ DriverCommand**: *`function`*

*Defined in [actions.ts:441](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L441)*

#### Type declaration
▸(driver: *[Driver](../classes/driver.md)*): `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`void`>

___
<a id="driverquery"></a>

###  DriverQuery

**Ƭ DriverQuery**: *`function`*

*Defined in [actions.ts:442](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L442)*

#### Type declaration
▸(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="elementcommand"></a>

###  ElementCommand

**Ƭ ElementCommand**: *`function`*

*Defined in [actions.ts:439](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L439)*

#### Type declaration
▸(element: *[Element](../classes/element.md)*, driver: *[Driver](../classes/driver.md)*): `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`void`>

___
<a id="elementquery"></a>

###  ElementQuery

**Ƭ ElementQuery**: *`function`*

*Defined in [actions.ts:440](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L440)*

#### Type declaration
▸(element: *[Element](../classes/element.md)*, driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___

## Variables

<a id="pressenter"></a>

### `<Const>` pressEnter

**● pressEnter**: *`(Anonymous function)`* =  pressKey(Key.ENTER)

*Defined in [actions.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L89)*

___
<a id="pressescape"></a>

### `<Const>` pressEscape

**● pressEscape**: *`(Anonymous function)`* =  pressKey(Key.ESCAPE)

*Defined in [actions.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L91)*

___
<a id="presstab"></a>

### `<Const>` pressTab

**● pressTab**: *`(Anonymous function)`* =  pressKey(Key.TAB)

*Defined in [actions.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L93)*

___

## Functions

<a id="acceptalert"></a>

### `<Const>` acceptAlert

▸ **acceptAlert**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:208](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L208)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:174](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L174)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `(Anonymous function)`

___
<a id="clearcacheandcookies"></a>

### `<Const>` clearCacheAndCookies

▸ **clearCacheAndCookies**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:294](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L294)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="click"></a>

### `<Const>` click

▸ **click**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="clickbyjs"></a>

###  clickByJs

▸ **clickByJs**(element: *[Element](../classes/element.md)*, driver: *[Driver](../classes/driver.md)*): `Promise`<`void`>

*Defined in [actions.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`void`>

___
<a id="close"></a>

###  close

▸ **close**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:308](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L308)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="commonclick"></a>

###  commonClick

▸ **commonClick**(element: *[Element](../classes/element.md)*): `Promise`<`void`>

*Defined in [actions.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`void`>

___
<a id="commonsetvalue"></a>

###  commonSetValue

▸ **commonSetValue**(element: *[Element](../classes/element.md)*, value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in [actions.ts:121](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L121)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`void`>

___
<a id="contextclick"></a>

### `<Const>` contextClick

▸ **contextClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="createdrivercommand"></a>

###  createDriverCommand

▸ **createDriverCommand**(driver: *[Driver](../classes/driver.md)*, command: *[DriverCommand](actions.md#drivercommand)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:461](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L461)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |
| command | [DriverCommand](actions.md#drivercommand) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="createdriverquery"></a>

###  createDriverQuery

▸ **createDriverQuery**(driver: *[Driver](../classes/driver.md)*, query: *[DriverQuery](actions.md#driverquery)*): `Promise`<`any`>

*Defined in [actions.ts:471](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L471)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |
| query | [DriverQuery](actions.md#driverquery) |

**Returns:** `Promise`<`any`>

___
<a id="createelementonvisiblecommand"></a>

###  createElementOnVisibleCommand

▸ **createElementOnVisibleCommand**(element: *[Element](../classes/element.md)*, command: *[ElementCommand](actions.md#elementcommand)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:444](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L444)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| command | [ElementCommand](actions.md#elementcommand) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="createelementquery"></a>

###  createElementQuery

▸ **createElementQuery**(element: *[Element](../classes/element.md)*, query: *[ElementQuery](actions.md#elementquery)*): `Promise`<`any`>

*Defined in [actions.ts:456](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L456)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| query | [ElementQuery](actions.md#elementquery) |

**Returns:** `Promise`<`any`>

___
<a id="crop"></a>

###  crop

▸ **crop**(screenBuffer: *`Buffer`*, delta: *`number`*): `Promise`<`Buffer`>

*Defined in [actions.ts:431](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L431)*

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

*Defined in [actions.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="executehooksondriverfailure"></a>

###  executeHooksOnDriverFailure

▸ **executeHooksOnDriverFailure**(driver: *[Driver](../classes/driver.md)*, error: *`Error`*): `Promise`<`void`>

*Defined in [actions.ts:497](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L497)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="executehooksonelementfailure"></a>

###  executeHooksOnElementFailure

▸ **executeHooksOnElementFailure**(element: *[Element](../classes/element.md)*, driver: *[Driver](../classes/driver.md)*, error: *`Error`*): `Promise`<`void`>

*Defined in [actions.ts:492](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L492)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| driver | [Driver](../classes/driver.md) |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `(Anonymous function)`

*Defined in [actions.ts:233](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L233)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `(Anonymous function)`

___
<a id="focused"></a>

### `<Const>` focused

▸ **focused**(element: *[Element](../classes/element.md)*): `Promise`<`boolean`>

*Defined in [actions.ts:157](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L157)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="fullpagescreenshot"></a>

###  fullpageScreenshot

▸ **fullpageScreenshot**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:341](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L341)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="getbrowserdata"></a>

###  getBrowserData

▸ **getBrowserData**(webdriver: *`WebDriver`*): `Promise`<[BrowserData](actions.md#browserdata)>

*Defined in [actions.ts:407](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L407)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<[BrowserData](actions.md#browserdata)>

___
<a id="getcurrentframewebelement"></a>

###  getCurrentFrameWebElement

▸ **getCurrentFrameWebElement**(webdriver: *`WebDriver`*): `Promise`<`WebElement`>

*Defined in [actions.ts:384](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L384)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`WebElement`>

___
<a id="hidescrollbars"></a>

###  hideScrollbars

▸ **hideScrollbars**(webdriver: *`WebDriver`*): `Promise`<`void`>

*Defined in [actions.ts:389](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L389)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`void`>

___
<a id="hover"></a>

###  hover

▸ **hover**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="nexttab"></a>

### `<Const>` nextTab

▸ **nextTab**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:249](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L249)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:185](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L185)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `(Anonymous function)`

___
<a id="pagesource"></a>

### `<Const>` pageSource

▸ **pageSource**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:226](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L226)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="performcommandonvisible"></a>

###  performCommandOnVisible

▸ **performCommandOnVisible**(element: *[Element](../classes/element.md)*, driver: *[Driver](../classes/driver.md)*, command: *[ElementCommand](actions.md#elementcommand)*): `Promise`<`any`>

*Defined in [actions.ts:475](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L475)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| driver | [Driver](../classes/driver.md) |
| command | [ElementCommand](actions.md#elementcommand) |

**Returns:** `Promise`<`any`>

___
<a id="presence"></a>

### `<Const>` presence

▸ **presence**(element: *[Element](../classes/element.md)*): `Promise`<`boolean`>

*Defined in [actions.ts:151](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L151)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="presskey"></a>

###  pressKey

▸ **pressKey**(key: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `(Anonymous function)`

___
<a id="previoustab"></a>

### `<Const>` previousTab

▸ **previousTab**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:260](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L260)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="quit"></a>

###  quit

▸ **quit**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:314](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L314)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="refresh"></a>

### `<Const>` refresh

▸ **refresh**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:201](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L201)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `(Anonymous function)`

*Defined in [actions.ts:193](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L193)*

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

*Defined in [actions.ts:320](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L320)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`Buffer`>

___
<a id="scrollto"></a>

###  scrollTo

▸ **scrollTo**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [actions.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="scrolltonthscreen"></a>

###  scrollToNthScreen

▸ **scrollToNthScreen**(webdriver: *`WebDriver`*, browserData: *`any`*, index: *`number`*): `Promise`<`void`>

*Defined in [actions.ts:420](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L420)*

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

*Defined in [actions.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="setdocumentoverflow"></a>

###  setDocumentOverflow

▸ **setDocumentOverflow**(webdriver: *`WebDriver`*, overflowValue?: *`string`*): `Promise`<`string`>

*Defined in [actions.ts:393](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L393)*

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

*Defined in [actions.ts:397](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L397)*

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

*Defined in [actions.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="setvaluebyjs"></a>

###  setValueByJs

▸ **setValueByJs**(element: *[Element](../classes/element.md)*, driver: *[Driver](../classes/driver.md)*, value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in [actions.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |
| driver | [Driver](../classes/driver.md) |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`void`>

___
<a id="size"></a>

### `<Const>` size

▸ **size**(collection: *[Collection](../classes/collection.md)*): `Promise`<`number`>

*Defined in [actions.ts:180](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L180)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| collection | [Collection](../classes/collection.md) |

**Returns:** `Promise`<`number`>

___
<a id="switchtodefaultframe"></a>

### `<Const>` switchToDefaultFrame

▸ **switchToDefaultFrame**(driver: *[Driver](../classes/driver.md)*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [actions.ts:288](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L288)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `(Anonymous function)`

*Defined in [actions.ts:278](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L278)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `(Anonymous function)`

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `(Anonymous function)`

*Defined in [actions.ts:270](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L270)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `(Anonymous function)`

___
<a id="tabs"></a>

### `<Const>` tabs

▸ **tabs**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:243](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L243)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="takescreenshotwithwait"></a>

###  takeScreenshotWithWait

▸ **takeScreenshotWithWait**(webdriver: *`WebDriver`*): `Promise`<`Buffer`>

*Defined in [actions.ts:425](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L425)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webdriver | `WebDriver` |

**Returns:** `Promise`<`Buffer`>

___
<a id="text"></a>

### `<Const>` text

▸ **text**(element: *[Element](../classes/element.md)*): `Promise`<`any`>

*Defined in [actions.ts:168](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L168)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___
<a id="title"></a>

### `<Const>` title

▸ **title**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:220](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L220)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="url"></a>

### `<Const>` url

▸ **url**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:214](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L214)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="viewportscreenshot"></a>

###  viewportScreenshot

▸ **viewportScreenshot**(driver: *[Driver](../classes/driver.md)*): `Promise`<`any`>

*Defined in [actions.ts:326](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L326)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](../classes/driver.md) |

**Returns:** `Promise`<`any`>

___
<a id="visibility"></a>

### `<Const>` visibility

▸ **visibility**(element: *[Element](../classes/element.md)*): `Promise`<`boolean`>

*Defined in [actions.ts:145](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/actions.ts#L145)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`boolean`>

___

