import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import paidJobsReducer from './paidJobsReducer';
import leadsReducer from './leadsReducer';
import schoolsReducer from './schoolsReducer';
import userLeadsReducer from './userLeadsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  jobs: jobsReducer,
  leads: leadsReducer,
  paidjobs: paidJobsReducer,
  schools: schoolsReducer,
  userleads: userLeadsReducer
});
