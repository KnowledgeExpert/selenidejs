[selenidejs](../README.md) > [query](../modules/query.md)

# Module: query

raw queries on actual element's webelement raw means - without any waiting...

all are implemented through element.getWebElement() e.g. element.getWebElement().getText over element.text() because element.text() already has waiting built in. this is needed, because these queries are used not only to build corresponding element methods with waiting built in but also for conditions...

hence, these functions are not supposed to be used in "perform/get" context: `element.click().then(query.element.text)` this query may fail if element was absent after click for some milliseconds... use the following alternative instead: `element.click().then(get.text)`

## Index

### Modules

* [browser](query.browser.md)
* [collection](query.collection.md)
* [element](query.element.md)

---

