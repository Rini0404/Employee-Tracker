// const { prompt } = require('inquirer');
// const db = require('../db/connections');

// const { check } = require('../helpers/validation');




// const menu = [
//     {
//       type: 'list',
//       name: 'main',
//       message: 'How may we begin?',
//         choices: [
          
//           'View Roles',
//           'View employees',
//           'Add a department to your organization',
//           'Add Role',
//           'Add employee',
//           'Update Employee Role',
//           'Exit',
//         ], 
//     },
//   ];

//   const departments = () => {
//     inquirer.prompt([
//       {
//         type: 'input',
//         name: 'department',
//         message: 'What department would you like to access?',
//         // validate: stringCheck, 
//         // filter the input to trim `
//           filter: (input) => {
//             return input.trim();
//           },
//       }
//     ]).then((answers) => {
//       const sql = `INSERT INTO departments (name) VALUES (?)`;
//         const par = [answers.departments];
//           db.query(sql, par, (err, answers) => {
//             (err) ? console.log(err) : console.log(`${par} added to the new Departments`)
//           })
//     })
//   }

//   const addRole = [{
//     type: 'input'
//   }];