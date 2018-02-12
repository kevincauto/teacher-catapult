const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

// var Nightmare = require('nightmare'),
//   nightmare = Nightmare()

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

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });
const jquery = require('jquery');

var outside = 'outside!';

nightmare
  .goto('https://www.paeducator.net/')
  .wait(3000)
  .click('input#ctl00_MainContent_ctl00_btnSearch')
  .wait(3000)
  .click('input#ctl00_appMainContentTopPH_rdSort_2')
  .wait(3000)
  .evaluate(() => {
    let jobArr = [];

    for (let i = 0; i <= 18; i += 2) {
      console.log(i);
      var p = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblPosition`;
      let c = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblCounty`;
      let d = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblDatePosted`;
      let s = `#ctl00_appMainContentTopPH_lvJobSearchResults_ctrl${i}_lblPositionType`;
      let position = document.querySelector(p).innerHTML;
      let county = document.querySelector(c).innerHTML;
      let date = document.querySelector(d).innerHTML;
      let sd = document.querySelector(s).innerHTML;
      jobArr.push({
        id: 'paed',
        jobTitle: position,
        county,
        date,
        sd,
        city: '',
        state: 'PA',
        link: 'https://www.paeducator.net',
        paid: 'false'
      });
    }

    return jobArr;
  })
  // .click('span#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(4)')
  // .wait(3000)

  // .click('span#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(5)')
  // .wait(3000)
  // .click('span#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(6)')
  // .wait(3000)
  // .click('span#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(7)')
  // .wait(3000)
  // .click('span#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(9)')
  // .wait(3000)
  // .click('span#ctl00_appMainContentTopPH_dpJobResultsTop2 > a:nth-child(10)')
  // .wait(3000)
  .end()
  .then(function(result) {
    console.log(outside);
    console.log(result);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

// nightmare.goto('http://' + city + '.craigslist.org/search/cpg?is_paid=yes&postedToday=1')
// 	// visits the city specified by the user and gets all computer gigs posted that day
// 	.wait(2000)
// 	// wait 2 seconds so page is guaranteed to be fully loaded
// 	.evaluate(function(){
// 		var gigs = [];
// 		// create an array to hold all gigs gathered by following code
// 		$('.hdrlnk').each(function(){
// 			item = {}
// 			item["title"] = $(this).text()
// 			item["link"] = $(this).attr("href")
// 			gigs.push(item)
// 		})
// 		// create a gig object with title and link, then push to the 'gigs' array
// 		return gigs
// 		// pass the gigs array forward so it can be looped through later on
// 	})
// 	.end()
// 	.then(function(result){
// 		console.log("To: nelsonkhan@gmail.com")
// 		console.log("From: nelsonkhan@gmail.com")
// 		console.log("Subject: Today's Gigs")
// 		console.log("\n")
// 		// set headers for email
// 		for(gig in result) {
// 			console.log(result[gig].title)
// 			console.log(result[gig].link)
// 			console.log("\n")
// 		}
// 		// print each gig to the console in a neat format
// 	})

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
