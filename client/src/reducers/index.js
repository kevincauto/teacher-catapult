import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import paidJobsReducer from './paidJobsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  jobs: jobsReducer,
  paidjobs: paidJobsReducer
});
