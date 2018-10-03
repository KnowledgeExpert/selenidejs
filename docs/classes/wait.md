[selenidejs](../README.md) > [Wait](../classes/wait.md)

# Class: Wait

## Type parameters
#### T :   [Driver](driver.md) &#124; [Element](element.md) &#124; [Collection](collection.md)

## Hierarchy

**Wait**

## Index

### Constructors

* [constructor](wait.md#constructor)

### Properties

* [configuration](wait.md#configuration)
* [entity](wait.md#entity)

### Methods

* [isMatch](wait.md#ismatch)
* [shouldMatch](wait.md#shouldmatch)
* [until](wait.md#until)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wait**(entity: *`T`*, config: *[Configuration](configuration.md)*): [Wait](wait.md)

*Defined in [wait.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |
| config | [Configuration](configuration.md) |

**Returns:** [Wait](wait.md)

___

## Properties

<a id="configuration"></a>

###  configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [wait.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L24)*

___
<a id="entity"></a>

###  entity

**● entity**: *`T`*

*Defined in [wait.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L25)*

___

## Methods

<a id="ismatch"></a>

###  isMatch

▸ **isMatch**(condition: *[Condition](condition.md)<`T`>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [wait.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L36)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [Condition](condition.md)<`T`> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___
<a id="shouldmatch"></a>

###  shouldMatch

▸ **shouldMatch**(condition: *[Condition](condition.md)<`T`>*, timeout?: *`number`*): `Promise`<`T`>

*Defined in [wait.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L32)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [Condition](condition.md)<`T`> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`T`>

___
<a id="until"></a>

### `<Private>` until

▸ **until**(condition: *[Condition](condition.md)<`T`>*, timeout: *`number`*): `Promise`<`T`>

*Defined in [wait.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |
| timeout | `number` |

**Returns:** `Promise`<`T`>

___

