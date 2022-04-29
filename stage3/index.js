const { prompt } = require('inquirer');
const db = require('./db');
require('./')








function mainMenu() {
  prompt([

  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?'
    choices: [
      {
        name: 'View all employees',
        value: 'VIEW_EMPLOYEES'
      },









      {
        name: 'Quit',
        value: 'QUIT'
      }
    ]
  }
















  ]).then(res => {
  let choices = res.choices;

  })
}