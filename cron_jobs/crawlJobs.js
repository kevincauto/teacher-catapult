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

async function paEducatorSearch() {
  console.log('paEducatorSearchIsRunning');
  var jobArr = [];
  let done = false;

  var strings = [
    'input#ctl00_appMainContentTopPH_rdSort_2',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(4)',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(5)',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(6)',
    '#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(7)'
  ];
  await strings
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
              let county = document.querySelector(c).innerHTML;
              let date = document.querySelector(d).innerHTML;
              let sd = document.querySelector(s).innerHTML;

              let today = new Date();
              const id = today.getTime();

              counter++;
              arr.push({
                jobId: 'paed' + id + counter,
                schoolId: 'paed',
                jobTitle: position,
                jobUrl: 'https://www.paeducator.net/Applicant/SearchResults.aspx?',
                sd,
                city: county,
                county,
                state: 'PA',
                date,
                paid: 'false'
              });
            }

            return arr;
          })
          .then(function (results) {
            results.map(job => { jobArr.push(job); });
          });
      });
    }, Promise.resolve([]))
    .then(function (results) {
      done = true;
    });
  return jobArr;
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

// schedule.scheduleJob('0 */4 * * *', async function () {
// every 4 hours: '0 */4 * * *'
// every hour on this minute: '20 * * * *'
module.exports = {
  startScrapingScripts: async () => {

    // try {
    //   const paEdJobs = await paEducatorSearch();
    //   console.log('paEdJobs')
    //   console.log(paEdJobs)
    //   //assure that a reasonable number of jobs returned.
    //   if (paEdJobs.length > 20) {
    //     await Job.find({ schoolId: 'paed' }).remove(() => { console.log('paed jobs removed.') });
    //     await paEdJobs.forEach(job => {
    //       new Job(job).save(
    //         (err) => { if (err) { console.error(error) } })
    //     })
    //   }
    // }
    // catch (err) {
    //   console.log(err);
    // }

    try {
      const paReapJobs = await pareapSearch();
      console.log('paReapJobs')
      console.log(paReapJobs)
      if (paReapJobs.length > 20) {
        await Job.find({ schoolId: 'pareap' }).remove(() => { console.log('pareap jobs removed.') });
        await paReapJobs.forEach(job => {
          new Job(job).save(
            (err) => { if (err) { console.error(error) } })
        })
      }
    } catch (err) {
      console.log(err);
    }

    return true;
  }
}

// module.exports = app => { };
