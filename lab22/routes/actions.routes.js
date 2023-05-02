const express = require('express');

const router = express.Router();

const actionsController = require('../controllers/actions.controller');

const hasGoal = require('../util/has_goal');

router.get('/newaction', hasGoal, actionsController.getNew);

router.post('/newaction', hasGoal, actionsController.postNew);

router.get('/actions', hasGoal, actionsController.list);

module.exports = router;
