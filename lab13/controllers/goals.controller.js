const Goals = require('../models/goals.model')

exports.getNew = (req, res, next) => {
    res.render('newgoal')
}

exports.postNew = (req, res, next) => {
    const goal = new Goals({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description
    })
    goal.save()
    res.redirect('/todolist/goals')
}

exports.list = (req, res, next) => {
    res.render('goals', {goals: Goals.fetchAll() })
}