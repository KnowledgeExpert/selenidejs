import { Describe, It } from "jasmine-cookies";
import { Browser } from "../../lib/baseEntities/browser";
import { TestUtils } from "../utils/testUtils";
import { Given } from "../utils/given";
import { When } from "../utils/when";
import { Configuration } from "../../lib";


Describe("Element search", () => {

    beforeAll(async () => {
        Browser.setDriver(TestUtils.buildWebDriver());
        TestUtils.startServer();
        Browser.config.onFailureHooks = [];
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterAll(async () => {
        await Browser.quit();
        TestUtils.shutdownServer()
    });

    It("initialization does not perform actual search", async () => {
        const element = Browser.element('#not-existing-element-id');
        expect(element.toString()).toBeTruthy();
    });

    // TODO is's are not actions, we need o rename it somehow
    It("should be postponed until action required", async () => {
        await Given.openedEmptyPage();
        const element = Browser.element('#will-be-existing-element-id');
        await When.withBody("<h1 id='will-be-existing-element-id'>Hello kitty:*</h1>");
        expect(await element.isVisible()).toBe(true);
    });

    // TODO is's are not actions, we need o rename it somehow
    It("should be performed on each action", async () => {
        await Given.openedEmptyPage();
        const element = Browser.element('#will-be-existing-element-id');
        await When.withBody("<h1 id='will-be-existing-element-id'>Hello kitty:*</h1>");
        expect(await element.isVisible()).toBe(true);
        await When.withBody("<h1 id='will-be-existing-element-id' style='display:none'>Hello kitty:*</h1>");
        expect(await element.isVisible()).toBe(false);
    });

    It("should wait on visibility on actions", async () => {
        Browser.config.timeout = 10000;
        await Given.openedEmptyPageWithBody(`<a href='#second' style='display:none'>go to Heading 2</a><h2 id='second'>Heading 2</h2>`);
        await Browser.executeScript(`setTimeout(_ => { document.getElementsByTagName("a")[0].style = "display:block"; }, 1000);`);

        await Browser.element('a').click();
        expect(await Browser.url()).toContain('second');
    });

    It("should fail on timeout during waiting for visibility on actions", async () => {
        Browser.config.timeout = 1;
        await Given.openedEmptyPageWithBody(`
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h2 id='second'>Heading 2</h2>
        `);
        await Browser.executeScript(`setTimeout(_ => { document.getElementsByTagName("a")[0].style = "display:block"; }, 5000);`);

        await Browser.element('a').click().then(
            () => fail('should fail on timeout before can be clicked'),
            async error => expect(await Browser.url()).not.toContain('second')
        );
    });
});