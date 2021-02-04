const axios = require('axios')

class playerController {

  static showPlayers(req, res, next) {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: {page: '0', per_page: '25'},
      headers: {
        'x-rapidapi-key': '68f59c2ee8mshe46be477ed32cc4p1d8bf6jsn229fa9392015',
        'x-rapidapi-host': 'free-nba.p.rapidapi.com'
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