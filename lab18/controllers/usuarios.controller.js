const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcryptjs');

exports.get_login = (req, res, next) => {
  const mensaje = req.session.mensaje || '';

  if (!req.session.usuario) {
    req.session.mensaje = '';
  }

  res.render('login', {
    mensaje: mensaje,
    isLoggedIn: req.session.isLoggedIn || false,
    nombre: req.session.nombre || '',
  });
};

exports.post_login = (req, res, next) => {
  Usuario.fetchOne(req.body.username)
    .then(([rows, fieldData]) => {
      if (rows.length > 0) {
        bcrypt
          .compare(req.body.password, rows[0].password)
          .then((doMatch) => {
            if (doMatch) {
              req.session.isLoggedIn = true;
              req.session.nombre = rows[0].nombre;
              res.redirect('/todolist/actions');
            } else {
              req.session.mensaje =
                'Usuario y/o contraseña incorrectos';
              res.redirect('/usuarios/login');
            }
          })
          .catch((err) => console.log(err));
      } else {
        req.session.mensaje = 'Usuario y/o contraseña incorrectos';
        res.redirect('/usuarios/login');
      }
    })
    .catch((err) => console.log(err));
};

exports.get_signup = (req, res, next) => {
  res.render('signup', {
    isLoggedIn: req.session.isLoggedIn,
    nombre: req.session.nombre || '',
  });
};

exports.post_signup = (req, res, next) => {
  const nuevoUsuario = new Usuario({
    nombre: req.body.nombre,
    username: req.body.username,
    password: req.body.password,
  });

  nuevoUsuario
    .save()
    .then(([rows, fieldData]) => {
      res.redirect('/usuarios/login');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/usuarios/login');
  });
};
