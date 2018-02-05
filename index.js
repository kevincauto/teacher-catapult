const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const fileUpload = require('express-fileupload');

require('./models/User');
require('./models/Survey');
require('./models/School');
require('./models/Job');
require('./models/PaidJob');
require('./models/Lead');

require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// app.use(fileUpload());

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
require('./routes/emailRoutes')(app);
require('./routes/resumeRoutes')(app);
require('./routes/leadRoutes')(app);
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
