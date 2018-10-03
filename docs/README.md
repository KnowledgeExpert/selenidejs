
#  selenidejs

## Index

### Modules

* [Browser](modules/browser.md)
* [Conditions](modules/conditions.md)
* [Utils](modules/utils.md)
* [With](modules/with.md)
* [be](modules/be.md)
* [have](modules/have.md)

### Classes

* [ByFilteredWebElementsLocator](classes/byfilteredwebelementslocator.md)
* [ByIndexedWebElementLocator](classes/byindexedwebelementlocator.md)
* [ByWebElementLocator](classes/bywebelementlocator.md)
* [ByWebElementsLocator](classes/bywebelementslocator.md)
* [CannotPerformActionError](classes/cannotperformactionerror.md)
* [Click](classes/click.md)
* [ClickByJs](classes/clickbyjs.md)
* [Collection](classes/collection.md)
* [CollectionCondition](classes/collectioncondition.md)
* [Condition](classes/condition.md)
* [ConditionDoesNotMatchError](classes/conditiondoesnotmatcherror.md)
* [Configuration](classes/configuration.md)
* [ContextClick](classes/contextclick.md)
* [DoubleClick](classes/doubleclick.md)
* [Driver](classes/driver.md)
* [DriverCondition](classes/drivercondition.md)
* [Element](classes/element.md)
* [ElementCondition](classes/elementcondition.md)
* [FullpageScreenshot](classes/fullpagescreenshot.md)
* [Hover](classes/hover.md)
* [PerformActionOnVisible](classes/performactiononvisible.md)
* [PressKey](classes/presskey.md)
* [ScrollIntoView](classes/scrollintoview.md)
* [SendKeys](classes/sendkeys.md)
* [SetValue](classes/setvalue.md)
* [SetValueByJs](classes/setvaluebyjs.md)
* [Wait](classes/wait.md)

### Interfaces

* [Command](interfaces/command.md)
* [Locator](interfaces/locator.md)
* [Query](interfaces/query.md)

### Type aliases

* [AfterElementActionHook](#afterelementactionhook)
* [BeforeElementActionHook](#beforeelementactionhook)
* [BrowserData](#browserdata)
* [OnFailureHook](#onfailurehook)

### Variables

* [jimp](#jimp)

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
▸(actionError: *`Error`*, element: *[Element](classes/element.md)*, actionName: *`string`*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| actionError | `Error` |
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
<a id="browserdata"></a>

###  BrowserData

**Ƭ BrowserData**: *`object`*

*Defined in [queries/fullpageScreenshot.ts:154](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries/fullpageScreenshot.ts#L154)*

#### Type declaration

 devicePixelRatio: `number`

 height: `number`

 innerHeight: `number`

 pageHeight: `number`

 pageWidth: `number`

 width: `number`

___
<a id="onfailurehook"></a>

###  OnFailureHook

**Ƭ OnFailureHook**: *`function`*

*Defined in [hooks/onFailureHook.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/hooks/onFailureHook.ts#L21)*

#### Type declaration
▸<`T`>(lastError: *`Error`*, entity: *`T`*, condition?: *[Condition](classes/condition.md)<`T`>*):  `void` &#124; `Promise`<`void`>

**Type parameters:**

#### T :   [Driver](classes/driver.md) &#124; [Element](classes/element.md) &#124; [Collection](classes/collection.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| lastError | `Error` |
| entity | `T` |
| `Optional` condition | [Condition](classes/condition.md)<`T`> |

**Returns:**  `void` &#124; `Promise`<`void`>

___

## Variables

<a id="jimp"></a>

### `<Const>` jimp

**● jimp**: *`any`* =  require('jimp')

*Defined in [queries/fullpageScreenshot.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries/fullpageScreenshot.ts#L20)*

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

