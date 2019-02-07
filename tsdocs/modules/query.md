[selenidejs](../README.md) > [query](../modules/query.md)

# Module: query

Raw queries on actual element's webelement 'Raw' means - without any waiting...

All are implemented through element.getWebElement() e.g. element.getWebElement().getText over element.text() because element.text() already has waiting built in. this is needed, because these queries are used not only to build corresponding element methods with waiting built in but also for conditions...

Hence, these functions are not supposed to be used in "perform/get" context: `element.click().then(query.element.text)` this query may fail if element was absent after click for some milliseconds... use the following alternative instead: `element.click().then(get.text)`

Here, queries do not contain has* and is* queries, like hasText, or isVisible. User can use has* and is* conditions instead. Example: `if (element.matches(has.text('foo'))) { ... } We really don't need such has* or is* queries both here and built in the entity itself (like element.isVisible), because their use case is very rare. The user will mainly use steps (entity commands, like click) and assertions (entity should(condition)) in tests. And SelenideJs is a tests tool, not something else.

## Index

### Modules

* [browser](query.browser.md)
* [collection](query.collection.md)
* [element](query.element.md)

---

