const mongoose = require('mongoose');
const requireAdmin = require('../middlewares/requireLogin');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { getDate } = require('../utils/helper');

// const school_district_data = require('../cron_jobs/data/school_districts.json');

// const Survey = mongoose.model('surveys');
// const Paid = mongoose.model('paidjobs');
var School = require('../models/School');
const Job = require('../models/Job');
const PaidJob = require('../models/PaidJob');
const { stringToSlug } = require('../utils/helper');

module.exports = app => {
  //returns all jobs
  app.get('/api/jobs/pa', (req, res) => {
    Job.find({}).exec(function (err, jobs) {
      if (err) {
        res.send('error has occured');
      } else {
        res.json(jobs);
      }
    });
  });

  //returns all paid jobs (looks to be a seperate database right now.)
  app.get('/api/paid-jobs/pa', (req, res) => {
    PaidJob.find({}).exec(function (err, jobs) {
      if (err) {
        res.send('error has occured');
      } else {
        res.json(jobs);
      }
    });
  });

  //save a paid job to database
  app.post(
    '/api/paid-jobs/pa',
    requireLogin,
    requireCredits,
    async (req, res) => {
      const { jobTitle, sd, city, state, county, description } = req.body;
      var today = getDate();
      //slugify jobTitle
      let link = '/jobs/' + stringToSlug(jobTitle);

      //check if there are any other jobs with that slug
      let notUnique = await PaidJob.findOne({ link: link });

      //add a unique number string (based on date) to end of slug
      if (notUnique) {
        let code = await new Date().getTime();
        link = link + '-' + code;
      }

      const paidjob = new PaidJob({
        jobTitle,
        link,
        sd,
        city,
        state,
        county,
        description,
        paid: true,
        active: true,
        date: today
      });

      try {
        await paidjob.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        await res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
      res.redirect('/');
    }
  );

  //save job
  app.post(
    '/api/jobs/pa',
    requireLogin,
    //requireAdmin,
    async (req, res) => {
      // console.log('jobROutes here.')
      const { jobId, jobTitle, schoolId, jobUrl, date } = req.body.jobInfo;

      const existingJob = await Job.findOne({ jobId });
      const sdInfo = await School.findOne({ id: schoolId });
      const { sd, city, state, county } = sdInfo;

      //replace current job
      if (existingJob) {
        //delete old job
        await existingJob.remove();
      }

      const job = new Job({
        jobId,
        schoolId,
        jobTitle,
        jobUrl,
        date,
        sd,
        city,
        county,
        state,
        paid: false,
      });

      try {
        await job.save();
        const jobs = await Job.find({});
        res.json(jobs);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );



  app.post(
    '/api/jobs/pa-update-dates',
    requireLogin,
    //requireAdmin,
    async (req, res) => {
      const { schoolId } = req.body;
      const today = getDate();

      const id = schoolId.toString();
      try {
        const jobsWithinSD = await Job.find({ schoolId: id });
        const replacementJobsWithinSD = jobsWithinSD.map(job => job)
        if (jobsWithinSD && jobsWithinSD.length > 0) {
          jobsWithinSD.forEach(async job => await job.remove());
          replacementJobsWithinSD.forEach(async (job) => {
            const { jobId, schoolId, jobTitle, jobUrl, date, sd, city, county, state, paid } = job;
            const newJob = new Job({
              jobId,
              schoolId,
              jobTitle,
              jobUrl,
              date: today,
              sd,
              city,
              county,
              state,
              paid,
            });
            await newJob.save();
          }
          )
        }

        const jobs = await Job.find({});
        res.json(jobs);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );

  app.delete(
    '/api/jobs/pa',
    requireLogin,
    //requireAdmin,
    async (req, res) => {

      const { id } = req.body;
      try {
        await Job.deleteOne({ jobId: id }, function (err) {
          if (err) return handleError(err);
          // deleted at most one tank document
        });
        const jobs = await Job.find({});
        jobs.sort((a, b) => b.jobTitle - a.jobTitle)
        res.json(jobs);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};
