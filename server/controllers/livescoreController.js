const axios = require('axios');
const { response } = require('express');

class LiveScoreController {
    static showScores(req, res) {
        axios.get('http://api.isportsapi.com/sport/basketball/stats', {
            params: {
                api_key: process.env.SECRET_SCORES,
                date: "2021-02-04"
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