const cron = require('node-cron');
const axios = require('axios');
const updateSchoolUrlStatusCodes = require('./search-scripts/check-status-code');

cron.schedule('*/3 * * * *', async () => {
  // console.log('running a task every minute');
  // load in, (should be from database, but locally for now)
  const schoolDistricts = require('./data/school_district_data');

  console.log('started...')
  console.log(await updateSchoolUrlStatusCodes(schoolDistricts))
  console.log('finished...')
});

// load in every bit of data

// verify that each address gets a 200 response, otherwise disable search

  // if non-200 response, 1. disable search, 2. push to an array so that it can be emailed out to an admin.

// iterate through all the schools

  //  if search is enabled, check if there is a custom search, if yes do it. if no do the standard search

  //  push job info to an array

// Search PAReap and push jobs to array

// Search PAEducator, push jobs to the array

// send array of jobs to the database