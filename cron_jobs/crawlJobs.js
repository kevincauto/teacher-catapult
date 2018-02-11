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

//global variables
let counter = 0;
let finalData = [];
let resultsLog = [];
let today;

async function doCustomSearch(id, link) {
  // if (/pareap.net/.test(link)) {
  //   return pareapSearch(link, counter, finalData, resultsLog, today);
  // }
  try {
    let res = await axios.get(link);
    let $ = cheerio.load(res.data);

    let jobs = $('.jobfirstrow a').text();
    jobs = jobs.split('\n\t\t');
    jobs = jobs.map(job => {
      typeAndSubject = job.slice(0, -3).split('/');
      return `${typeAndSubject[1]} ${typeAndSubject[0]}`.trim();
    });
    jobs.shift();

    let sdAndCity = $('.school')
      .text()
      .replace(/([a-z])([A-Z])/g, '$1;$2')
      //rare occations when like 'Morrisville SDMorrisville, PA'
      .replace(/([A-Z]{2})([A-Z][a-z])/g, '$1;$2')
      //zipcode followed by capital letter
      .replace(/([0-9]{4})([A-Z])/g, '$1^$2')
      .split(';');

    let jobLinks = [];
    $('.jobfirstrow a').each(function(index, element) {
      let jobLink = $(element).attr('href');
      if (jobLink !== '#') {
        jobLinks.push('https://www.pareap.net' + jobLink);
      }
    });

    let cities = sdAndCity.map(city => city.substr(0, city.indexOf(',')));
    cities.shift();

    let states = Array(cities.length).fill('PA');

    let sds = sdAndCity.map(sd => sd.substr(sd.indexOf('^') + 1));
    sds.pop();

    for (let i = 0; i < jobs.length; i++) {
      finalData.push({
        id: counter++,
        jobTitle: jobs[i],
        link: jobLinks[i],
        sd: sds[i],
        county: 'PA Reap',
        city: cities[i],
        state: states[i],
        date: today,
        paid: false
      });
      console.log({
        id: counter,
        jobTitle: jobs[i],
        link: jobLinks[i],
        sd: sds[i],
        county: 'PA Reap',
        city: cities[i],
        state: states[i],
        date: today,
        paid: false
      });
    }
    resultsLog.push({ link, error: false });
    return false;
  } catch (err) {
    console.log(err);
    resultsLog.push({ link, error: true });
    return true;
  }
}

const makeARequest = async district => {
  let { id, county, city, state, sd, link, customSearch } = district;

  if (customSearch) {
    console.log(id, link);
    let errorBoolean = await doCustomSearch(id, link);
    resultsLog.push({ link, error: errorBoolean });
    return;
  } else {
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
            // console.log({
            //   id: counter,
            //   link,
            //   jobTitle: jobTypes[i].jobTitle,
            //   sd,
            //   county,
            //   city,
            //   state,
            //   date: today,
            //   paid: false
            // });
          }
        }
      }
      resultsLog.push({ link, error: false });
    } catch (err) {
      console.log(link);
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

const scraper = schedule.scheduleJob('51 * * * *', function() {
  resultsLog = [];
  today = getDate();
  counter = 0;
  finalData = [];

  School.find({}).exec(function(err, schools) {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < schools.length; i++) {
        makeARequest(schools[i]);
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
            pushNewJobs();
            console.log(finalData);
          }
        });
    }
  });
});

module.exports = app => {};
