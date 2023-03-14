const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const session= require('express-session')

app.use(session({
    secret: 'use a very long string like this one',
    resave: false,
    saveUnitialized: false
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

//middleware
app.use((req, res, next) => {
    console.log('Middleware!')
    next()
})

const routesUsuarios = require('./routes/usuarios.routes')

app.use('/usuarios', routesUsuarios)

const routesListGoals = require('./routes/goals.routes')

app.use('/todolist', routesListGoals)

const routesListActions = require('./routes/actions.routes')

app.use('/todolist', routesListActions)

app.use((req, res) => {
    console.log('Error!')
    res.status(404)
    res.send('Lo sentimos esta ruta no existe')
})

app.listen(3000)