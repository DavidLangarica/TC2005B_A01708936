const express = require('express');

const router = express.Router();

const goalsController = require('../controllers/goals.controller');

router.get('/newgoal', goalsController.getNew);

router.post('/newgoal', goalsController.postNew);

router.get('/goals', goalsController.list);

module.exports = router;
