const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const newsRouter = require('./news');
const LiveScoreController = require('../controllers/livescoreController')
const playerRouter = require('./player')

router.use('/user', userRouter);

router.use('/', newsRouter);

router.use('/player', playerRouter)

router.get('/livescore', LiveScoreController.showScores)

module.exports = router;