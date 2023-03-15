module.exports = (req, res, next) => {
  if (req.session.privileges.indexOf('privileges_actions') >= 0) {
    return res.redirect('/todolist/actions');
  }
  next();
};
