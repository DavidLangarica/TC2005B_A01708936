const Usuario = require('../models/usuarios.model');

exports.get_login = (req, res, next) => {
  res.render('login');
};

exports.post_login = (req, res, next) => {
  Usuario.fetchOne(req.body.username)
    .then(([rows, fieldData]) => {
      if (rows.length > 0) {
        res.redirect('/todolist/actions');
      } else {
        req.session.mensaje = 'Usuario y/o contraseña incorrectos';
        res.redirect('usuarios/login');
      }
    })
    .catch((err) => console.log(err));
};

exports.get_signup = (req, res, next) => {
  res.render('signup');
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
