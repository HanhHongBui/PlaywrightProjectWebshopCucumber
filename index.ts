var reporter = require('cucumber-html-reporter');
import * as os from "os";
var options = {
    name: 'Demo Webshop',
    brandTitle: 'Regression Tests',
        theme: 'bootstrap',
        jsonFile: 'test-results/cucumber-report.json',
        output: 'test-results/cucumber_html_report.html',
        storeScreenshots: false ,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            AppVersion:'1.0.0',
            Platform:  os.platform(), 
            NodeVersion: process.version,
        },
        failedSummaryReport: true,
    };
    reporter.generate(options);