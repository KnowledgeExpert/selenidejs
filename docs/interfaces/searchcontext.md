[selenidejs](../README.md) > [SearchContext](../interfaces/searchcontext.md)

# Interface: SearchContext

## Hierarchy

**SearchContext**

## Implemented by

* [Driver](../classes/driver.md)
* [Element](../classes/element.md)

## Index

### Methods

* [findElement](searchcontext.md#findelement)
* [findElements](searchcontext.md#findelements)

---

## Methods

<a id="findelement"></a>

###  findElement

▸ **findElement**(locator: *`By`*): `Promise`<`WebElement`>

*Defined in [locators/searchContext.ts:18](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/searchContext.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`>

___
<a id="findelements"></a>

###  findElements

▸ **findElements**(locator: *`By`*): `Promise`<`WebElement`[]>

*Defined in [locators/searchContext.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/searchContext.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`[]>

___

