import {browser} from 'protractor';
import * as allureCookies from 'allure-cookies';
import {Element} from '../index';


export let config = {
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
              async function(entity, description) {
                allureCookies.runtime.startstep(`should ${description} on ${entity.toString()}`)
              }
            ],
            afterAssertionHooks: [
              async function(entity, description, error) {
                allureCookies.runtime.endstep(!error);
              }
            ]
        }
    },
    onPrepare: async function () {
        jasmine.getEnv().addReporter(allureCookies.getJasmineAllureReporter(
            {basePath: './build', resultsDir: 'allure-results'}));
        Element.beforeActionHooks.push(
            async function (element, actionName) {
                allureCookies.runtime.startstep(`${actionName} on element ${await element.toString()}`)
            }
        );

        Element.afterActionHooks.push(
            async function (element, actionName, actionError) {
                allureCookies.runtime.endstep(!actionError);
            }
        );
    }
};
