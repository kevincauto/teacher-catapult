const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
var formidable = require('formidable');
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

  // app.post('/api/user-resume', requireLogin, async (req, res) => {
  app.post('/api/user-resume', async (req, res) => {    
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

    var form = new formidable.IncomingForm();

    console.log('Loading files ...')
    form.parse(req,async function(err, fields, files) {
      console.log({
        fields: fields,
        files: files
      })

      let startDate = `${certMonth}-${certYear}`;
      try {
        req.user.first = fields.first;
        req.user.last = fields.last;
        req.user.email = fields.email;
        req.user.certifiation = fields.certification;
        req.user.startDate = fields.startDate;
        req.user.zipcode = fields.zipcode;
        req.user.relocate = fields.relocate;
        req.user.substitue = fields.substitute;
        req.user.resume = files.file;
        req.user.agree = fields.agree;

        const user = await req.user.save();
        res.send('success');
      } catch (err) {
        console.log(err)
        res.status(422).send(err);
      }
      // res.redirect('/');
    })
    // await console.log(req.body);
    // let startDate = `${certMonth}-${certYear}`;
    // try {
    //   req.user.first = first;
    //   req.user.last = last;
    //   req.user.email = email;
    //   req.user.certifiation = certification;
    //   req.user.startDate = startDate;
    //   req.user.zipcode = zipcode;
    //   req.user.relocate = relocate;
    //   req.user.substitue = substitute;
    //   req.user.resume = resume;
    //   req.user.agree = agree;

    //   const user = await req.user.save();
    //   res.send('success');
    // } catch (err) {
    //   res.status(422).send(err);
    // }
    // res.redirect('/');
  });
};
