const axios = require('axios');
const cheerio = require('cheerio');
const { getDate } = require('../utils/helper');

//each function should return an object with properties
//{jobs: Array, error: Boolean}

module.exports = {
  pareapSearch: async (link = 'https://www.pareap.net/jobsrch.php?srch=100&position=') => {
    try {
      console.log('paReapSearch');
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      let res = await axios.get(link);
      let $ = cheerio.load(res.data);

      let jobs = $('.jobfirstrow a').text();
      jobs = jobs.split('\n\t\t');
      jobs = jobs.map(job => {
        typeAndSubject = job.slice(0, -3).split('/');
        return `${typeAndSubject[1]} ${typeAndSubject[0]}`.trim();
      });
      jobs = jobs.map(job => job.replace('Classroom Teacher', 'Teacher'))
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
      $('.jobfirstrow a').each(function (index, element) {
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

      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!

      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      const date = mm + '/' + dd + '/' + yyyy;
      let allReapJobs = [];
      const timeStamp = today.getTime();

      for (let i = 0; i < jobs.length; i++) {
        allReapJobs.push({
          jobId: 'pareap' + timeStamp + i,
          schoolId: 'pareap',
          jobTitle: jobs[i],
          jobUrl: jobLinks[i],
          sd: sds[i],
          county: '',
          city: cities[i],
          state: states[i],
          date,
          paid: false
        });
      }
      //remove jobs that city is left blank
      allReapJobs = allReapJobs.filter(job => job.city);
      //Multiple jobs showing up as "Activities Teacher" when proper subject is not selected.
      allReapJobs = allReapJobs.filter(job => job.jobTitle !== 'Activities Teacher')

      return allReapJobs;

    } catch (err) {
      console.log(err);

      return null;
    }
    return;
  },
  talentEdSearch: async (link = 'https://upperdarby.tedk12.com/hire/index.aspx', schoolId = '367') => {
    try {
      console.log('talentEdSearch');
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      let res = await axios.get(link);
      let $ = cheerio.load(res.data);

      // let jobs = $('strong > a').text();

      // jobs.map(job => console.log(job))

      const jobs = [];

      $('strong > a').each(function (i, elem) {
        jobs[i] = $(this).text();
      });
      console.log('jobs');
      console.log(jobs);

      const keywords = [
        'agriculture',
        'art teacher',
        'autistic',
        'behavior',
        'business teacher',
        'chinese',
        'computer science',
        'early childhood',
        'elementary teach', 'first grade teach', 'second grade teach', 'third grade teach', 'fourth grade teach', 'fifth grade teach', '1st grade teach', '2nd grade teach', '3rd grade teach', '4th grade teach', '5th grade teach', 'grade 1 teach', 'grade 2 teach', 'grade 3 teach', 'grade 4 teach', 'grade 5 teach', 'Elementary - various buildings', 'Elementary Summer School-Teachers', 'elementary substitute teacher', 'Grade 5 Elementary',
        'emotional support',
        'english teacher',
        'esl',
        'consumer science',
        'foreign lang',
        'french',
        'german',
        'gifted',
        'guidance',
        'health',
        'latin',
        'language arts',
        'learning support',
        'librarian',
        'life skills',
        'math',
        'music', 'choral teach', 'band teach', 'chorus teach', 'vocal',
        'occupational therapy',
        'physical education', 'phys ed',
        'principal',
        'psychologist',
        'reading specialist',
        'science teach', 'biology', 'physics teach', 'chemistry',
        'social studies', 'history',
        'spanish',
        'special ed',
        'speech and language', 'speech & language',
        'technology teacher', 'technology instructor', 'technology ed']



      const findTeachingJobs = (jobs, keywordArr) => {
        let sdArr = jobs
          .filter(job => keywordArr
            .some(keyword => job.toLowerCase().includes(keyword))
          )

        sdArr = [...new Set(sdArr)].sort();

        return sdArr
      }

      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!

      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      const date = mm + '/' + dd + '/' + yyyy;
      const timeStamp = today.getTime();

      const jobsArray = findTeachingJobs(jobs, keywords);

      return jobsArray.map((job, i) => ({
        jobId: timeStamp + i,
        schoolId: '367',
        jobTitle: job,
        jobUrl: link,
        sd: 'Upper Darby SD',
        city: 'Upper Darby',
        county: 'Delaware County',
        state: 'PA',
        date,
        paid: false,
      }))




      // let sdAndCity = $('.school')
      //   .text()
      //   .replace(/([a-z])([A-Z])/g, '$1;$2')
      //   //rare occations when like 'Morrisville SDMorrisville, PA'
      //   .replace(/([A-Z]{2})([A-Z][a-z])/g, '$1;$2')
      //   //zipcode followed by capital letter
      //   .replace(/([0-9]{4})([A-Z])/g, '$1^$2')
      //   .split(';');

      // let jobLinks = [];
      // $('.jobfirstrow a').each(function (index, element) {
      //   let jobLink = $(element).attr('href');
      //   if (jobLink !== '#') {
      //     jobLinks.push('https://www.pareap.net' + jobLink);
      //   }
      // });

      // let cities = sdAndCity.map(city => city.substr(0, city.indexOf(',')));
      // cities.shift();

      // let states = Array(cities.length).fill('PA');

      // let sds = sdAndCity.map(sd => sd.substr(sd.indexOf('^') + 1));
      // sds.pop();

      // let today = new Date();
      // let dd = today.getDate();
      // let mm = today.getMonth() + 1; //January is 0!

      // const yyyy = today.getFullYear();
      // if (dd < 10) {
      //   dd = '0' + dd;
      // }
      // if (mm < 10) {
      //   mm = '0' + mm;
      // }
      // const date = mm + '/' + dd + '/' + yyyy;
      // let allReapJobs = [];
      // const timeStamp = today.getTime();

      // for (let i = 0; i < jobs.length; i++) {
      //   allReapJobs.push({
      //     jobId: 'pareap' + timeStamp + i,
      //     schoolId: 'pareap',
      //     jobTitle: jobs[i],
      //     jobUrl: jobLinks[i],
      //     sd: sds[i],
      //     county: '',
      //     city: cities[i],
      //     state: states[i],
      //     date,
      //     paid: false
      //   });
      // }
      // //remove jobs that city is left blank
      // allReapJobs = allReapJobs.filter(job => job.city);
      // //Multiple jobs showing up as "Activities Teacher" when proper subject is not selected.
      // allReapJobs = allReapJobs.filter(job => job.jobTitle !== 'Activities Teacher')

      // return allReapJobs;

    } catch (err) {
      console.log(err);

      return null;
    }
    return;
  },
};
