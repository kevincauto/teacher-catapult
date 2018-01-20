const express = require('express');
const axios = require('axios');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');
const School = require('../models/School');
const Job = require('../models/Job');
const waitUntil = require('wait-until');
var emitter = require('emitter');
require('events').EventEmitter.defaultMaxListeners = 200;

var schedule = require('node-schedule');
let counter = 0;
let finalData = [];
let list = [];
let isDeleted = false;
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

const makeARequest = async district => {
  let { county, city, state, sd, link } = district;

  try {
    res = await axios.get(link);

    const $ = cheerio.load(res.data);
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
            link,
            sd,
            county,
            city,
            state,
            date: today,
            paid: false
          });
          console.log({
            id: counter,
            link,
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
    list.push({ link, error: false });
  } catch (err) {
    console.log(link);
    list.push({ link, error: true });
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      console.log(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
};

async function removeOldJobs() {
  try {
    await Job.remove({});
    console.log('Successfully removed all old jobs');
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

function pushNewJobs() {
  console.log('Adding Jobs to Database...');
  for (var singleJob in finalData) {
    new Job(finalData[singleJob]).save().catch(err => {
      console.log(err.response);
    });
  }
}

var scraper = schedule.scheduleJob('35 * * * *', function() {
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
      waitUntil()
        .interval(3000)
        .times(schools.length)
        .condition(function() {
          console.log(list.length);
          console.log(schools.length);
          return list.length === schools.length;
        })
        .done(async function(result) {
          console.log(list);
          let jobsAreRemoved = await removeOldJobs();
          if (jobsAreRemoved) {
            pushNewJobs();
          }
        });
    }
  });
});

module.exports = app => {};
