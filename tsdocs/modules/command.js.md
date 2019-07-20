> **[selenidejs](../README.md)**

[command](command.md) / [js](command.js.md) /

# Module: js

## Index

### Variables

* [click](command.js.md#const-click)
* [scrollIntoView](command.js.md#const-scrollintoview)

### Functions

* [clickWithOffset](command.js.md#const-clickwithoffset)
* [setValue](command.js.md#const-setvalue)
* [type](command.js.md#const-type)

## Variables

### `Const` click

• **click**: *`(Anonymous function)`* =  lambda('click by js', clickWithOffset(0, 0))

*Defined in [commands.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L47)*

___

### `Const` scrollIntoView

• **scrollIntoView**: *`(Anonymous function)`* =  lambda('scroll into view', async element =>
            element.executeScript(// todo: is ensuring visibility covered here?
                'return (function(element) { element.scrollIntoView(true); })(arguments[0]);'
            ))

*Defined in [commands.ts:86](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L86)*

## Functions

### `Const` clickWithOffset

▸ **clickWithOffset**(`xOffset`: number, `yOffset`: number): *`(Anonymous function)`*

*Defined in [commands.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`xOffset` | number |
`yOffset` | number |

**Returns:** *`(Anonymous function)`*

___

### `Const` setValue

▸ **setValue**(`value`: string | number): *`(Anonymous function)`*

*Defined in [commands.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string \| number |

**Returns:** *`(Anonymous function)`*

___

### `Const` type

▸ **type**(`keys`: string | number): *`(Anonymous function)`*

*Defined in [commands.ts:67](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string \| number |

**Returns:** *`(Anonymous function)`*