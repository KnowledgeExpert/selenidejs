[selenidejs](../README.md) > [perform](../modules/perform.md)

# Module: perform

## Index

### Modules

* [js](perform.js.md)

### Functions

* [clearLocalStorage](perform.md#clearlocalstorage)
* [clearSessionStorage](perform.md#clearsessionstorage)
* [click](perform.md#click)
* [closeCurrentTab](perform.md#closecurrenttab)
* [contextClick](perform.md#contextclick)
* [deleteCookies](perform.md#deletecookies)
* [doubleClick](perform.md#doubleclick)
* [executeScript](perform.md#executescript)
* [hover](perform.md#hover)
* [nextTab](perform.md#nexttab)
* [open](perform.md#open)
* [pressEnter](perform.md#pressenter)
* [pressEscape](perform.md#pressescape)
* [pressTab](perform.md#presstab)
* [previousTab](perform.md#previoustab)
* [quit](perform.md#quit)
* [refresh](perform.md#refresh)
* [resizeWindow](perform.md#resizewindow)
* [screenshot](perform.md#screenshot)
* [scrollIntoView](perform.md#scrollintoview)
* [setValue](perform.md#setvalue)
* [switchToDefaultFrame](perform.md#switchtodefaultframe)
* [switchToFrame](perform.md#switchtoframe)
* [type](perform.md#type)

---

## Functions

<a id="clearlocalstorage"></a>

### `<Const>` clearLocalStorage

▸ **clearLocalStorage**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="clearsessionstorage"></a>

### `<Const>` clearSessionStorage

▸ **clearSessionStorage**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="click"></a>

### `<Const>` click

▸ **click**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="closecurrenttab"></a>

### `<Const>` closeCurrentTab

▸ **closeCurrentTab**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="contextclick"></a>

### `<Const>` contextClick

▸ **contextClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="deletecookies"></a>

### `<Const>` deleteCookies

▸ **deleteCookies**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="doubleclick"></a>

### `<Const>` doubleClick

▸ **doubleClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="executescript"></a>

### `<Const>` executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:90](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `(Anonymous function)`

___
<a id="hover"></a>

### `<Const>` hover

▸ **hover**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="nexttab"></a>

### `<Const>` nextTab

▸ **nextTab**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="open"></a>

### `<Const>` open

▸ **open**(url: *`string`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `(Anonymous function)`

___
<a id="pressenter"></a>

### `<Const>` pressEnter

▸ **pressEnter**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="pressescape"></a>

### `<Const>` pressEscape

▸ **pressEscape**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="presstab"></a>

### `<Const>` pressTab

▸ **pressTab**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="previoustab"></a>

### `<Const>` previousTab

▸ **previousTab**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="quit"></a>

### `<Const>` quit

▸ **quit**(browser: *[Browser](../classes/browser.md)*): `Promise`<`void`>

*Defined in [support/commands/perform.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<`void`>

___
<a id="refresh"></a>

### `<Const>` refresh

▸ **refresh**(browser: *[Browser](../classes/browser.md)*): `Promise`<`void`>

*Defined in [support/commands/perform.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

### `<Const>` resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `(Anonymous function)`

___
<a id="screenshot"></a>

### `<Const>` screenshot

▸ **screenshot**(browser: *[Browser](../classes/browser.md)*): `Promise`<`Buffer`>

*Defined in [support/commands/perform.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<`Buffer`>

___
<a id="scrollintoview"></a>

### `<Const>` scrollIntoView

▸ **scrollIntoView**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="setvalue"></a>

### `<Const>` setValue

▸ **setValue**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="switchtodefaultframe"></a>

### `<Const>` switchToDefaultFrame

▸ **switchToDefaultFrame**(browser: *[Browser](../classes/browser.md)*): `Promise`<[Browser](../classes/browser.md)>

*Defined in [support/commands/perform.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `Promise`<[Browser](../classes/browser.md)>

___
<a id="switchtoframe"></a>

### `<Const>` switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `(Anonymous function)`

___
<a id="type"></a>

### `<Const>` type

▸ **type**(keys: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___

