const express = require('express');
const axios = require('axios');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');

const waitUntil = require('wait-until');
const schedule = require('node-schedule');
const emitter = require('emitter');

const School = require('../models/School');
const Job = require('../models/Job');

require('events').EventEmitter.defaultMaxListeners = 200;

const { getDate } = require('../utils/helper');
const { pareapSearch } = require('./customSearches');

let counter = 0;
let allJobPosts = [];
let resultsLog = [];
let today;

async function doCustomSearch(id, link) {
  //use the pareapSearch function for any pareap.net url
  if (/pareap.net/.test(link)) {
    let { jobs, error } = await pareapSearch(id, link);
    resultsLog.push({ link, error });
    for (job of jobs) {
      allJobPosts.push(job);
    }

    resultsLog.push({ link, error: true });
    return;
  }
}

const searchForJobs = async district => {
  let { id, county, city, state, sd, link, customSearch } = district;

  if (customSearch) {
    await doCustomSearch(id, link);
    return;
  }
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
          allJobPosts.push({
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
        }
      }
    }
    resultsLog.push({ link, error: false });
  } catch (err) {
    resultsLog.push({ link, error: true });
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

function saveNewJobs() {
  console.log('Adding Jobs to Database...');
  for (var singleJob in allJobPosts) {
    new Job(allJobPosts[singleJob]).save().catch(err => {
      console.log(err.response);
    });
  }
}

const scraper = schedule.scheduleJob('22 * * * *', function() {
  resultsLog = [];
  today = getDate();
  counter = 0;
  allJobPosts = [];

  School.find({}).exec(function(err, schools) {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < schools.length; i++) {
        searchForJobs(schools[i]);
      }
      waitUntil()
        .interval(3000)
        .times(schools.length)
        .condition(function() {
          console.log(resultsLog.length);
          console.log(schools.length);
          return resultsLog.length >= schools.length;
        })
        .done(async function(result) {
          console.log(resultsLog);
          let jobsAreRemoved = await removeOldJobs();
          if (jobsAreRemoved) {
            saveNewJobs();
            console.log(allJobPosts);
          }
        });
    }
  });
});

module.exports = app => {};
