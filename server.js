const express = require('express');
const db = require('./db/connections');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Rinipini2000-',
    database: 'employees'
  },
  console.log(`Connected to Employess DataBase!`)
);

