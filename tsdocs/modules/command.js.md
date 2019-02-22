[selenidejs](../README.md) > [command](../modules/command.md) > [js](../modules/command.js.md)

# Module: js

## Index

### Variables

* [click](command.js.md#click)
* [scrollIntoView](command.js.md#scrollintoview)

### Functions

* [clickWithOffset](command.js.md#clickwithoffset)
* [setValue](command.js.md#setvalue)
* [type](command.js.md#type)

---

## Variables

<a id="click"></a>

### `<Const>` click

**● click**: *`(Anonymous function)`* =  lambda('click by js', clickWithOffset(0, 0))

*Defined in [commands.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L47)*

___
<a id="scrollintoview"></a>

### `<Const>` scrollIntoView

**● scrollIntoView**: *`(Anonymous function)`* =  lambda('scroll into view', async element =>
            element.executeScript(// todo: is ensuring visibility covered here?
                'return (function(element) { element.scrollIntoView(true); })(arguments[0]);'
            ))

*Defined in [commands.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L86)*

___

## Functions

<a id="clickwithoffset"></a>

### `<Const>` clickWithOffset

▸ **clickWithOffset**(xOffset: *`number`*, yOffset: *`number`*): `(Anonymous function)`

*Defined in [commands.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| xOffset | `number` |
| yOffset | `number` |

**Returns:** `(Anonymous function)`

___
<a id="setvalue"></a>

### `<Const>` setValue

▸ **setValue**(value: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [commands.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___
<a id="type"></a>

### `<Const>` type

▸ **type**(keys: * `string` &#124; `number`*): `(Anonymous function)`

*Defined in [commands.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys |  `string` &#124; `number`|

**Returns:** `(Anonymous function)`

___

