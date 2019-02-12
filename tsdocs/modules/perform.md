[selenidejs](../README.md) > [perform](../modules/perform.md)

# Module: perform

## Index

### Functions

* [clearCacheAndCookies](perform.md#clearcacheandcookies)
* [click](perform.md#click)
* [clickByJs](perform.md#clickbyjs)
* [closeCurrentTab](perform.md#closecurrenttab)
* [contextClick](perform.md#contextclick)
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
* [resizeWindow](perform.md#resizewindow)
* [screenshot](perform.md#screenshot)
* [scrollIntoView](perform.md#scrollintoview)
* [sendKeys](perform.md#sendkeys)
* [setValue](perform.md#setvalue)
* [setValueByJs](perform.md#setvaluebyjs)
* [switchToDefaultFrame](perform.md#switchtodefaultframe)
* [switchToFrame](perform.md#switchtoframe)

---

## Functions

<a id="clearcacheandcookies"></a>

### `<Const>` clearCacheAndCookies

▸ **clearCacheAndCookies**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L71)*

**Returns:** `(Anonymous function)`

___
<a id="click"></a>

### `<Const>` click

▸ **click**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="clickbyjs"></a>

### `<Const>` clickByJs

▸ **clickByJs**(xOffset?: *`number`*, yOffset?: *`number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L29)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` xOffset | `number` | 0 |
| `Default value` yOffset | `number` | 0 |

**Returns:** `(Anonymous function)`

___
<a id="closecurrenttab"></a>

### `<Const>` closeCurrentTab

▸ **closeCurrentTab**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L64)*

**Returns:** `(Anonymous function)`

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

*Defined in [support/commands/perform.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L74)*

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

▸ **nextTab**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L66)*

**Returns:** `(Anonymous function)`

___
<a id="open"></a>

### `<Const>` open

▸ **open**(url: *`string`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `(Anonymous function)`

___
<a id="pressenter"></a>

### `<Const>` pressEnter

▸ **pressEnter**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="pressescape"></a>

### `<Const>` pressEscape

▸ **pressEscape**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="presstab"></a>

### `<Const>` pressTab

▸ **pressTab**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [support/commands/perform.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="previoustab"></a>

### `<Const>` previousTab

▸ **previousTab**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L67)*

**Returns:** `(Anonymous function)`

___
<a id="quit"></a>

### `<Const>` quit

▸ **quit**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L65)*

**Returns:** `(Anonymous function)`

___
<a id="resizewindow"></a>

### `<Const>` resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `(Anonymous function)`

___
<a id="screenshot"></a>

### `<Const>` screenshot

▸ **screenshot**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L63)*

**Returns:** `(Anonymous function)`

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
<a id="sendkeys"></a>

### `<Const>` sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

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
<a id="setvaluebyjs"></a>

### `<Const>` setValueByJs

▸ **setValueByJs**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="switchtodefaultframe"></a>

### `<Const>` switchToDefaultFrame

▸ **switchToDefaultFrame**(): `(Anonymous function)`

*Defined in [support/commands/perform.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L70)*

**Returns:** `(Anonymous function)`

___
<a id="switchtoframe"></a>

### `<Const>` switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `(Anonymous function)`

*Defined in [support/commands/perform.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `(Anonymous function)`

___

