const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');
// const requireCredits = require('../middlewares/requireCredits');
const requireRecruiter = require('../middlewares/requireRecruiter');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { getDate } = require('../utils/helper');

// const school_district_data = require('../cron_jobs/data/school_districts.json');

// const Survey = mongoose.model('surveys');
// const Paid = mongoose.model('paidjobs');
var School = require('../models/School');
// const Job = require('../models/Job');
// const PaidJob = require('../models/PaidJob');

const Lead = require('../models/Lead');

module.exports = app => {
  app.get('/api/leads', (req, res) => {
    Lead.find({}).exec(function(err, leads) {
      if (err) {
        res.send('error has occured');
      } else {
        res.json(leads);
      }
    });
  });

  // app.get('/api/paid-jobs/pa', (req, res) => {
  //   PaidJob.find({}).exec(function(err, jobs) {
  //     if (err) {
  //       res.send('error has occured');
  //     } else {
  //       res.json(jobs);
  //     }
  //   });
  // });
};
