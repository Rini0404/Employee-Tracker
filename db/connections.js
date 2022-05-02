const mysql = require('mysql2');



// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Rinipini2000-',
    database: 'employees'
  },
  console.log(`Connected to the movies_db database.`)
);

connection.connect(function(err){
  if (err) throw err;
});




module.exports = connection;