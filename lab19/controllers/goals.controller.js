const Goals = require('../models/goals.model');
const Type = require('../models/type.model');

exports.getNew = (req, res, next) => {
  Type.fetchAll()
    .then(([rows, fieldData]) => {
      // console.log(rows);

      isLoggedIn: req.session.isLoggedIn,
        res.render('newgoal', {
          types: rows,
          isLoggedIn: req.session.isLoggedIn,
          nombre: req.session.nombre || '',
          privileges: req.session.privileges || [],
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postNew = (req, res, next) => {
  const goal = new Goals({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    img: req.body.img,
  });
  goal.save();
  req.session.lastGoal = goal.name;
  res.redirect('/todolist/goals');
};

exports.list = (req, res, next) => {
  let cookies = res.get('Cookie') || '';

  let consultas = cookies.split(';')[0].split('=')[1] || 0;

  consultas++;

  res.setHeader(
    'Set-Cookie',
    'consultas=' + consultas + '; HttpOnly'
  );

  Goals.fetchAll()
    .then(([rows, fieldData]) => {
      //   console.log(rows);

      res.render('goals', {
        goals: rows,
        lastGoal: req.session.lastGoal || '',
        isLoggedIn: req.session.isLoggedIn,
        nombre: req.session.nombre || '',
        privileges: req.session.privileges || [],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
