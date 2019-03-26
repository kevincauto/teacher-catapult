import { createSelector } from 'reselect';

const getJobs = (state) => state.jobs;


export const getPhillyJobs = createSelector(
  [getJobs],
  (jobs) => jobs.filter(job =>
    job.county === 'Philadelphia County' ||
    job.county === 'Bucks County' ||
    job.county === 'Montgomery County' ||
    job.county === 'Delaware County' ||
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