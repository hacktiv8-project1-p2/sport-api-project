const axios = require('axios');

class newsController {
  static getNews(req, res) {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/sports.json`, {
      params: {
        'api-key': process.env.NEWS_API_KEY
      }
    })
      .then(response => {
        let results = response.data.results;
        let output = [];
        let objOutput = {};
        results.forEach(result => {
          if (result.subsection === 'basketball') {
            objOutput = {
              title: result.title,
              abstract: result.abstract,
              url: result.url,
              imageUrl: result.multimedia[0].url
            }
            output.push(objOutput);
          }
        })
        res.status(200).json(output);
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = newsController;