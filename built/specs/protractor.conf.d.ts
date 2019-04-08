export declare let config: {
    SELENIUM_PROMISE_MANAGER: boolean;
    restartBrowserBetweenTests: boolean;
    seleniumAddress: string;
    framework: string;
    jasmineNodeOpts: {
        showColors: boolean;
        defaultTimeoutInterval: number;
        isVerbose: boolean;
    };
    specs: string[];
    params: {
        selenidejs: {
            windowSize: {
                width: number;
                height: number;
            };
            timeouts: {
                toWaitElementsInMs: number;
                toHardWaitInMs: number;
            };
            beforeAssertionHooks: ((entity: any, description: any) => Promise<void>)[];
            afterAssertionHooks: ((entity: any, description: any, error: any) => Promise<void>)[];
        };
    };
    onPrepare: () => Promise<void>;
};
