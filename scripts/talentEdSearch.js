const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

const axios = require('axios');
const cheerio = require('cheerio');
const { getDate } = require('../utils/helper');

const School = require('../models/School');
const Job = require('../models/Job');

module.exports = {
  talentEdSearch: async (id) => {
    try {
      const { link, sd, city = '', state = PA, county = '' } = await School.findOne({ id });
      console.log('talentEdSearch');
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      let res = await axios.get(link);
      let $ = cheerio.load(res.data);

      const jobs = [];

      $('strong > a').each(function (i, elem) {
        jobs[i] = $(this).text();
      });

      const keywords = [
        'agriculture',
        'art teacher',
        'autistic',
        'behavior',
        'business teacher',
        'chinese',
        'computer science',
        'early childhood',
        'elementary teach', 'first grade teach', 'second grade teach', 'third grade teach', 'fourth grade teach', 'fifth grade teach', '1st grade teach', '2nd grade teach', '3rd grade teach', '4th grade teach', '5th grade teach', 'grade 1 teach', 'grade 2 teach', 'grade 3 teach', 'grade 4 teach', 'grade 5 teach', 'Elementary - various buildings', 'Elementary Summer School-Teachers', 'elementary substitute teacher', 'Grade 5 Elementary',
        'emotional support',
        'english teacher',
        'esl',
        'consumer science',
        'foreign lang',
        'french',
        'german',
        'gifted',
        'guidance coun', 'counselor',
        'health',
        'latin',
        'language arts',
        'learning support',
        'librarian',
        'life skills',
        'math',
        'music', 'choral teach', 'band teach', 'chorus teach', 'vocal',
        'occupational therapy',
        'physical education', 'phys ed', 'PE', 'P.E.',
        'principal',
        'psychologist',
        'reading specialist',
        'science teach', 'biology', 'physics teach', 'chemistry',
        'social studies', 'history',
        'spanish',
        'special ed',
        'speech and language', 'speech & language',
        'technology teacher', 'technology instructor', 'technology ed'
      ]

      const filterOutNonTeachingJobs = (jobs, keywordArr) => {
        let sdArr = jobs
          .filter(job => keywordArr
            .some(keyword => job.toLowerCase().includes(keyword))
          )

        sdArr = [...new Set(sdArr)].sort();

        return sdArr
      }

      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!

      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      const date = mm + '/' + dd + '/' + yyyy;
      const timeStamp = today.getTime();

      //school is number, job is string
      const schoolId = id.toString()

      let jobsArray = filterOutNonTeachingJobs(jobs, keywords);

      jobsArray = jobsArray.map((job, i) => ({
        jobId: timeStamp + i,
        schoolId,
        jobTitle: job,
        jobUrl: link,
        sd,
        city,
        county,
        state,
        date,
        paid: false,
      }))

      if (jobsArray.length > 0) {
        //schoolId 367 is upper darby
        await Job.deleteMany({ schoolId }, (err) => {
          if (err) console.log(err);
        });
        await jobsArray.forEach(job => {
          new Job(job).save(
            (err) => { if (err) { console.error(error) } })
        })
        console.log('jobs');
        console.log(jobsArray);
        console.log('TalentEdJobs saved.')
      }

      return true;

    } catch (err) {
      console.log(err);

      return null;
    }
  },
};