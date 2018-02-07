import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_JOBS } from './types';
import { FETCH_PAID_JOBS } from './types';
import { FETCH_LEADS } from './types';
import { FETCH_USER_LEADS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const buyOneJobPost = token => async dispatch => {
  const res = await axios.post('/api/stripe/1-job-post', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const buyFiveJobPosts = token => async dispatch => {
  const res = await axios.post('/api/stripe/5-job-posts', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitResume = values => async dispatch => {
  var keys;
  var formData = new FormData();
  for (keys in values) {
    if (keys === 'resume') {
      formData.append('file', values[keys]);
    } else {
      formData.append(keys, values[keys]);
    }
  }
  // const res = await axios.post('/api/user-resume', values);
  const res = await axios.post('/api/user-resume', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  console.log('upload ended');
  dispatch({ type: FETCH_USER, payload: res.data });
};

//submit paid job post
export const submitJobPost = values => async dispatch => {
  const res = await axios.post('/api/paid-jobs/pa', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

//submit email address to newsletter
export const submitEmail = email => async dispatch => {
  const res = await axios.post('/api/mailchimp', { email });

  dispatch({ type: FETCH_USER, payload: res.data });
};

//get non-paid jobs
export const fetchJobs = () => async dispatch => {
  const res = await axios.get('/api/jobs/pa');

  dispatch({ type: FETCH_JOBS, payload: res.data });
};

//get paid job posts
export const fetchPaidJobs = () => async dispatch => {
  const res = await axios.get('/api/paid-jobs/pa');

  dispatch({ type: FETCH_PAID_JOBS, payload: res.data });
};

export const fetchLeads = () => async dispatch => {
  const res = await axios.get('/api/leads');

  dispatch({ type: FETCH_LEADS, payload: res.data });
};

export const fetchUserLeads = () => async dispatch => {
  const res = await axios.get('/api/user-leads');

  dispatch({ type: FETCH_USER_LEADS, payload: res.data });
};
