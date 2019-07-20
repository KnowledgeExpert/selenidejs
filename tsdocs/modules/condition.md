> **[selenidejs](../README.md)**

[condition](condition.md) /

# Module: condition

The list of predefined conditions for all type of entities:
- condition.element.*
- condition.collection.*
- condition.browser.*

Can be used in the following way:
```
    await browser.all('.google-result').should(condition.collection.have.size(10))
```

Yet there are more handy aliases in be.* and have.* namespaces:
```
    await browser.all('.google-result').should(have.size(10))
```

All conditions (Condition<T>) are just predicate-like functions on entity of corresponding type (T),
wrapped into Condition object: `new Condition(description, predicateLikeFn)`
The "predicate-like" function should:
 - pass (returning void) in case when a "normal predicate" version would return true
 - throw Error in case when a "normal predicate"  would return false

The following example shows how a condition can be implemented:
```ts
    export function hasText(expected: string): ElementCondition {
        return new Condition(`has text: ${expected}`, async (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        })
    }
```

Or more concise by using arrow functions:
```ts
    export const hasText = (expected: string): ElementCondition =>
        new Condition(`has text: ${expected}`, async (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        });
```

We can refactor the code above even more, if notice,
that the actual condition reflects a simple rule:
- throw error if actual value (returned from some query on element like "getting its text")
  does not satisfy the predicate (like includes expected text)
If we abstract this "throw error if not predicate(actual)" into some function like throwIfNotActual,
The code will become very concise and declarative:
```ts
    export const hasText = (expected: string): ElementCondition =>
        new Condition(`has text: ${expected}`,
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

* [throwIfNot](condition.md#throwifnot)
* [throwIfNotActual](condition.md#throwifnotactual)

## Functions

###  throwIfNot

▸ **throwIfNot**<**E**>(`predicate`: function): *[Lambda](../README.md#lambda)‹*`E`*, *void*›*

*Defined in [conditions.ts:97](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L97)*

Creates condition from async query

**Type parameters:**

▪ **E**

**Parameters:**

▪ **predicate**: *function*

▸ (`entity`: `E`): *`Promise<boolean>`*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | `E` |

**Returns:** *[Lambda](../README.md#lambda)‹*`E`*, *void*›*

___

###  throwIfNotActual

▸ **throwIfNotActual**<**E**, **A**>(`query`: function, `predicate`: function): *[Lambda](../README.md#lambda)‹*`E`*, *void*›*

*Defined in [conditions.ts:109](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L109)*

Transforms an entity query compared through predicate - to Condition
Example: throwIfNotActual(query.text, predicate.equals(text))

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

▪ **query**: *function*

▸ (`entity`: `E`): *`Promise<A>`*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | `E` |

▪ **predicate**: *function*

▸ (`actual`: `A`): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`actual` | `A` |

**Returns:** *[Lambda](../README.md#lambda)‹*`E`*, *void*›*