const router = require('express').Router()
const playerController = require('../controllers/playerController')


router.get('/', playerController.showPlayers)

module.exports = router