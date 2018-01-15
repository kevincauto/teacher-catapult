const express = require('express');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');
const School = require('../models/School');
const Job = require('../models/Job');

// require('events').EventEmitter.defaultMaxListeners = 100;

var schedule = require('node-schedule');

let counter = 0;
let finalData = [];

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '-' + dd + '-' + yyyy;

const makeARequest = district => {
  let url = district.link;
  let { county, city, state, sd } = district;
  console.log('#' + counter + ': ' + url);
  request(url, function(err, res, body) {
    if (err) {
      console.log(err);
      return;
    }
    if (res === undefined) {
      console.log('no response');
      return;
    }
    console.log(res.statusCode);
    if (res.statusCode !== 200) {
      return;
    }
    const $ = cheerio.load(body);
    const allText = $('body').text();
    const jobTypes = require('./data/keywords');

    let keywords;

    for (let i = 0; i < jobTypes.length; i++) {
      keywords = jobTypes[i].keywords;

      for (let j = 0; j < keywords.length; j++) {
        let re = new RegExp(keywords[j], 'gi');
        var num = allText.search(re);

        if (num !== -1) {
          finalData.push({
            id: counter++,
            jobTitle: jobTypes[i].jobTitle,
            link: url,
            sd,
            county,
            city,
            state,
            date: today,
            paid: false
          });
          console.log({
            id: counter,
            link: url,
            jobTitle: jobTypes[i].jobTitle,
            sd,
            county,
            city,
            state,
            date: today,
            paid: false
          });
        }
      }
    }
  });
};

function removeOldJobs() {
  Job.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully removed all old jobs');
    }
  });
}

function pushNewJobs() {
  console.log('Adding Jobs to Database...');

  for (var singleJob in finalData) {
    new Job(finalData[singleJob]).save().catch(err => {
      console.log(err.message);
    });
  }
}

var scraper = schedule.scheduleJob('57 * * * *', function() {
  sdArr = require('./data/school_district_data');

  School.find({}).exec(function(err, schools) {
    if (err) {
      console.log(err);
    } else {
      counter = 0;
      finalData = [];
      console.log('firing off the scraper!');
      for (let i = 0; i < schools.length; i++) {
        makeARequest(schools[i]);
      }
      setTimeout(removeOldJobs, 3 * 55 * 1000);
      setTimeout(pushNewJobs, 3 * 60 * 1000);
    }
  });
});

module.exports = app => {};
