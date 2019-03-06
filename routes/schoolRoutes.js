const mongoose = require('mongoose');
const requireAdmin = require('../middlewares/requireLogin');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const { getDate } = require('../utils/helper');

const School = require('../models/School');

module.exports = app => {
  //returns all schools
  app.get('/api/schools', (req, res) => {
    console.log('schoolRoutes.js has been called (backend)')
    School.find({}).exec(function (err, schools) {
      if (err) {
        res.send('error has occured');
      } else {
        schools.sort((a, b) => a.id - b.id);
        res.json(schools);
      }
    });
  });

  app.post(
    '/api/schools',
    requireLogin,
    //requireAdmin,
    async (req, res) => {
      console.log('in schoolRoutes');
      try {
        const { id, url } = req.body;
        const existingSchool = await School.findOne({ id });
        console.log('existingSchool');
        console.log(existingSchool);

        if (existingSchool) {
          existingSchool.link = url;
        }
        await existingSchool.save();
        const schools = await School.find({});
        schools.sort((a, b) => a.id - b.id);
        res.json(schools);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );


};
