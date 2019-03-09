const mongoose = require('mongoose');
const requireAdmin = require('../middlewares/requireLogin');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const { getDate } = require('../utils/helper');

const School = require('../models/School');

module.exports = app => {
  //returns all schools
  app.get('/api/schools', (req, res) => {
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
      try {
        const { id, url } = req.body;
        const existingSchool = await School.findOne({ id });


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
