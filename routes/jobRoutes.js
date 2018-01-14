const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
// const school_district_data = require('../cron_jobs/data/school_districts.json');

const Survey = mongoose.model('surveys');
var School = require('../models/School');
const Job = require('../models/Job');

module.exports = app => {
  app.get('/api/jobs/pa', (req, res) => {
    console.log('fetching jobs');
    Job.find({}).exec(function(err, jobs) {
      if (err) {
        res.send('error has occured');
      } else {
        console.log(jobs);
        res.json(jobs);
      }
    });
  });

  //   app.get('/api/jobs/pa', (req, res) => {
  //     res.send(school_district_data);
  //   });

  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  //   app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
  //     const { title, subject, body, recipients } = req.body;

  //     const survey = new Survey({
  //       title,
  //       subject,
  //       body,
  //       recipients: recipients.split(',').map(email => ({ email })),
  //       _user: req.user.id,
  //       dateSent: Date.now()
  //     });

  //     // Great place to send an email!
  //     const mailer = new Mailer(survey, surveyTemplate(survey));

  //     try {
  //       await mailer.send();
  //       await survey.save();
  //       req.user.credits -= 1;
  //       const user = await req.user.save();

  //       res.send(user);
  //     } catch (err) {
  //       res.status(422).send(err);
  //     }
  //   });
};
