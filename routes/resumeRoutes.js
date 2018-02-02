const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

var School = require('../models/School');
const Job = require('../models/Job');
const PaidJob = require('../models/PaidJob');
// const User = require('../models/User');

module.exports = app => {
  // app.get('/api/jobs/pa', (req, res) => {
  //   Job.find({}).exec(function(err, jobs) {
  //     if (err) {
  //       res.send('error has occured');
  //     } else {
  //       res.json(jobs);
  //     }
  //   });
  // });

  // app.get('/api/paid-jobs/pa', (req, res) => {
  //   PaidJob.find({}).exec(function(err, jobs) {
  //     if (err) {
  //       res.send('error has occured');
  //     } else {
  //       res.json(jobs);
  //     }
  //   });
  // });

  app.post(
    '/api/user-resume',
    requireLogin,

    async (req, res) => {
      const {
        first,
        last,
        email,
        certification,
        certMonth,
        certYear,
        zipcode,
        relocate,
        substitute,
        resume,
        agree
      } = req.body;

      let startDate = `${certMonth}-${certYear}`;
      try {
        req.user.first = first;
        req.user.last = last;
        req.user.email = email;
        req.user.certifiation = certification;
        req.user.startDate = startDate;
        req.user.zipcode = zipcode;
        req.user.relocate = relocate;
        req.user.substitue = substitute;
        req.user.resume = resume;
        req.user.agree = agree;

        const user = await req.user.save();
        console.log(user);
      } catch (err) {
        res.status(422).send(err);
      }
      res.redirect('/');
    }
  );
};
