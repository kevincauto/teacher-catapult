import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_JOBS } from './types';
import { FETCH_PAID_JOBS } from './types';

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
  const res = await axios.post('/api/user-resume', values);

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
