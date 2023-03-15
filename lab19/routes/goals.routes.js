const express = require('express');

const router = express.Router();

const goalsController = require('../controllers/goals.controller');

const hasAction = require('../util/has_action');

router.get('/newgoal', hasAction, goalsController.getNew);

router.post('/newgoal', hasAction, goalsController.postNew);

router.get('/goals', hasAction, goalsController.list);

module.exports = router;
