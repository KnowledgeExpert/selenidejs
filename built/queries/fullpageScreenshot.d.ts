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
    private take;
    private getCurrentFrameWebElement;
    private hideScrollbars;
    private setDocumentOverflow;
    private setOverflow;
    private getBrowserData;
    private scrollToNthScreen;
    private takeScreenshotWithWait;
    private static crop;
}
