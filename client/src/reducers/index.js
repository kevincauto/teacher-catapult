import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import paidJobsReducer from './paidJobsReducer';
import leadsReducer from './leadsReducer';
import userLeadsReducer from './userLeadsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  jobs: jobsReducer,
  paidjobs: paidJobsReducer,
  leads: leadsReducer,
  userleads: userLeadsReducer
});
