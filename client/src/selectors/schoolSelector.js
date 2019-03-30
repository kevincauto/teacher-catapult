import { createSelector } from 'reselect';

export const getSchools = state => state.schools

const schoolIds = [
  8, 19, 21, 38, 51, 53, 56, 57, 59, 67, 68, 70, 75,
  77, 86, 87, 89, 95, 98, 120, 137, 143, 156, 157,
  168, 191, 195, 200, 201, 204, 207, 213, 236,
  241, 244, 346, 250, 254, 259, 268, 270, 275,
  276, 278, 281, 283, 287, 292, 296, 299, 300,
  301, 318, 329, 331, 335, 340, 344, 345, 346,
  347, 367, 371, 372, 373, 377, 396, 399, 403,
  415, 419, 420, 422, 436, 440, 452, 457, 478,
  486, 488, 490, 493
]

export const getManualSearchJobs = createSelector(
  [getSchools],
  schools => schools.filter(school => !schoolIds.some(id => id === school.id))
)
