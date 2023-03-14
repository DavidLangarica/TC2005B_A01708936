const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
  constructor(nuevo_usuario) {
    this.nombre = nuevo_usuario.nombre || 'Jane Doe';
    this.username = nuevo_usuario.username || 'janedoe';
    this.password = nuevo_usuario.password || 'password';
  }

  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((hashedPassword) => {
        return db.execute(
          'INSERT INTO usuarios (nombre, username, password) VALUES (?, ?, ?)',
          [this.nombre, this.username, hashedPassword]
        );
      })
      .catch((err) => console.log(err));
  }

  static fetchOne(username) {
    return db.execute('SELECT * FROM usuarios WHERE username = ?', [
      username,
    ]);
  }
};
