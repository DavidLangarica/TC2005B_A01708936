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
    privileges: req.session.privileges || [],
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
              Usuario.fetchPrivileges(rows[0].username)
                .then(([query_privileges, fieldData]) => {
                  const privileges = [];
                  query_privileges.forEach((privilege) => {
                    privileges.push(privilege.nombre);
                  });
                  req.session.privileges = privileges;
                  return req.session.save((err) => {
                    if (privileges.indexOf('privileges_goals') >= 0) {
                      res.redirect('/todolist/goals');
                    } else if (privileges.indexOf('all') >= 0) {
                      res.redirect('/todolist/actions');
                    } else {
                      res.redirect('/todolist/actions');
                    }
                  });
                })
                .catch((err) => console.log(err));
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
    privileges: req.session.privileges || [],
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
