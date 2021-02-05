const axios = require('axios');
const { response } = require('express');

class LiveScoreController {
    static showScores(req, res) {
        let today = new Date().toISOString().slice(0, 10)
        axios.get('http://api.isportsapi.com/sport/basketball/stats', {
            params: {
                api_key: process.env.SECRET_SCORES,
                date: today
            }
        })
            .then(response => {
                res.status(200).json(response.data.data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = LiveScoreController