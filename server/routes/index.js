const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const newsRouter = require('./news');
const LiveScoreController = require('../controllers/livescoreController')

router.use('/user', userRouter);
router.use('/', newsRouter);
router.get('/livescore', LiveScoreController.showScores)

module.exports = router;