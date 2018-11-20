[selenidejs](../README.md) > [HookExecutor](../classes/hookexecutor.md)

# Class: HookExecutor

## Type parameters
#### T 
## Hierarchy

**HookExecutor**

## Index

### Constructors

* [constructor](hookexecutor.md#constructor)

### Properties

* [configuration](hookexecutor.md#configuration)
* [driver](hookexecutor.md#driver)
* [entity](hookexecutor.md#entity)

### Methods

* [executeCommonOnFailureHooks](hookexecutor.md#executecommononfailurehooks)
* [executeOnCollectionFailureHooks](hookexecutor.md#executeoncollectionfailurehooks)
* [executeOnElementFailureHooks](hookexecutor.md#executeonelementfailurehooks)
* [executeOnEntityFailureHooks](hookexecutor.md#executeonentityfailurehooks)
* [executeOnFailureHooks](hookexecutor.md#executeonfailurehooks)
* [logFailedHook](hookexecutor.md#logfailedhook)
* [tryExecuteHook](hookexecutor.md#tryexecutehook)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HookExecutor**(driver: *[Driver](driver.md)*, entity: *`T`*): [HookExecutor](hookexecutor.md)

*Defined in [hooks/hookExecutor.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | [Driver](driver.md) |
| entity | `T` |

**Returns:** [HookExecutor](hookexecutor.md)

___

## Properties

<a id="configuration"></a>

### `<Private>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [hooks/hookExecutor.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L22)*

___
<a id="driver"></a>

### `<Private>` driver

**● driver**: *[Driver](driver.md)*

*Defined in [hooks/hookExecutor.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L21)*

___
<a id="entity"></a>

### `<Private>` entity

**● entity**: *`T`*

*Defined in [hooks/hookExecutor.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L23)*

___

## Methods

<a id="executecommononfailurehooks"></a>

### `<Private>` executeCommonOnFailureHooks

▸ **executeCommonOnFailureHooks**(error: *`Error`*): `Promise`<`void`>

*Defined in [hooks/hookExecutor.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="executeoncollectionfailurehooks"></a>

### `<Private>` executeOnCollectionFailureHooks

▸ **executeOnCollectionFailureHooks**(error: *`Error`*, collection: *[Collection](collection.md)*): `Promise`<`void`>

*Defined in [hooks/hookExecutor.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| collection | [Collection](collection.md) |

**Returns:** `Promise`<`void`>

___
<a id="executeonelementfailurehooks"></a>

### `<Private>` executeOnElementFailureHooks

▸ **executeOnElementFailureHooks**(error: *`Error`*, element: *[Element](element.md)*): `Promise`<`void`>

*Defined in [hooks/hookExecutor.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| element | [Element](element.md) |

**Returns:** `Promise`<`void`>

___
<a id="executeonentityfailurehooks"></a>

### `<Private>` executeOnEntityFailureHooks

▸ **executeOnEntityFailureHooks**(error: *`Error`*): `Promise`<`void`>

*Defined in [hooks/hookExecutor.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="executeonfailurehooks"></a>

###  executeOnFailureHooks

▸ **executeOnFailureHooks**(error: *`Error`*): `Promise`<`void`>

*Defined in [hooks/hookExecutor.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |

**Returns:** `Promise`<`void`>

___
<a id="logfailedhook"></a>

### `<Private>` logFailedHook

▸ **logFailedHook**(error: *`Error`*, hook: *`any`*): `void`

*Defined in [hooks/hookExecutor.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| hook | `any` |

**Returns:** `void`

___
<a id="tryexecutehook"></a>

### `<Private>` tryExecuteHook

▸ **tryExecuteHook**(hook: *`any`*, ...args: *`any`[]*): `Promise`<`void`>

*Defined in [hooks/hookExecutor.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/hookExecutor.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hook | `any` |
| `Rest` args | `any`[] |

**Returns:** `Promise`<`void`>

___

