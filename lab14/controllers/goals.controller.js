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
    req.session.lastGoal = goal.name;
    res.redirect('/todolist/goals')
}

exports.list = (req, res, next) => {
    let cookies = res.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    res.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    res.render('goals', { 
        goals: Goals.fetchAll(),
        lastGoal: req.session.lastGoal || '', 
    });
}