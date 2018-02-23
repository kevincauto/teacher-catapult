const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

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
      //else we need to send a signal to prompt the user to pick a role.
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
    console.log('I SELECTED TEACHER!!');
    req.user.teacher = true;
    req.user.recruiter = false;
    const user = await req.user.save();
    res.send(user);
  });

  app.get('/api/recruiter-user', requireLogin, async (req, res) => {
    console.log('I SELECTED RECRUITER!!');
    req.user.recruiter = true;
    req.user.teacher = false;
    const user = await req.user.save();
    res.send(user);
  });

  // app.get(
  //   '/auth/username',
  //   passport.authenticate('local', { failureRedirect: '/' }),
  //   function(req, res) {
  //     res.send(req.user);

  //     res.redirect('/');
  //   }
  // );
};

// app.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
