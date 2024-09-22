const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const path = require('path');
const fs = require('fs');


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      on('after:spec', (spec) => {
        // Get the base name of the spec file (without the extension)
        const baseName = path.basename(spec.name, '.feature');
        const reportDir = config.reporterOptions.reportDir;

        const jsonReportPath = path.join(reportDir, 'report.json');
        const htmlReportPath = path.join(reportDir, 'report.html');
        const newJsonReportPath = path.join(reportDir, `${baseName}-report.json`);
        const newHtmlReportPath = path.join(reportDir, `${baseName}-report.html`);

        // Rename the JSON report
        if (fs.existsSync(jsonReportPath)) {
          fs.renameSync(jsonReportPath, newJsonReportPath);
        }

        // Rename the HTML report
        if (fs.existsSync(htmlReportPath)) {
          fs.renameSync(htmlReportPath, newHtmlReportPath);
        }
        
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false,
      html: true,
      json: true,
      quiet: true,
    },
  },
});
