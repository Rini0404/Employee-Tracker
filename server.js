const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Rinipini2000-",
    database: "employees",
  },

  console.log(`connected to Employess DataBase! `)
);

