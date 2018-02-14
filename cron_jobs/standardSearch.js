const axios = require('axios');
const cheerio = require('cheerio');
const { getDate } = require('../utils/helper');

module.exports = {
  standardSearch: async (id, link, district) => {
    let { county, city, state, sd, customSearch } = district;
    let allJobPosts = [];
    try {
      res = await axios.get(link);

      const $ = cheerio.load(res.data);
      const allText = $('body').text();
      const jobTypes = require('./data/keywords');

      let keywords;
      const today = getDate();

      for (let i = 0; i < jobTypes.length; i++) {
        keywords = jobTypes[i].keywords;

        for (let j = 0; j < keywords.length; j++) {
          let re = new RegExp(keywords[j], 'gi');
          let num = allText.search(re);

          if (num !== -1) {
            allJobPosts.push({
              id: id + 'std' + i,
              jobTitle: jobTypes[i].jobTitle,
              link,
              sd,
              county,
              city,
              state,
              date: today,
              paid: false
            });
          }
        }
      }

      return { jobs: allJobPosts, error: false };
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
      return { jobs: allJobPosts, error: true };
    }
  }
};
