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
    // const {
    //   first,
    //   last,
    //   email,
    //   certification,
    //   certMonth,
    //   certYear,
    //   zipcode,
    //   relocate,
    //   substitute,
    //   resume,
    //   agree
    // } = req.body;

    var form = new formidable.IncomingForm();

    console.log('Loading files ...');
    form.parse(req, async function(err, fields, files) {
      // console.log({
      //   fields: fields,
      //   files: files
      // });

      // console.log(files.file);

      var fs = require('fs');

      let fileBuffer;
      let json;
      console.log('fire 1');
      await fs.readFile(files.file.path, async function(err, data) {
        fileBuffer = data;
        console.log(fileBuffer);
        json = JSON.stringify(fileBuffer);
        // console.log(json);
        req.user.resume = json;
        console.log('fire1.1');
        await req.user.save();
        console.log('fire1.2');
        // console.log(req.user);
      });
      console.log('fire 2');
      let startDate = `${fields.certMonth}-${fields.certYear}`;
      try {
        req.user.first = fields.first;
        req.user.last = fields.last;
        req.user.email = fields.email;
        req.user.certifications = fields.certifications;
        req.user.startDate = startDate;
        req.user.zipcode = fields.zipcode;
        req.user.relocate = fields.relocate;
        req.user.substitute = fields.substitute;

        // req.user.resume = files.file;
        req.user.agree = fields.agree;
        console.log('fire3');
        const user = await req.user.save();
        console.log('fire4');
        console.log(fields.certifications);

        res.send('success');
      } catch (err) {
        console.log(err);
        res.status(422).send(err);
      }
      // res.redirect('/');
    });
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
