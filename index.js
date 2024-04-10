const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to have installed to run the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your application.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: '',
    },
    {
        type: 'list',
        name: 'license',
        message:'Choose a license for the project',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('Creating README...');
        const markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
        console.log('Your README has been created successfully')
    })
}

// Function call to initialize app
init();