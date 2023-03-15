const db = require('../util/database');

module.exports = class Goal {
  constructor(newGoal) {
    (this.name = newGoal.name || 'Goal'),
      (this.type = newGoal.type || '---'),
      (this.description = newGoal.description || 'Desc'),
      (this.img =
        newGoal.img ||
        'https://bulma.io/images/placeholders/1280x960.png');
  }

  save() {
    return db.execute(
      `INSERT INTO goals (name, idType, description, img) VALUES (?, ?, ?, ?)`,
      [this.name, this.type, this.description, this.img]
    );
  }

  static fetchAll() {
    return db.execute(
      `SELECT g.id, g.name, g.img, g.description, g.created_at, t.name as type 
            FROM goals g, type t
            WHERE g.idType = t.id
            `
    );
  }
};
