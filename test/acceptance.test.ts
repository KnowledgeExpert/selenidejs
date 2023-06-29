import 'chromedriver'
import { browser, have, command } from '../lib'


it('tests selene power on todomvc.com', async () => {
  console.log('test: google finds selenidejs')
  await browser.open('https://todomvc.com/examples/emberjs/')

  await browser.element('#new-todo').type('10').then(command.pressEnter)
  await browser.element('#new-todo').type('20').then(command.pressEnter)
  await browser.element('#new-todo').type('30').then(command.pressEnter)
  await browser.all('#todo-list>li').should(have.size(3))
  await browser.all('#todo-list>li').first.should(have.exactText('10'))
  await browser.all('#todo-list>li').first.should(have.exactText(10))
  await browser.all('#todo-list>li').first.should(have.text('1'))
  await browser.all('#todo-list>li').first.should(have.text(1))
  await browser.all('#todo-list>li').should(have.exactTexts('10', '20', '30'))
  await browser.all('#todo-list>li').should(have.exactTexts(10, 20, 30))
  await browser.all('#todo-list>li').should(have.exactTexts('10', 20, '30'))
  await browser.all('#todo-list>li').should(have.texts('1', '2', '3'))
  await browser.all('#todo-list>li').should(have.texts('1', 2, '3'))
})

afterEach(async () => {
    await browser.quit()
})
