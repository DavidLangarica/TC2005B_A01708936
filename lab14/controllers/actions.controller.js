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
    req.session.lastAction = action.name;
    res.redirect('/todolist/actions')
}

exports.list = (req, res, next) => {
    let cookies = res.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    res.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    res.render('actions', { 
        actions: Actions.fetchAll(),
        lastAction: req.session.lastAction || '', 
    });
}