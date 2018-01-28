const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// const school_district_data = require('../cron_jobs/data/school_districts.json');

const Survey = mongoose.model('surveys');
// const Paid = mongoose.model('paidjobs');
var School = require('../models/School');
const Job = require('../models/Job');
const PaidJob = require('../models/PaidJob');
const util = require('../utils/stringToSlug');

module.exports = app => {
  app.get('/api/jobs/pa', (req, res) => {
    Job.find({}).exec(function(err, jobs) {
      if (err) {
        res.send('error has occured');
      } else {
        res.json(jobs);
      }
    });
  });

  app.get('/api/paid-jobs/pa', (req, res) => {
    PaidJob.find({}).exec(function(err, jobs) {
      if (err) {
        res.send('error has occured');
      } else {
        res.json(jobs);
      }
    });
  });

  app.post(
    '/api/paid-jobs/pa',
    requireLogin,
    requireCredits,
    async (req, res) => {
      const { jobTitle, sd, city, state, county, description } = req.body;
      //slugify jobTitle
      console.log('Posting to /api/paid-jobs/pa');
      let link = util.stringToSlug(jobTitle);

      //check if there are any other jobs with that link

      //if so give it a unique slug and check again

      const paidjob = new PaidJob({
        jobTitle,
        link,
        sd,
        city,
        state,
        county,
        description,
        paid: true,
        active: true,
        date: Date.now()
      });

      try {
        await paidjob.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        await res.send(user);
        // await res.redirect('/');
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};
