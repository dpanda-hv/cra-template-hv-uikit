const shell = require('shelljs');
const fs = require('fs');
const template = require('./template.json');
const basePackage = require('./base-template.json');

const { package } = template;
const { scripts, dependencies } = basePackage;

const mergedPackage = {
  ...package,
  scripts: {
    ...package.scripts,
    ...scripts,
  },
  dependencies: {
    ...package.dependencies,
    ...dependencies,
  },
};

fs.writeFileSync(
  './template/package.json',
  JSON.stringify(mergedPackage, null, 2)
);

shell.cd(`template`);
shell.exec(`npm install`);
shell.exec(`npm start`);
