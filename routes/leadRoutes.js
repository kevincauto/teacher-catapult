const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');
// const requireCredits = require('../middlewares/requireCredits');
const requireRecruiter = require('../middlewares/requireRecruiter');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { getDate, convertToFormattedDate } = require('../utils/helper');

const User = require('../models/User');
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

  app.get('/api/user-leads', (req, res) => {
    User.find({ agree: true }).exec(function(err, userleads) {
      if (err) {
        res.send('error has occured');
      } else {
        //filter down to just teachers who agreed to share resume.
        userleads = userleads.filter(obj => {
          const { recruiter, agree } = obj;
          if (!recruiter && agree) {
            return true;
          }
          return false;
        });

        userleads = userleads.map(obj2 => {
          let {
            first,
            last,
            email,
            certifications,
            startDate,
            zipcode,
            relocate,
            substitute,
            lastUpdated,
            resume
          } = obj2;

          lastUpdated = convertToFormattedDate(lastUpdated);

          console.log(lastUpdated);
          return {
            first,
            last,
            email,
            certifications,
            startDate,
            zipcode,
            relocate,
            substitute,
            lastUpdated,
            resume
          };
        });

        res.json(userleads);
      }
    });
  });
};
