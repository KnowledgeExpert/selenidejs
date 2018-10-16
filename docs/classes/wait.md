[selenidejs](../README.md) > [Wait](../classes/wait.md)

# Class: Wait

## Type parameters
#### T 
## Hierarchy

**Wait**

## Index

### Constructors

* [constructor](wait.md#constructor)

### Properties

* [configuration](wait.md#configuration)
* [entity](wait.md#entity)
* [hookExecutor](wait.md#hookexecutor)

### Methods

* [isMatch](wait.md#ismatch)
* [shouldMatch](wait.md#shouldmatch)
* [until](wait.md#until)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wait**(entity: *`T`*, configuration: *[Configuration](configuration.md)*, hookExecutor: *[HookExecutor](hookexecutor.md)<`T`>*): [Wait](wait.md)

*Defined in [wait.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |
| configuration | [Configuration](configuration.md) |
| hookExecutor | [HookExecutor](hookexecutor.md)<`T`> |

**Returns:** [Wait](wait.md)

___

## Properties

<a id="configuration"></a>

### `<Private>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [wait.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L26)*

___
<a id="entity"></a>

### `<Private>` entity

**● entity**: *`T`*

*Defined in [wait.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L25)*

___
<a id="hookexecutor"></a>

### `<Private>` hookExecutor

**● hookExecutor**: *[HookExecutor](hookexecutor.md)<`T`>*

*Defined in [wait.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L27)*

___

## Methods

<a id="ismatch"></a>

###  isMatch

▸ **isMatch**(condition: *[Condition](condition.md)<`T`>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [wait.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L45)*

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

*Defined in [wait.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L35)*

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

*Defined in [wait.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |
| timeout | `number` |

**Returns:** `Promise`<`T`>

___

