const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const playerRouter = require('./player')
const LiveScoreController = require('../controllers/livescoreController')

router.use('/user', userRouter);
router.use('/player', playerRouter)
router.get('/livescore', LiveScoreController.showScores)

module.exports = router;