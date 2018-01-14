const express = require('express');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');
const School = require('../models/School');
const Job = require('../models/Job');

// var Job = require('../models/Job');

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

today = yyyy + '-' + mm + '-' + dd;

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
            //job title, school district, county, city, state, date
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
            //job title, school district, county, city, state, date
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

  //   request(url, function(err, res, body) {
  //     counter++;

  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     if (res === undefined) {
  //       console.log('no response');
  //       return;
  //     }
  //     console.log(res.statusCode);
  //     if (res.statusCode !== 200) {
  //       return;
  //     }

  //     const $ = cheerio.load(body);
  //     const allText = $('body').text();

  //     const jobTypes = require('./data/keywords');

  //     let keywords;

  //     for (let i = 0; i < jobTypes.length; i++) {
  //       keywords = jobTypes[i].keywords;

  //       for (let j = 0; j < keywords.length; j++) {
  //         let re = new RegExp(keywords[j], 'gi');
  //         var num = allText.search(re);

  //         if (num !== -1) {
  //           finalData.push({
  //             //job title, school district, county, city, state, date
  //             id: counter,
  //             jobTitle: jobTypes[i].jobTitle,
  //             sd,
  //             county,
  //             city,
  //             state,
  //             date: today,
  //             paid: false
  //           });
  //         }
  //       }
  //     }
  //   });
};

// console.log($('body').text());

// const title = $('#articlecontent h1').text();
// const dates = $('#articlecontent h3')
//   .first()
//   .text();
// const presenter = $('#articlecontent h2.authors').text();
// const provider = $('.ce-rec-med-partner strong').text();
// const supporter = $('.ce-rec-med-partner em')
//   .last()
//   .text();
// const cost = $('.ce-rec-sm-R strong').text();
// const credits = $('.ce-rec-sm-L strong').text();
// const description = $('.abstract p').text();
// const lo1 = $('.learning_objectives li')
//   .first()
//   .text();
// const lo2 = $('.learning_objectives li')
//   .next()
//   .text();
// const lo3 = $('.learning_objectives li')
//   .last()
//   .text();
// const disclosure = $('.disclosures p')
//   .first()
//   .text()
//   .replace(/\n/g, '')
//   .replace(/\t/g, '');
// const link = url;
// const imgLink = '';

// const obj = {
//   title,
//   dates,
//   presenter,
//   provider,
//   supporter,
//   cost,
//   credits,
//   description,
//   lo1,
//   lo2,
//   lo3,
//   disclosure,
//   link,
//   imgLink
// };

// let data = require('./keywords');

// data = data.string.split('\n');

// data = data.map(el => {
//   let teacherAndKeywords = el.split(';');
//   let keywords = teacherAndKeywords[1].split(',');
//   keywords = keywords.map(keyword => keyword.trim());
//   return { type: teacherAndKeywords[0], keywords };
// });
// data = JSON.stringify(data);
// console.log(data);
// // write to a new file named 2pac.txt
// fs.writeFile('./cron_jobs/keywords3.txt', data, err => {
//   // throws an error, you could also catch it here
//   if (err) throw err;

//   // success case, the file was saved
//   console.log('saved!');
// });
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

var scraper = schedule.scheduleJob('8,17,29,36,41,56 * * * *', function() {
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
