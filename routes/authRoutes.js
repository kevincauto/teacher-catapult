const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const { getDate } = require('../utils/helper');
const keys = require('../config/keys');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (req.user.recruiter) {
        res.redirect('/recruiter/dashboard');
      }
      if (req.user.teacher) {
        res.redirect('/teaching-jobs-in-pa');
      }
      //if user has not designated a role, they will be prompted.
      res.redirect('/select-role');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/teacher-user', requireLogin, async (req, res) => {
    req.user.teacher = true;
    req.user.recruiter = false;
    const user = await req.user.save();
    res.send(user);
  });

  app.get('/api/recruiter-user', requireLogin, async (req, res) => {
    const user = await req.user.save();
    res.send(user);
  });

  app.post('/api/recruiter-application', requireLogin, async (req, res) => {
    const today = getDate();
    const { jobTitle, sd, first, last, email, phone } = req.body;
    req.user.recruiter = true;
    req.user.teacher = false;
    req.user.jobTitle = jobTitle;
    req.user.sd = sd;
    req.user.first = first;
    req.user.last = last;
    req.user.email = email;
    req.user.phone = phone;
    req.user.lastUpdated = today;

    const user = await req.user.save();
    res.redirect('/recruiter/dashboard');

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'AOL',
      auth: {
        user: keys.aolEmail,
        pass: keys.aolPassword
      }
    });

    const emailBody = `
    Job Title: ${jobTitle}
    Company/SD: ${sd}
    First: ${first}
    Last: ${last}
    Email: ${email}
    Phone: ${phone}
    Updated: ${today}
`;

    var mailOptions = {
      from: keys.aolEmail,
      to: 'kevincauto@aol.com',
      subject: 'Recruiter Sign-Up',
      text: emailBody
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
};
