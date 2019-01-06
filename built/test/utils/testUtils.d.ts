import { WebDriver } from 'selenium-webdriver';
export declare namespace TestUtils {
    function startServer(): void;
    function shutdownServer(): void;
    function resourcesUrl(): string;
    function buildWebDriver(browserName?: string, remoteUrl?: string): WebDriver;
    function sleep(ms: number): Promise<void>;
}
