
#  selenidejs

## Index

### Modules

* [Condition](modules/condition.md)
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
* [SlicedWebElementsLocator](classes/slicedwebelementslocator.md)
* [TimeoutError](classes/timeouterror.md)
* [Wait](classes/wait.md)

### Interfaces

* [Assertable](interfaces/assertable.md)
* [Locator](interfaces/locator.md)
* [Matchable](interfaces/matchable.md)

### Type aliases

* [BrowserCondition](#browsercondition)
* [CollectionCondition](#collectioncondition)
* [Command](#command)
* [ElementCondition](#elementcondition)
* [ElementQuery](#elementquery)
* [OnEntityFailureHook](#onentityfailurehook)
* [OnFailureHook](#onfailurehook)
* [Query](#query)

### Functions

* [lambda](#lambda)
* [toString](#tostring)

---

## Type aliases

<a id="browsercondition"></a>

###  BrowserCondition

**Ƭ BrowserCondition**: *[Condition](modules/condition.md)<[Browser](classes/browser.md)>*

*Defined in [conditions.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L27)*

___
<a id="collectioncondition"></a>

###  CollectionCondition

**Ƭ CollectionCondition**: *[Condition](modules/condition.md)<[Collection](classes/collection.md)>*

*Defined in [conditions.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L26)*

___
<a id="command"></a>

###  Command

**Ƭ Command**: *[Query](#query)<`T`, `void`>*

*Defined in [wait.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L32)*

Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T. Command can pass or fail with Error correspondingly.

___
<a id="elementcondition"></a>

###  ElementCondition

**Ƭ ElementCondition**: *[Condition](modules/condition.md)<[Element](classes/element.md)>*

*Defined in [conditions.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L25)*

___
<a id="elementquery"></a>

###  ElementQuery

**Ƭ ElementQuery**: *[Query](#query)<[Element](classes/element.md), `R`>*

*Defined in [queries.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L21)*

___
<a id="onentityfailurehook"></a>

###  OnEntityFailureHook

**Ƭ OnEntityFailureHook**: *[OnFailureHook](#onfailurehook)< [Browser](classes/browser.md) &#124; [Element](classes/element.md) &#124; [Collection](classes/collection.md)>*

*Defined in [configuration.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/configuration.ts#L31)*

A one place to configure everything. There is no separate Browser, Element or Collection configurations. All corresponding options live here, in Configuration.* It was implemented like this to stay KISS and simplify implementation. Enjoy;)

___
<a id="onfailurehook"></a>

###  OnFailureHook

**Ƭ OnFailureHook**: *`function`*

*Defined in [wait.ts:148](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L148)*

#### Type declaration
▸(failure: *`Error`*, entity: *`T`*): `Promise`< `void` &#124; `Error`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| failure | `Error` |
| entity | `T` |

**Returns:** `Promise`< `void` &#124; `Error`>

___
<a id="query"></a>

###  Query

**Ƭ Query**: *`function`*

*Defined in [wait.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L26)*

We use queries to perform an async query on entity of type T, i.e. get something from entity. So a query can pass and return something of type R or failed with Error correspondingly.

#### Type declaration
▸(entity: *`T`*): `Promise`<`R`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`R`>

___

## Functions

<a id="lambda"></a>

###  lambda

▸ **lambda**<`F`>(toString: *`string`*, fn: *`F`*): `F`

*Defined in [utils/index.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/index.ts#L17)*

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

*Defined in [utils/index.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/index.ts#L22)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| obj | `O` |

**Returns:** `string`

___

