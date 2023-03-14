const Actions = require('../models/actions.model')

exports.getNew = (req, res, next) => {
    res.render('newaction')
}

exports.postNew = (req, res, next) => {
    const action = new Actions({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description
    })
    action.save()
    res.redirect('/todolist/actions')
}

exports.list = (req, res, next) => {
    res.render('actions', {actions: Actions.fetchAll() })
}