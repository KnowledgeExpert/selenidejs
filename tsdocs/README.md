
#  selenidejs

## Index

### Modules

* [Extensions](modules/extensions.md)
* [be](modules/be.md)
* [by](modules/by.md)
* [command](modules/command.md)
* [condition](modules/condition.md)
* [find](modules/find.md)
* [get](modules/get.md)
* [have](modules/have.md)
* [perform](modules/perform.md)
* [predicate](modules/predicate.md)
* [query](modules/query.md)
* [should](modules/should.md)

### Classes

* [Browser](classes/browser.md)
* [BrowserWebElementByLocator](classes/browserwebelementbylocator.md)
* [BrowserWebElementsByLocator](classes/browserwebelementsbylocator.md)
* [ByIndexWebElementLocator](classes/byindexwebelementlocator.md)
* [CannotPerformActionError](classes/cannotperformactionerror.md)
* [CashedWebElementLocator](classes/cashedwebelementlocator.md)
* [Collection](classes/collection.md)
* [Command](classes/command.md)
* [Condition](classes/condition.md)
* [ConditionNotMatchedError](classes/conditionnotmatchederror.md)
* [Configuration](classes/configuration.md)
* [Customized](classes/customized.md)
* [Element](classes/element.md)
* [ElementByConditionWebElementLocator](classes/elementbyconditionwebelementlocator.md)
* [ElementWebElementByLocator](classes/elementwebelementbylocator.md)
* [ElementWebElementsByLocator](classes/elementwebelementsbylocator.md)
* [Entity](classes/entity.md)
* [FailedToMatchConditionWithReasonError](classes/failedtomatchconditionwithreasonerror.md)
* [FilteredByConditionWebElementsLocator](classes/filteredbyconditionwebelementslocator.md)
* [Query](classes/query.md)
* [SlicedWebElementsLocator](classes/slicedwebelementslocator.md)
* [TimeoutError](classes/timeouterror.md)
* [Wait](classes/wait.md)

### Interfaces

* [Assertable](interfaces/assertable.md)
* [Fn](interfaces/fn.md)
* [Locator](interfaces/locator.md)
* [Matchable](interfaces/matchable.md)

### Type aliases

* [BrowserCondition](#browsercondition)
* [CollectionCondition](#collectioncondition)
* [ElementCondition](#elementcondition)
* [Lambda](#lambda)
* [OnEntityFailureHook](#onentityfailurehook)
* [OnFailureHook](#onfailurehook)

### Functions

* [lambda](#lambda)
* [toString](#tostring)

---

## Type aliases

<a id="browsercondition"></a>

###  BrowserCondition

**Ƭ BrowserCondition**: *[Condition](classes/condition.md)<[Browser](classes/browser.md)>*

*Defined in [conditions.ts:27](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L27)*

___
<a id="collectioncondition"></a>

###  CollectionCondition

**Ƭ CollectionCondition**: *[Condition](classes/condition.md)<[Collection](classes/collection.md)>*

*Defined in [conditions.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L26)*

___
<a id="elementcondition"></a>

###  ElementCondition

**Ƭ ElementCondition**: *[Condition](classes/condition.md)<[Element](classes/element.md)>*

*Defined in [conditions.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L25)*

___
<a id="lambda"></a>

###  Lambda

**Ƭ Lambda**: *`function`*

*Defined in [wait.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L24)*

Just a type alias to one-argument-async-function...

#### Type declaration
▸(entity: *`T`*): `Promise`<`R`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`R`>

___
<a id="onentityfailurehook"></a>

###  OnEntityFailureHook

**Ƭ OnEntityFailureHook**: *[OnFailureHook](#onfailurehook)< [Browser](classes/browser.md) &#124; [Element](classes/element.md) &#124; [Collection](classes/collection.md)>*

*Defined in [configuration.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L31)*

A one place to configure everything. There is no separate Browser, Element or Collection configurations. All corresponding options live here, in Configuration.* It was implemented like this to stay KISS and simplify implementation. Enjoy;)

___
<a id="onfailurehook"></a>

###  OnFailureHook

**Ƭ OnFailureHook**: *`function`*

*Defined in [wait.ts:198](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L198)*

#### Type declaration
▸(failure: *`Error`*, entity: *`T`*): `Promise`< `void` &#124; `Error`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| failure | `Error` |
| entity | `T` |

**Returns:** `Promise`< `void` &#124; `Error`>

___

## Functions

<a id="lambda"></a>

###  lambda

▸ **lambda**<`F`>(toString: *`string`*, fn: *`F`*): `F`

*Defined in [utils/index.ts:17](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/index.ts#L17)*

**Type parameters:**

#### F 
**Parameters:**

| Param | Type |
| ------ | ------ |
| toString | `string` |
| fn | `F` |

**Returns:** `F`

___
<a id="tostring"></a>

### `<Const>` toString

▸ **toString**<`O`>(obj: *`O`*): `string`

*Defined in [utils/index.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/index.ts#L22)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| obj | `O` |

**Returns:** `string`

___

