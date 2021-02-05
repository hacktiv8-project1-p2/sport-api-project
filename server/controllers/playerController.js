const axios = require('axios')

class playerController {

  static showPlayers(req, res, next) {
    const keyword = req.query.keyword
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: { search: keyword },
      headers: {
        'x-rapidapi-key': `${process.env.X_RAPID_API_KEY}`,
        'x-rapidapi-host': `${process.env.X_RAPID_API_HOST}`
      }
    };
    
    axios.request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  }

}

module.exports = playerController