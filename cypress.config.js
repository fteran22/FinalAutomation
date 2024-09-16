const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const cucumberHtmlReporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);

      await addCucumberPreprocessorPlugin(on, config);

      // Define paths for the reports
      const reportDir = 'F:/Automation reports'; // Define the base report directory
      const jsonFilePath = path.join(reportDir, 'cucumber_report.json');
      const htmlReportPath = path.join(reportDir, 'cucumber-html-report.html');

      // Ensure that the JSON report is available
      on('after:run', () => {
        console.log('Report directory:', reportDir);
        console.log('Checking for JSON report at:', jsonFilePath);
        console.log('HTML report will be saved at:', htmlReportPath);

        if (fs.existsSync(jsonFilePath)) {
          console.log('JSON report found, generating HTML report...');
          // Create the report directory if it does not exist
          if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
          }

          cucumberHtmlReporter.generate({
            jsonFile: jsonFilePath,
            reportPath: htmlReportPath,
            // Additional options can be added here
          });
        } else {
          console.error('No cucumber_report.json file found.');
        }
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
