const data = require('.././index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badgesLink = {
  'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' ,
  'Apache':'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GPL':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
};
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return badgesLink[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const linkMap = {
    'MIT':'https://opensource.org/licenses/MIT',
    'Apache':'https://opensource.org/licenses/Apache-2.0',
    'GPL':'https://www.gnu.org/licenses/gpl-3.0'
  };
  return `[${license}](<${linkMap[license]})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const sectionMap = {
    'MIT': `This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.`, 

    'Apache':`This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.`, 

    'GPL': `This project is licensed under the GPL License v3 - see the [LICENSE.md](LICENSE.md) file for details.`
  };
  return sectionMap[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions, feel free to email me at ${data.email}. You can also find more of my work at [GitHub](https://github.com/&{data.github}).

`;
}
module.exports = generateMarkdown;