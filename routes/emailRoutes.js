const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/mailchimp', (req, res) => {
    console.log(req);
    res.send({ Hello: 'Mailchimp' });
  });

  //   app.get('/api/surveys/thanks', (req, res) => {
  //     res.send('Thanks for voting!');
  //   });

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
