const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

var Nightmare = require('nightmare'),
  nightmare = Nightmare();
//To actually view browser: { show: true }

const waitUntil = require('wait-until');
const schedule = require('node-schedule');
const emitter = require('emitter');

const School = require('../models/School');
const Job = require('../models/Job');

require('events').EventEmitter.defaultMaxListeners = 200;

const { pareapSearch } = require('./customSearches');
const { standardSearch } = require('./standardSearch');
// const { paEducatorSearch } = require('./paEducatorSearch');

let allJobPosts = [];
let resultsLog = [];

function paEducatorSearch() {
  var jobArr = [];
  let done = false;

  var strings = [
    'input#ctl00_appMainContentTopPH_rdSort_2',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(4)',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(5)',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(6)',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(7)'
  ];
  strings
    .reduce(function (accumulator, string) {
      return accumulator.then(function (results) {
        return nightmare
          .goto('https://www.paeducator.net/')
          .wait('body')
          .click('input#ctl00_MainContent_ctl00_btnSearch')
          .wait(5000)
          .click('input#ctl00_appMainContentTopPH_rdSort_2')
          .wait(3000)
          .click(string)
          .wait(3000)
          .evaluate(() => {
            let arr = [];
            let counter = 0;

            for (let i = 0; i <= 18; i += 2) {
              var p = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblPosition`;
              let c = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblCounty`;
              let d = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblDatePosted`;
              let s = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblPositionType`;
              let position = document.querySelector(p).innerHTML;
              let city = document.querySelector(c).innerHTML;
              let date = document.querySelector(d).innerHTML;
              date = date.replace(/\//g, '-');
              let sd = document.querySelector(s).innerHTML;
              counter++;
              arr.push({
                id: 'paed' + counter,
                jobTitle: position,
                county: '',
                date,
                sd,
                city,
                state: 'PA',
                link: 'https://www.paeducator.net',
                paid: 'false'
              });
            }

            return arr;
          })
          .then(function (results) {
            console.log('in');
            results.map(job => {
              allJobPosts.push(job);
            });
            return results;
          });
      });
    }, Promise.resolve([]))
    .then(function (results) {
      done = true;
    });
}

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

const scheduledJobCrawler = schedule.scheduleJob('53 * * * *', function () {
  resultsLog = [];
  allJobPosts = [];

  School.find({}).exec(async function (err, schools) {
    if (err) {
      console.log(err);
    } else {
      paEducatorSearch();
      for (let i = 0; i < schools.length; i++) {
        searchForJobs(schools[i]);
      }
      waitUntil()
        .interval(3000)
        .times(schools.length)
        .condition(function () {
          console.log(`${resultsLog.length}/${schools.length}`);
          return resultsLog.length >= schools.length;
        })
        .done(async function (result) {
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

module.exports = app => { };
