const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });
const waitUntil = require('wait-until');

//should return an object with properties
//{jobs: Array, error: Boolean}

module.exports = {
  paEducatorSearch: async () => {
    console.log('FIREEEE');
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
      .reduce(function(accumulator, string) {
        return accumulator.then(function(results) {
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
            .then(function(results) {
              console.log('in');
              results.map(job => {
                jobArr.push(job);
              });
              return results;
            });
        });
      }, Promise.resolve([]))
      .then(function(results) {
        done = true;
      });

    waitUntil()
      .interval(3000)
      .times(100)
      .condition(function() {
        return done === true;
      })
      .done(async function(result) {
        return { jobs: jobArr, error: false };
      });
  }
};
