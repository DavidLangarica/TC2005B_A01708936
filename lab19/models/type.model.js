const db = require('../util/database');

module.exports = class Type {
  static fetchAll() {
    return db.execute(
      `SELECT t.name as type, t.id 
            FROM type t
            `
    );
  }
};
