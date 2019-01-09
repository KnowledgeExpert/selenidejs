import { Browser } from '../../lib';
export declare class Gherkin {
    private readonly browser;
    constructor(browser: Browser);
    openedEmptyPage(): Promise<void>;
    withBody(html: string): Promise<void>;
    withBodyTimedOut(html: string, timeout: number): Promise<void>;
    executeScript(script: string): Promise<{}>;
    executeScriptWithTimeout(script: string, timeout: number): Promise<{}>;
    openedEmptyPageWithJquery(): Promise<void>;
    openedEmptyPageWithBody(html: string): Promise<void>;
    openedEmptyPageWithJqueryAndBody(html: string): Promise<void>;
    private addJquery();
}
