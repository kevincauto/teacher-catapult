const axios = require('axios');

module.exports = arrOfSchools => Promise.all(arrOfSchools.map(school => school.statusCode = axios.get(school.link).then(response => response.status.toString(), error => error.code)))

// module.exports = url => axios.get(url).then(response => response.status.toString(), error => error.code);



