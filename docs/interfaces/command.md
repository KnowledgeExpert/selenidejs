[selenidejs](../README.md) > [Command](../interfaces/command.md)

# Interface: Command

## Type parameters
#### T :   [Driver](../classes/driver.md) &#124; [Element](../classes/element.md)

## Hierarchy

**Command**

## Implemented by

* [Click](../classes/click.md)
* [ClickByJs](../classes/clickbyjs.md)
* [ContextClick](../classes/contextclick.md)
* [DoubleClick](../classes/doubleclick.md)
* [Hover](../classes/hover.md)
* [PerformActionOnVisible](../classes/performactiononvisible.md)
* [PressKey](../classes/presskey.md)
* [ScrollIntoView](../classes/scrollintoview.md)
* [SendKeys](../classes/sendkeys.md)
* [SetValue](../classes/setvalue.md)
* [SetValueByJs](../classes/setvaluebyjs.md)

## Index

### Methods

* [perform](command.md#perform)

---

## Methods

<a id="perform"></a>

###  perform

▸ **perform**(entity: *`T`*, ...args: *`any`[]*):  `void` &#124; `Promise`<`void`>

*Defined in [commands/command.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/commands/command.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |
| `Rest` args | `any`[] |

**Returns:**  `void` &#124; `Promise`<`void`>

___

