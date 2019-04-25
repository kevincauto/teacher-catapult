const axios = require('axios');
const cheerio = require('cheerio');
const Job = require('../models/Job');

require('events').EventEmitter.defaultMaxListeners = 200;

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
      jobs = jobs.map(job => job.includes('Berks County Intermediate Unit #14') ? 'Berks County Intermediate Unit #14' : job)
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
        let county = '';
        if (bucksCountyTowns.includes(cities[i])) { county = 'Bucks County' }
        if (montgomeryCountyTowns.includes(cities[i])) { county = 'Montgomery County' }
        if (chesterCountyTowns.includes(cities[i])) { county = 'Chester County' }
        if (delawareCountyTowns.includes(cities[i])) { county = 'Delaware County' }
        if (cities[i] === 'Philadelphia') { county = 'Philadelphia County' }

        allReapJobs.push({
          jobId: 'pareap' + timeStamp + '-' + i,
          schoolId: 'pareap',
          jobTitle: jobs[i],
          jobUrl: jobLinks[i],
          sd: sds[i],
          county,
          city: cities[i],
          state: states[i],
          date,
          paid: false
        });
      }
      //remove jobs that city is left blank
      allReapJobs = allReapJobs.filter(job => job.city);
      //Multiple jobs showing up as 'Activities Teacher' when proper subject is not selected.
      allReapJobs = allReapJobs.filter(job => job.jobTitle !== 'Activities Teacher')
      console.log(allReapJobs)
      if (allReapJobs.length > 20) {
        await Job.find({ schoolId: 'pareap' }).remove(() => { console.log('pareap jobs removed.') });
        await allReapJobs.forEach(job => {
          new Job(job).save(
            (err) => { if (err) { console.error(error) } })
        })
        console.log('pareap jobs saved.')
      }


      return true;

    } catch (err) {
      console.log(err);

      return null;
    }
  }
};

const bucksCountyTowns = [
  'Bedminster',
  'Bensalem',
  'Blooming Glen',
  'Bristol',
  'Buckingham',
  'Carversville',
  'Chalfont',
  'Croydon',
  'Danboro',
  'Doylestown',
  'Dublin',
  'Durham',
  'Erwinna',
  'Fairless Hills',
  'Feasterville Trevose',
  'Ferndale',
  'Forest Grove',
  'Fountainville',
  'Furlong',
  'Hilltown',
  'Holicong',
  'Jamison',
  'Kintnersville',
  'Lahaska',
  'Langhorne',
  'Levittown',
  'Line Lexington',
  'Lumberville',
  'Mechanicsville',
  'Milford Square',
  'Morrisville',
  'New Hope',
  'Newtown',
  'Ottsville',
  'Penns Park',
  'Perkasie',
  'Pineville',
  'Pipersville',
  'Plumsteadville',
  'Point Pleasant',
  'Quakertown',
  'Revere',
  'Richboro',
  'Richlandtown',
  'Riegelsville',
  'Rushland',
  'Sellersville',
  'Silverdale',
  'Solebury',
  'Southampton',
  'Spinnerstown',
  'Springtown',
  'Trumbauersville',
  'Upper Black Eddy',
  'Warminster',
  'Warrington',
  'Washington Crossing',
  'Wycombe',
  'Zionhill',
]

montgomeryCountyTowns = ['Abington', 'Ambler', 'Ardmore', 'Audubon', 'Bala Cynwyd', 'Blue Bell', 'Bridgeport', 'Bryn Athyn', 'Cedars', 'Cheltenham', 'Collegeville', 'Colmar', 'Conshohocken', 'Creamery', 'Dresher', 'Eagleville', 'East Greenville', 'Elkins Park', 'Fairview Village', 'Flourtown', 'Fort Washington', 'Franconia', 'Frederick', 'Gilbertsville', 'Gladwyne', 'Glenside', 'Green Lane', 'Gwynedd', 'Gwynedd Valley', 'Harleysville', 'Hatboro', 'Hatfield', 'Haverford', 'Horsham', 'Huntingdon Valley', 'Jenkintown', 'King of Prussia', 'Kulpsville', 'Lafayette Hill', 'Lansdale', 'Lederach', 'Mainland', 'Merion Station', 'Mont Clare', 'Montgomeryville', 'Narberth', 'Norristown', 'North Wales', 'Oaks', 'Oreland', 'Palm', 'Pennsburg', 'Perkiomenville', 'Plymouth Meeting', 'Pottstown', 'Red Hill', 'Royersford', 'Salford', 'Salfordville', 'Sassamansville', 'Schwenksville', 'Skippack', 'Souderton', 'Spring House', 'Spring Mount', 'Sumneytown', 'Telford', 'Tylersport', 'West Conshohocken', 'West Point', 'Willow Grove', 'Worcester', 'Woxall', 'Wyncote', 'Wynnewood', 'Zieglerville'];
chesterCountyTowns = ['Atglen', 'Avondale', 'Berwyn', 'Birchrunville', 'Brandamore', 'Chatham', 'Chester Springs', 'Coatesville', 'Cochranville', 'Devault', 'Devon', 'Downingtown', 'Elverson', 'Exton', 'Glenmoore', 'Honey Brook', 'Immaculata', 'Kemblesville', 'Kennett Square', 'Kimberton', 'Landenberg', 'Lewisville', 'Lincoln University', 'Lionville', 'Lyndell', 'Malvern', 'Modena', 'New London', 'Nottingham', 'Oxford', 'Paoli', 'Parker Ford', 'Parkesburg', 'Phoenixville', 'Pomeroy', 'Pottstown', 'Sadsburyville', 'Saint Peters', 'Spring City', 'Thorndale', 'Toughkenamon', 'Unionville', 'Uwchland', 'Valley Forge', 'West Chester', 'West Grove', 'Westtown'];
delawareCountyTowns = ["Aston", "Brookhaven", "Broomall", "Bryn Mawr", "Chadds Ford", "Chester", "Chester Heights", "Cheyney", "Clifton Heights", "Concordville", "Crum Lynne", "Darby", "Drexel Hill", "Edgemont", "Essington", "Folcroft", "Folsom", "Garnet Valley", "Glen Mills", "Glen Riddle Lima", "Glenolden", "Havertown", "Holmes", "Lansdowne", "Lenni", "Marcus Hook", "Media", "Morton", "Newtown Square", "Norwood", "Philadelphia", "Prospect Park", "Ridley Park", "Sharon Hill", "Springfield", "Swarthmore", "Thornton", "Upper Darby", "Villanova", "Wallingford", "Wayne", "Woodlyn"];