const keys = require('../config/keys');
const request = require('superagent');
const mailchimpInstance = 'us7';

module.exports = app =>
  app.post('/api/mailchimp', function(req, res) {
    request
      .post(
        'https://' +
          mailchimpInstance +
          '.api.mailchimp.com/3.0/lists/' +
          keys.mailchimpListUniqueId +
          '/members/'
      )
      .set('Content-Type', 'application/json;charset=utf-8')
      .set(
        'Authorization',
        'Basic ' + new Buffer('any:' + keys.mailchimpApiKey).toString('base64')
      )
      .send({
        email_address: req.body.email,
        status: 'subscribed'
      })
      .end(function(err, response) {
        if (
          response.status < 300 ||
          (response.status === 400 && response.body.title === 'Member Exists')
        ) {
          res.send('Signed Up!');
          console.log('signed up');
        } else {
          res.send('Sign Up Failed :(');
          console.log('sign up failed');
          console.log(response.body.title);
        }
      });
  });
