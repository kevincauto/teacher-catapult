const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const formidable = require('formidable');
const zipcodes = require('zipcodes');

const Job = require('../models/Job');
const PaidJob = require('../models/PaidJob');
// const User = require('../models/User');

module.exports = app => {
  app.post('/api/user-resume', async (req, res) => {
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

      await fs.readFile(files.file.path, async function(err, data) {
        fileBuffer = data;
        json = JSON.stringify(fileBuffer);
        req.user.resume = json;
        await req.user.save();
      });

      let certifications = fields.certifications.split(',');
      console.log(certifications);
      let zipcodeObj = zipcodes.lookup(fields.zipcode);
      let { city, state } = zipcodeObj;
      let startDate = `${fields.certMonth}-${fields.certYear}`;
      try {
        req.user.first = fields.first;
        req.user.last = fields.last;
        req.user.email = fields.email;
        req.user.certifications = certifications;
        req.user.startDate = startDate;
        req.user.city = city || '';
        req.user.state = state || 'PA';
        req.user.zipcode = fields.zipcode;
        req.user.relocate = fields.relocate;
        req.user.substitute = fields.substitute;
        req.user.lastUpdated = Date.now();

        // req.user.resume = files.file;
        req.user.agree = fields.agree;
        const user = await req.user.save();
        console.log(user.city);
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
