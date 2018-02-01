const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

var School = require('../models/School');
const Job = require('../models/Job');
const PaidJob = require('../models/PaidJob');

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

      console.log('api/user-resume is firing!');
      console.log(`first: ${first}, agree: ${agree}`);

      // const paidjob = new {
      //   jobTitle,
      //   link,
      //   sd,
      //   city,
      //   state,
      //   county,
      //   description,
      //   paid: true,
      //   active: true,
      //   date: today
      // }();

      // try {
      //   await paidjob.save();
      //   req.user.credits -= 1;
      //   const user = await req.user.save();

      //   await res.send(user);
      // } catch (err) {
      //   res.status(422).send(err);
      // }
      // res.redirect('/');
    }
  );
};
