[selenidejs](../README.md) > [condition](../modules/condition.md)

# Module: condition

The list of predefined conditions for all type of entities:

*   condition.element.*
*   condition.collection.*
*   condition.browser.*

Can be used in the following way:

```
await browser.all('.google-result').should(condition.collection.have.size(10))
```

Yet there are more handy aliases in be.* and have.* namespaces:

```
await browser.all('.google-result').should(have.size(10))
```

All conditions (Condition) are just predicate-like functions on entity of corresponding type (T), with:

*   descriptive custom toString implementation
*   just passing (returning void) in case when the "predicate" version would return true
*   throwing Error in case when the "predicate" version would return false

The following example shows how a condition can be implemented:

```ts
export function hasText(expected: string): ElementCondition {
        const description = `has text: ${expected}`
        const condition = (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        }
        condition.toString = () => description;
        return condition;
    }
```

The code above can be simply refactored, by utilizing some function (let's call it lambda) that will automatically "describe" a passed function with provided description:

```ts
export function hasText(expected: string): ElementCondition {
        return lambda(`has text: ${expected}`, (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        });
    }
```

Or more concise by using arrow functions:

```ts
export const hasText = (expected: string): ElementCondition =>
        lambda(`has text: ${expected}`, (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        });
```

We can refactor the code above even more, if notice, that the actual condition reflects a simple rule:

*   throw error if actual value (returned from some query on element like "getting its text") does not satisfy the predicate (like includes expected text) If we abstract this "throw error if not predicate(actual)" into some function like throwIfNotActual, The code will become very concise and declarative:
    ```ts
    export const hasText = (expected: string): ElementCondition =>
          lambda(`has text: ${expected}`,
                 throwIfNotActual(query.text, predicate.includes(expected)));
    ```
    

This is how predefined in selenidejs conditions are implemented below.

Have fun;)

## Index

### Modules

* [browser](condition.browser.md)
* [collection](condition.collection.md)
* [element](condition.element.md)

### Functions

* [conditionFromAsyncQuery](condition.md#conditionfromasyncquery)
* [throwIfNot](condition.md#throwifnot)
* [throwIfNotActual](condition.md#throwifnotactual)

---

## Functions

<a id="conditionfromasyncquery"></a>

###  conditionFromAsyncQuery

▸ **conditionFromAsyncQuery**<`E`>(describedPredicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L131)*

**Type parameters:**

#### E 
**Parameters:**

| Param | Type |
| ------ | ------ |
| describedPredicate | `function` |

**Returns:** [Condition](condition.md)<`E`>

___
<a id="throwifnot"></a>

###  throwIfNot

▸ **throwIfNot**<`E`>(description: *`string`*, predicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L110)*

like conditionFromAsyncQuery but with custom description

**Type parameters:**

#### E 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| description | `string` |  - |
| predicate | `function` |  - |

**Returns:** [Condition](condition.md)<`E`>

___
<a id="throwifnotactual"></a>

###  throwIfNotActual

▸ **throwIfNotActual**<`E`,`A`>(query: *`function`*, predicate: *`function`*): [Condition](condition.md)<`E`>

*Defined in [conditions.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L122)*

Transforms an entity query compared through predicate - to Condition Example: throwIfNotActual(query.text, predicate.equals(text))

**Type parameters:**

#### E 
#### A 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | `function` |
| predicate | `function` |

**Returns:** [Condition](condition.md)<`E`>

___

