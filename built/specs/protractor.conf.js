"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allureCookies = require("allure-cookies");
const index_1 = require("../index");
exports.config = {
    //protractor
    SELENIUM_PROMISE_MANAGER: false,
    restartBrowserBetweenTests: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //jasmine
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 3000000,
        isVerbose: true
    },
    specs: ['./test.js'],
    params: {
        //selenidejs
        selenidejs: {
            windowSize: {
                width: 1800,
                height: 1100
            },
            timeouts: {
                toWaitElementsInMs: 5000,
                toHardWaitInMs: 3000
            },
            beforeAssertionHooks: [
                async function (entity, description) {
                    allureCookies.runtime.startstep(`should ${description} on ${entity.toString()}`);
                }
            ],
            afterAssertionHooks: [
                async function (entity, description, error) {
                    allureCookies.runtime.endstep(!error);
                }
            ]
        }
    },
    onPrepare: async function () {
        jasmine.getEnv().addReporter(allureCookies.getJasmineAllureReporter({ basePath: './build', resultsDir: 'allure-results' }));
        index_1.Element.beforeActionHooks.push(async function (element, actionName) {
            allureCookies.runtime.startstep(`${actionName} on element ${await element.toString()}`);
        });
        index_1.Element.afterActionHooks.push(async function (element, actionName, actionError) {
            allureCookies.runtime.endstep(!actionError);
        });
    }
};
//# sourceMappingURL=protractor.conf.js.map