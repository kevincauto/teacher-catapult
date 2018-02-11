const axios = require('axios');
const cheerio = require('cheerio');
const { getDate } = require('../utils/helper');

module.exports = {
  pareapSearch: async (id, link) => {
    try {
      let res = await axios.get(link);

      let $ = cheerio.load(res.data);

      let jobs = $('.jobfirstrow a').text();
      jobs = jobs.split('\n\t\t');
      jobs = jobs.map(job => {
        typeAndSubject = job.slice(0, -3).split('/');
        return `${typeAndSubject[1]} ${typeAndSubject[0]}`.trim();
      });
      jobs.shift();

      let sdAndCity = $('.school')
        .text()
        .replace(/([a-z])([A-Z])/g, '$1;$2')
        //rare occations when like 'Morrisville SDMorrisville, PA'
        .replace(/([A-Z]{2})([A-Z][a-z])/g, '$1;$2')
        //zipcode followed by capital letter
        .replace(/([0-9]{4})([A-Z])/g, '$1^$2')
        .split(';');

      let jobLinks = [];
      $('.jobfirstrow a').each(function(index, element) {
        let jobLink = $(element).attr('href');
        if (jobLink !== '#') {
          jobLinks.push('https://www.pareap.net' + jobLink);
        }
      });

      let cities = sdAndCity.map(city => city.substr(0, city.indexOf(',')));
      cities.shift();

      let states = Array(cities.length).fill('PA');

      let sds = sdAndCity.map(sd => sd.substr(sd.indexOf('^') + 1));
      sds.pop();

      let today = getDate();
      let allReapJobs = [];

      for (let i = 0; i < jobs.length; i++) {
        allReapJobs.push({
          id: id + 'reap' + i,
          jobTitle: jobs[i],
          link: jobLinks[i],
          sd: sds[i],
          county: 'PA Reap',
          city: cities[i],
          state: states[i],
          date: today,
          paid: false
        });
      }

      return { jobs: allReapJobs, error: false };
    } catch (err) {
      console.log(err);

      return { jobs: allReapJobs, error: true };
    }
    return;
  },
  anotherSearch: () => {}
};
