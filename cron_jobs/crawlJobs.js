const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

const waitUntil = require('wait-until');
const schedule = require('node-schedule');
const emitter = require('emitter');

const School = require('../models/School');
const Job = require('../models/Job');

require('events').EventEmitter.defaultMaxListeners = 200;

const { pareapSearch } = require('./customSearches');
const { standardSearch } = require('./standardSearch');

let allJobPosts = [];
let resultsLog = [];

async function doCustomSearch(id, link) {
  //use the pareapSearch function for any pareap.net url
  if (/pareap.net/.test(link)) {
    let { jobs, error } = await pareapSearch(id, link);
    resultsLog.push({ link, error });
    for (job of jobs) {
      allJobPosts.push(job);
    }
    return;
  }
  resultsLog.push({ link, error: true });
  return;
}

const searchForJobs = async district => {
  const { id, link, customSearch } = district;
  if (customSearch) {
    doCustomSearch(id, link);
    return;
  }
  let { jobs, error } = await standardSearch(id, link, district);
  resultsLog.push({ link, error });
  for (job of jobs) {
    allJobPosts.push(job);
  }
  return;
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

const scheduledJobCrawler = schedule.scheduleJob('26 * * * *', function() {
  resultsLog = [];
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
          console.log(`${resultsLog.length}/${schools.length}`);
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
