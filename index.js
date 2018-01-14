const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
// require('./models/School');
// require('./models/Job');

require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// School.create(
//   {
//     id: 0,
//     link:
//       'http://www.ahsd.org/index.php?option=com_content&view=article&id=120&Itemid=225',
//     sd: 'Abington Heights SD',
//     city: 'Clarks Summit',
//     state: 'PA',
//     county: 'Lackawanna County',
//     disableSearch: false,
//     customSearch: false
//   },
//   function(err, doc) {
//     // At this point the jobs collection is created.
//   }
// );

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/jobRoutes')(app);
require('./cron_jobs/crawlJobs');

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  //Express will sever up the index.html file
  //if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
