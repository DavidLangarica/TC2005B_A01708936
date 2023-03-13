const db = require('../util/database');

// const actions = [
//     {
//         name : "Pick up my sister",
//         type : "URGENT",
//         description : "Pick up my sister from school.",
//         img : "https://bulma.io/images/placeholders/1280x960.png"
//     },
//     {
//         name : "Do my math Homework!",
//         type : "URGENT",
//         description : "Do pages 1-4 of my math notebook.",
//         img : "https://bulma.io/images/placeholders/1280x960.png"
//     },
//     {
//         name : "Take out the trash",
//         type : "NORMAL",
//         description : "Take out the trash before my mom gets back.",
//         img : "https://bulma.io/images/placeholders/1280x960.png"
//     }
// ]

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
