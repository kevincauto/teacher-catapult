import { createSelector } from 'reselect';
import { salaries } from '../data/salary-data';

export const getJobs = (state) => state.jobs
  .filter(job => (
    job.jobId &&
    job.schoolId &&
    job.jobTitle &&
    job.jobUrl &&
    job.sd &&
    job.city &&
    job.state &&
    job.date &&
    (job.paid || job.paid === false)
  ))
  .map(job => {
    const matchingSalary = salaries.find(salary => salary.id == job.schoolId)
    if (
      matchingSalary &&
      !job.jobTitle.toLowerCase().includes('aide') &&
      !job.jobTitle.toLowerCase().includes('assistant') &&
      !job.jobTitle.toLowerCase().includes('principal') &&
      !job.jobTitle.toLowerCase().includes('camp counselor')
    ) { job.salary = `${matchingSalary['MIN SALARY']} - ${matchingSalary['MAX SALARY']}` }
    return job;
  })
  .sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })

export const getJobsSortedById = createSelector(
  [getJobs],
  (jobs) => jobs.sort((a, b) => {
    const textA = a.jobId;
    const textB = b.jobId;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }).reverse()
)

export const getCentralJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Centre County' ||
    job.county === 'Potter County' ||
    job.county === 'Cameron County' ||
    job.county === 'Elk County' ||
    job.county === 'Jefferson County' ||
    job.county === 'Clearfield County' ||
    job.county === 'Cambria County' ||
    job.county === 'Indiana County' ||
    job.county === 'Blair County' ||
    job.county === 'Huntingdon County' ||
    job.county === 'Perry County' ||
    job.county === 'Dauphin County' ||
    job.county === 'Mifflin County' ||
    job.county === 'Juniata County' ||
    job.county === 'Snyder County' ||
    job.county === 'Union County' ||
    job.county === 'Northumberland County' ||
    job.county === 'Montour County' ||
    job.county === 'Lycoming County' ||
    job.county === 'Clinton County' ||
    job.county === 'Tioga County' ||
    job.county === 'McKean County' ||
    job.county === 'Columbia County' ||
    job.county === 'Bedford County' ||
    job.county === 'Fulton County' ||
    job.city === 'State College'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

export const getScrantonJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Wayne County' ||
    job.county === 'Susquehanna County' ||
    job.county === 'Bradford County' ||
    job.county === 'Tioga County' ||
    job.county === 'Lycoming County' ||
    job.county === 'Northumberland County' ||
    job.county === 'Montour County' ||
    job.county === 'Sullivan County' ||
    job.county === 'Columbia County' ||
    job.county === 'Schuylkill County' ||
    job.county === 'Carbon County' ||
    job.county === 'Northampton County' ||
    job.county === 'Monroe County' ||
    job.county === 'Pike County' ||
    job.county === 'Luzerne County' ||
    job.county === 'Wyoming County' ||
    job.county === 'Lackawanna County' ||
    job.city == 'Wilkes-Barre' ||
    job.city === 'Scranton'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

export const getErieJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Erie County' ||
    job.county === 'Crawford County' ||
    job.county === 'Warren County' ||
    job.county === 'McKean County' ||
    job.county === 'Elk County' ||
    job.county === 'Jefferson County' ||
    job.county === 'Clarion County' ||
    job.county === 'Venango County' ||
    job.county === 'Mercer County' ||
    job.county === 'Lawrence County' ||
    job.county === 'Butler County' ||
    job.county === 'Forest County' ||
    job.county === 'Armstrong County' ||
    job.city === 'Erie'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

export const getPaDutchJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Lancaster County' ||
    job.county === 'York County' ||
    job.county === 'Adams County' ||
    job.county === 'Franklin County' ||
    job.county === 'Dauphin County' ||
    job.county === 'Cumberland County' ||
    job.county === 'Perry County' ||
    job.county === 'Lebanon County' ||
    job.county === 'Berks County' ||
    job.county === 'Chester County' ||
    job.county === 'Schuylkill County' ||
    job.county === 'Snyder County' ||
    job.county === 'Union County' ||
    job.county === 'Juniata County' ||
    job.county === 'Mifflin County' ||
    job.county === 'Huntingdon County' ||
    job.county === 'Northumberland County' ||
    job.county === 'Centre County'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

export const getPhillyJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Philadelphia County' ||
    job.county === 'Bucks County' ||
    job.county === 'Montgomery County' ||
    job.county === 'Delaware County' ||
    job.county === 'Chester County' ||
    job.city === 'Philadelphia'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

export const getPghJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Allegheny County' ||
    job.county === 'Lawrence County' ||
    job.county === 'Butler County' ||
    job.county === 'Beaver County' ||
    job.county === 'Armstrong County' ||
    job.county === 'Indiana County' ||
    job.county === 'Westmoreland County' ||
    job.county === 'Greene County' ||
    job.county === 'Somerset County' ||
    job.county === 'Fayette County'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

export const getLehighJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Lehigh County' ||
    job.county === 'Northampton County' ||
    job.county === 'Berks County' ||
    job.county === 'Carbon County' ||
    job.county === 'Schuylkill County' ||
    job.county === 'Monroe County' ||
    job.city === 'Allentown' ||
    job.city === 'Bethlehem' ||
    job.city === 'Easton'
  ).sort((a, b) => {
    const textA = a.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    const textB = b.jobTitle.toUpperCase().replace(/[^A-Za-z]+/g, '');
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
)

const bucksCountyTowns = [
  'Bedminster',
  'Bensalem',
  'Blooming Glen',
  'Bristol',
  'Buckingham',
  'Carversville',
  'Chalfont',
  'Croydon',
  'Danboro',
  'Doylestown',
  'Dublin',
  'Durham',
  'Erwinna',
  'Fairless Hills',
  'Feasterville Trevose',
  'Ferndale',
  'Forest Grove',
  'Fountainville',
  'Furlong',
  'Hilltown',
  'Holicong',
  'Jamison',
  'Kintnersville',
  'Lahaska',
  'Langhorne',
  'Levittown',
  'Line Lexington',
  'Lumberville',
  'Mechanicsville',
  'Milford Square',
  'Morrisville',
  'New Hope',
  'Newtown',
  'Ottsville',
  'Penns Park',
  'Perkasie',
  'Pineville',
  'Pipersville',
  'Plumsteadville',
  'Point Pleasant',
  'Quakertown',
  'Revere',
  'Richboro',
  'Richlandtown',
  'Riegelsville',
  'Rushland',
  'Sellersville',
  'Silverdale',
  'Solebury',
  'Southampton',
  'Spinnerstown',
  'Springtown',
  'Trumbauersville',
  'Upper Black Eddy',
  'Warminster',
  'Warrington',
  'Washington Crossing',
  'Wycombe',
  'Zionhill',
]