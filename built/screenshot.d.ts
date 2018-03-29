/// <reference types="node" />
export declare namespace Screenshot {
    /**
     * The method allows to take full page screenshots by scrolling screen and merging taken parts of screen
     * (without scrollbars) into one whole screenshot.
     * If there are frames, the method will automatically switch to default content to avoid breaking flow.
     * @returns {Promise<Buffer>}
     */
    function take(): Promise<Buffer>;
}
