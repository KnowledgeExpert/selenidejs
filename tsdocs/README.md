
#  selenidejs

## Index

### Modules

* [Actions](modules/actions.md)
* [Browser](modules/browser.md)
* [Conditions](modules/conditions.md)
* [ElementsBuilder](modules/elementsbuilder.md)
* [Utils](modules/utils.md)
* [With](modules/with.md)
* [be](modules/be.md)
* [have](modules/have.md)
* [perform](modules/perform.md)
* [take](modules/take.md)

### Classes

* [ActionError](classes/actionerror.md)
* [ByFilteredWebElementsLocator](classes/byfilteredwebelementslocator.md)
* [ByIndexedWebElementLocator](classes/byindexedwebelementlocator.md)
* [ByWebElementLocator](classes/bywebelementlocator.md)
* [ByWebElementsLocator](classes/bywebelementslocator.md)
* [Collection](classes/collection.md)
* [Condition](classes/condition.md)
* [ConditionDoesNotMatchError](classes/conditiondoesnotmatcherror.md)
* [Configuration](classes/configuration.md)
* [Driver](classes/driver.md)
* [Element](classes/element.md)
* [ElementNotFoundError](classes/elementnotfounderror.md)
* [HookExecutor](classes/hookexecutor.md)
* [TimeoutError](classes/timeouterror.md)
* [Wait](classes/wait.md)
* [WebElementLocator](classes/webelementlocator.md)
* [WebElementsLocator](classes/webelementslocator.md)

### Interfaces

* [Locator](interfaces/locator.md)
* [SearchContext](interfaces/searchcontext.md)

### Type aliases

* [AfterElementActionHook](#afterelementactionhook)
* [BeforeElementActionHook](#beforeelementactionhook)
* [OmitKey](#omitkey)
* [OnCollectionFailureHook](#oncollectionfailurehook)
* [OnElementFailureHook](#onelementfailurehook)
* [OnFailureHook](#onfailurehook)

### Variables

* [PublicCollection](#publiccollection)
* [PublicElement](#publicelement)

### Functions

* [ElementActionHooks](#elementactionhooks)
* [logFailedHook](#logfailedhook)
* [runAfterHooks](#runafterhooks)
* [runBeforeHooks](#runbeforehooks)

---

## Type aliases

<a id="afterelementactionhook"></a>

###  AfterElementActionHook

**Ƭ AfterElementActionHook**: *`function`*

*Defined in [hooks/afterElementActionHook.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/afterElementActionHook.ts#L17)*

#### Type declaration
▸(error: *`Error`*, element: *[Element](classes/element.md)*, actionName: *`string`*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| element | [Element](classes/element.md) |
| actionName | `string` |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="beforeelementactionhook"></a>

###  BeforeElementActionHook

**Ƭ BeforeElementActionHook**: *`function`*

*Defined in [hooks/beforeElementActionHook.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/beforeElementActionHook.ts#L17)*

#### Type declaration
▸(element: *[Element](classes/element.md)*, actionName: *`string`*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](classes/element.md) |
| actionName | `string` |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="omitkey"></a>

###  OmitKey

**Ƭ OmitKey**: *`Pick`<`T`, `Exclude`<`keyof T`, `K`>>*

*Defined in [index.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/index.ts#L17)*

___
<a id="oncollectionfailurehook"></a>

###  OnCollectionFailureHook

**Ƭ OnCollectionFailureHook**: *`function`*

*Defined in [hooks/onCollectionFailureHook.ts:18](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/onCollectionFailureHook.ts#L18)*

#### Type declaration
▸(error: *`Error`*, driver: *[Driver](classes/driver.md)*, collection: *[Collection](classes/collection.md)*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| driver | [Driver](classes/driver.md) |
| collection | [Collection](classes/collection.md) |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="onelementfailurehook"></a>

###  OnElementFailureHook

**Ƭ OnElementFailureHook**: *`function`*

*Defined in [hooks/onElementFailureHook.ts:18](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/onElementFailureHook.ts#L18)*

#### Type declaration
▸(error: *`Error`*, driver: *[Driver](classes/driver.md)*, element: *[Element](classes/element.md)*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| driver | [Driver](classes/driver.md) |
| element | [Element](classes/element.md) |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="onfailurehook"></a>

###  OnFailureHook

**Ƭ OnFailureHook**: *`function`*

*Defined in [hooks/onFailureHook.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/onFailureHook.ts#L17)*

#### Type declaration
▸(error: *`Error`*, driver: *[Driver](classes/driver.md)*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| driver | [Driver](classes/driver.md) |

**Returns:**  `void` &#124; `Promise`<`void`>

___

## Variables

<a id="publiccollection"></a>

### `<Const>` PublicCollection

**● PublicCollection**: *`object`* =  Collection as any as {new (): OmitKey<Collection, 'driver'>;}

*Defined in [index.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/index.ts#L24)*

#### Type declaration

 constructor : function
⊕ **new __type**(): [OmitKey](#omitkey)<[Collection](classes/collection.md), "driver">

*Defined in [index.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/index.ts#L24)*

**Returns:** [OmitKey](#omitkey)<[Collection](classes/collection.md), "driver">

___
<a id="publicelement"></a>

### `<Const>` PublicElement

**● PublicElement**: *`object`* =  Element as any as {new (): OmitKey<Element, 'driver'>;}

*Defined in [index.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/index.ts#L20)*

#### Type declaration

 constructor : function
⊕ **new __type**(): [OmitKey](#omitkey)<[Element](classes/element.md), "driver">

*Defined in [index.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/index.ts#L20)*

**Returns:** [OmitKey](#omitkey)<[Element](classes/element.md), "driver">

___

## Functions

<a id="elementactionhooks"></a>

###  ElementActionHooks

▸ **ElementActionHooks**(target: *`any`*, methodName: *`any`*, descriptor: *`PropertyDescriptor`*): `void`

*Defined in [hooks/elementActionHooks.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/elementActionHooks.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `any` |
| methodName | `any` |
| descriptor | `PropertyDescriptor` |

**Returns:** `void`

___
<a id="logfailedhook"></a>

###  logFailedHook

▸ **logFailedHook**(error: *`Error`*, actionName: *`string`*): `void`

*Defined in [hooks/elementActionHooks.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/elementActionHooks.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| actionName | `string` |

**Returns:** `void`

___
<a id="runafterhooks"></a>

###  runAfterHooks

▸ **runAfterHooks**(hooks: *[AfterElementActionHook](#afterelementactionhook)[]*, actionError: *`any`*, element: *`any`*, actionName: *`any`*): `Promise`<`void`>

*Defined in [hooks/elementActionHooks.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/elementActionHooks.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [AfterElementActionHook](#afterelementactionhook)[] |
| actionError | `any` |
| element | `any` |
| actionName | `any` |

**Returns:** `Promise`<`void`>

___
<a id="runbeforehooks"></a>

###  runBeforeHooks

▸ **runBeforeHooks**(hooks: *[BeforeElementActionHook](#beforeelementactionhook)[]*, element: *`any`*, actionName: *`any`*): `Promise`<`void`>

*Defined in [hooks/elementActionHooks.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/elementActionHooks.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [BeforeElementActionHook](#beforeelementactionhook)[] |
| element | `any` |
| actionName | `any` |

**Returns:** `Promise`<`void`>

___

