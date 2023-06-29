import 'chromedriver'
import { browser, have, command } from '../../lib'

describe('Selene', () => {
    it('rocks on testing todomvc.com', async () => {
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
        await browser.all('#todo-list>li').even.should(have.texts('2'))
        await browser.all('#todo-list>li').odd.should(have.texts('1', '3'))
        try {
            await browser.all('#todo-list>li').odd.with({timeout: 250}).should(have.texts('1', '4'))
            throw new Error('should fail')
        } catch (error) {
            expect(error.message).toContain(`
\tTimed out after 250ms, while waiting for:
\tbrowser.all(By(css selector, #todo-list>li))[::2].has texts 1,4
Reason:
\tactual texts: 10,30`.trim()
        )
        }
        await browser.all('#todo-list>li').sliced(0, undefined, -1).should(have.texts(3, 2, 1))
    })

    it('rocks on testing the-internet.herokuapp.com/tables', async () => {
        await browser.open('https://the-internet.herokuapp.com/tables')
        const table = browser.element('#table1 tbody')
        /**
         * Actual Table Data
         Last Name 	First Name 	Email 	                Due 	    Web Site 	                Action
         Smith 	    John 	    jsmith@gmail.com 	    $50.00 	    http://www.jsmith.com 	    edit delete
         Bach 	    Frank 	    fbach@yahoo.com 	    $51.00 	    http://www.frank.com 	    edit delete
         Doe 	    Jason 	    jdoe@hotmail.com 	    $100.00 	http://www.jdoe.com 	    edit delete
         Conway 	Tim 	    tconway@earthlink.net 	$50.00 	    http://www.timconway.com 	edit delete
         */
        await table.all('tr').should(have.size(4))
        await table.all('tr').first.all('td').sliced(0, -3).should(have.texts('Smith', 'John', 'jsmith@gmail.com'))
        await table.all('tr').allFirst('td').should(have.texts('Smith', 'Bach', 'Doe', 'Conway'))
        await table.all('tr').all('td').should(have.texts(
            'Smith', 'John', 'jsmith@gmail.com', '$50.00', 'http://www.jsmith.com', 'edit delete',
            'Bach', 'Frank', 'fbach@yahoo.com', '$51.00', 'http://www.frank.com', 'edit delete',
            'Doe', 'Jason', 'jdoe@hotmail.com', '$100.00', 'http://www.jdoe.com', 'edit delete',
            'Conway', 'Tim', 'tconway@earthlink.net', '$50.00', 'http://www.timconway.com', 'edit delete',
        ))
        await table.all('tr').odd.collected(its => its.all('td').sliced(0, -3)).should(have.texts(
            'Smith', 'John', 'jsmith@gmail.com',
            'Doe', 'Jason', 'jdoe@hotmail.com',
        ))
        await table.all('tr').even.collected(its => its.all('td').sliced(0, -3)).should(have.texts(
            'Bach', 'Frank', 'fbach@yahoo.com',
            'Conway', 'Tim', 'tconway@earthlink.net',
        ))
        // works same way, but more readable and formatters-friendly (all extra brackets will be stripped off)
        await table.all('tr').even.collected(its => its.all('td').sliced(0, -3)).should(have.texts(
            ['Bach', 'Frank', 'fbach@yahoo.com'],
            ['Conway', 'Tim', 'tconway@earthlink.net'],
        ))
    })

    afterEach(async () => {
        await browser.quit()
    })
})
