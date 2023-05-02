const db = require('../util/database');

module.exports = class Action {
  constructor(newAction) {
    (this.name = newAction.name || 'Action'),
      (this.type = newAction.type || 1),
      (this.description = newAction.description || 'Desc'),
      (this.img =
        newAction.img || '2023-03-29T20:03:39.327Z-imagen.png');
  }

  static find(id) {
    return db.execute(
      `SELECT a.id, a.name, a.img, a.description, a.created_at, t.name as type 
      FROM actions a, type t
      WHERE a.idType = t.id 
            AND (a.name LIKE ? OR a.description LIKE ? OR t.name LIKE ?)
        `,
      ['%' + id + '%', '%' + id + '%', '%' + id + '%']
    );
  }

  save() {
    return db.execute(
      `INSERT INTO actions (name, idType, description, img) VALUES (?, ?, ?, ?)`,
      [this.name, this.type, this.description, this.img]
    );
  }

  static fetchAll() {
    return db.execute(
      `SELECT a.id, a.name, a.img, a.description, a.created_at, t.name as type 
            FROM actions a, type t
            WHERE a.idType = t.id
            `
    );
  }
};
