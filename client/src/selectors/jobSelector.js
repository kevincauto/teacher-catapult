import { createSelector } from 'reselect';

const getJobs = (state) => state.jobs;

export const getJobsSortedById = createSelector(
  [getJobs],
  (jobs) => jobs.sort((a, b) => {
    const textA = a.jobId;
    const textB = b.jobId;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }).reverse()
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
    const textA = a.jobTitle.trim().toUpperCase();
    const textB = b.jobTitle.trim().toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }
  )
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
    const textA = a.jobTitle.trim().toUpperCase();
    const textB = b.jobTitle.trim().toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }
  )
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
    const textA = a.jobTitle.trim().toUpperCase();
    const textB = b.jobTitle.trim().toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }
  )
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
    const textA = a.jobTitle.trim().toUpperCase();
    const textB = b.jobTitle.trim().toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }
  )
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