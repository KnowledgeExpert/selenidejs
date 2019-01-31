[selenidejs](../README.md) > [command](../modules/command.md) > [element](../modules/command.element.md)

# Module: element

## Index

### Functions

* [click](command.element.md#click)
* [clickByJs](command.element.md#clickbyjs)
* [contextClick](command.element.md#contextclick)
* [doubleClick](command.element.md#doubleclick)
* [executeScript](command.element.md#executescript)
* [hover](command.element.md#hover)
* [pressEnter](command.element.md#pressenter)
* [pressEscape](command.element.md#pressescape)
* [pressTab](command.element.md#presstab)
* [scrollIntoView](command.element.md#scrollintoview)
* [sendKeys](command.element.md#sendkeys)
* [setValue](command.element.md#setvalue)
* [setValueByJs](command.element.md#setvaluebyjs)

---

## Functions

<a id="click"></a>

### `<Const>` click

▸ **click**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="clickbyjs"></a>

### `<Const>` clickByJs

▸ **clickByJs**(xOffset?: *`number`*, yOffset?: *`number`*): `(Anonymous function)`

*Defined in [commands.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L42)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` xOffset | `number` | 0 |
| `Default value` yOffset | `number` | 0 |

**Returns:** `(Anonymous function)`

___
<a id="contextclick"></a>

### `<Const>` contextClick

▸ **contextClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="doubleclick"></a>

### `<Const>` doubleClick

▸ **doubleClick**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="executescript"></a>

### `<Const>` executeScript

▸ **executeScript**(scriptOnThisWebElement: *`string`*, ...additionalArgs: *`any`[]*): `(Anonymous function)`

*Defined in [commands.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| scriptOnThisWebElement | `string` |
| `Rest` additionalArgs | `any`[] |

**Returns:** `(Anonymous function)`

___
<a id="hover"></a>

### `<Const>` hover

▸ **hover**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="pressenter"></a>

### `<Const>` pressEnter

▸ **pressEnter**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="pressescape"></a>

### `<Const>` pressEscape

▸ **pressEscape**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="presstab"></a>

### `<Const>` pressTab

▸ **pressTab**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="scrollintoview"></a>

### `<Const>` scrollIntoView

▸ **scrollIntoView**(element: *[Element](../classes/element.md)*): `Promise`<[Element](../classes/element.md)>

*Defined in [commands.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<[Element](../classes/element.md)>

___
<a id="sendkeys"></a>

### `<Const>` sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [commands.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="setvalue"></a>

### `<Const>` setValue

▸ **setValue**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [commands.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="setvaluebyjs"></a>

### `<Const>` setValueByJs

▸ **setValueByJs**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [commands.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___

