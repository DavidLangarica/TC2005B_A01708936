const express = require('express')

const router = express.Router()

const actionsController = require('../controllers/actions.controller')

router.get('/newaction', actionsController.getNew)

router.post('/newaction', actionsController.postNew)

router.get('/actions', actionsController.list)

module.exports = router