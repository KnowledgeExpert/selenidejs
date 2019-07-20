# Changelog

## 1.2.0 (in progress)

### BREAKING CHANGEs
  * removed 
    * `Browser.drivedBy` (see [#88](https://github.com/KnowledgeExpert/selenidejs/issues/88))
    * (see [#92](https://github.com/KnowledgeExpert/selenidejs/issues/92))
      * `wait.untilNot`
      * `entity.*Not` 
        * like `element.shouldNot`, etc.
        * use now something like `element.should(be.not.*)` instead
  * changed
    * (see [#92](https://github.com/KnowledgeExpert/selenidejs/issues/92))
      * refactored conditions to be object-based over function-based (should not break anything actually, if you have not created your own conditions...)
      * `wait.until` now accepts only one argument (no varargs anymore)
      
### New Features

  * added `condition.or` and `condition.and` (see [#92](https://github.com/KnowledgeExpert/selenidejs/issues/92))
    * example: `elements.filteredBy(have.cssClass('green').or(have.cssClass('red')))`
  * added `be.not.*` and `have.no.*`
    * example: 
      * `element.should(be.not.visible)`
      * `element.should(have.no.text('foo'))`
      * `elements.filteredBy(have.no.cssClass('green'))`

## 1.1.0 (released on 2019.03.02)

### BREAKING CHANGEs (hot fixing main release:D)
  * changed Collection#first
    * `browser.all('#alphabet *').first().should(have.text('a'))`
    * to
    * `browser.all('#alphabet *').first.should(have.text('a'))`
  * changed Element#followingSibling
    * `browser.element('#alphabet *').followingSibling('[@class="vowel"]').should(have.text('e'))`
    * to
    * `browser.element('#alphabet *').followingSibling.should(have.text('b'))`
      * to achieve the same, you have to be more verbose now:
        * `browser.element('#alphabet *').element('./followingSibling::*[@class="vowel"]').should(have.text('e'))`
  * renamed according to correct english grammar (read [more-than-VS-greater-than](http://www.gmatpill.com/more-than-vs-greater-than-vs-less-than-fewer-than/))
    * `condition.collection.hasSizeMoreThan`
    * to
    * `condition.collection.hasGreaterThan`

### New features

* added a few collection conditions
  * have.sizeGreaterThan
  * have.sizeLessThan
  * have.sizeGreaterThanOrEqual
  * have.sizeLessThanOrEqual

* added collection.sliced(start, endExclusive):
  * `browser.all('#alphabet *').sliced(0, 2).should(have.texts('a', 'b'))`

## 1.0.0 (released on 2019.02.23)

The all new API. Let's do our best to keep it stable:)

