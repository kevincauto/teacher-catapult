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

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

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

  app.post('/api/paid-jobs/pa', requireCredits, async (req, res) => {
    const { jobTitle, sd, city, state, county, description } = req.body;
    //slugify jobTitle
    console.log('Posting to /api/paid-jobs/pa');
    let link = string_to_slug(jobTitle);

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
      // req.user.credits -= 1;
      // const user = await req.user.save();

      // res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //   app.get('/api/jobs/pa', (req, res) => {
  //     res.send(school_district_data);
  //   });

  // app.get('/api/surveys/thanks', (req, res) => {
  //   res.send('Thanks for voting!');
  // });

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
