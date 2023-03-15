const db = require('../util/database');

module.exports = class Action {
  constructor(newAction) {
    (this.name = newAction.name || 'Action'),
      (this.type = newAction.type || 1),
      (this.description = newAction.description || 'Desc'),
      (this.img =
        newAction.img ||
        'https://bulma.io/images/placeholders/1280x960.png');
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
