import { Driver } from '..';
import { Query } from './query';
export declare class FullpageScreenshot implements Query<Driver> {
    perform(driver: Driver, ...args: any[]): Promise<any>;
    /**
     * The method allows to take full page screenshots by scrolling screen and merging taken parts of screen
     * (without scrollbars) into one whole screenshot.
     * If there are frames, the method will automatically switch to DEFAULT content to avoid breaking flow.
     * @returns {Promise<Buffer>}
     */
    private take(webdriver);
    private getCurrentFrameWebElement(webdriver);
    private hideScrollbars(webdriver);
    private setDocumentOverflow(webdriver, overflowValue?);
    private setOverflow(webdriver, element, overflowValue);
    private getBrowserData(webdriver);
    private scrollToNthScreen(webdriver, browserData, index);
    private takeScreenshotWithWait(webdriver);
    private static crop(screenBuffer, delta);
    private static getBuffer(jimpImage);
}
