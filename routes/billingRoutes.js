const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 1999,
      currency: 'usd',
      description: '$19.99 For 1 Job Post',
      source: req.body.id
    });

    req.user.credits += 1;
    const user = await req.user.save();
    res.send(user);
  });

  app.post('/api/stripe/1-job-post', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 1999,
      currency: 'usd',
      description: '$19.99 For 1 Job Post',
      source: req.body.id
    });

    req.user.credits += 1;
    const user = await req.user.save();
    res.send(user);
  });

  app.post('/api/stripe/5-job-posts', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 4999,
      currency: 'usd',
      description: '$49.99 For 5 Job Posts',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
