const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const LiveScoreController = require('../controllers/livescoreController')

router.use('/user', userRouter);

router.get('/livescore', LiveScoreController.showScores)

module.exports = router;