[selenidejs](../README.md) > [ClickByJs](../classes/clickbyjs.md)

# Class: ClickByJs

## Hierarchy

**ClickByJs**

## Implements

* [Command](../interfaces/command.md)<[Element](element.md)>

## Index

### Methods

* [perform](clickbyjs.md#perform)
* [getClickOnElementWithOffsetScript](clickbyjs.md#getclickonelementwithoffsetscript)

---

## Methods

<a id="perform"></a>

###  perform

▸ **perform**(entity: *[Element](element.md)*, ...args: *`any`[]*): `Promise`<`void`>

*Defined in [commands/clickByJs.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands/clickByJs.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | [Element](element.md) |
| `Rest` args | `any`[] |

**Returns:** `Promise`<`void`>

___
<a id="getclickonelementwithoffsetscript"></a>

### `<Static>` getClickOnElementWithOffsetScript

▸ **getClickOnElementWithOffsetScript**(offsetX: *`number`*, offsetY: *`number`*): `string`

*Defined in [commands/clickByJs.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/commands/clickByJs.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| offsetX | `number` |
| offsetY | `number` |

**Returns:** `string`

___

