module.exports = (req, res, next) => {
  if (req.session.privileges.indexOf('privileges_goals') >= 0) {
    return res.redirect('/todolist/goals');
  }
  next();
};
