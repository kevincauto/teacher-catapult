const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');
// const requireCredits = require('../middlewares/requireCredits');
const requireRecruiter = require('../middlewares/requireRecruiter');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { getDate } = require('../utils/helper');

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
        console.log(userleads);
        res.json(userleads);
      }
    });
  });
};
