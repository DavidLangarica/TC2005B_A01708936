const Actions = require('../models/actions.model');
const Type = require('../models/type.model');

exports.getNew = (req, res, next) => {
  Type.fetchAll()
    .then(([rows, fieldData]) => {
      // console.log(rows);

      res.render('newaction', {
        types: rows,
        isLoggedIn: req.session.isLoggedIn,
        nombre: req.session.nombre || '',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postNew = (req, res, next) => {
  const action = new Actions({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    img: req.body.img,
  });
  action.save().then(([rows, fieldData]) => {
    req.session.lastAction = action.name;
  });
  res.redirect('/todolist/actions');
};

exports.list = (req, res, next) => {
  let cookies = res.get('Cookie') || '';

  let consultas = cookies.split(';')[0].split('=')[1] || 0;

  consultas++;

  res.setHeader(
    'Set-Cookie',
    'consultas=' + consultas + '; HttpOnly'
  );

  Actions.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('actions', {
        actions: rows,
        lastAction: req.session.lastAction || '',
        isLoggedIn: req.session.isLoggedIn,
        nombre: req.session.nombre || '',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
