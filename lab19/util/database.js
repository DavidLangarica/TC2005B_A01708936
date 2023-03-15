const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'actionsgoals',
  // ! Cambiar por el nombre de usuario y contraseña de tu base de datos
  user: 'david',
  password: '',
});

module.exports = pool.promise();
