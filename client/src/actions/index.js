import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_JOBS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

//get jobs
export const fetchJobs = () => async dispatch => {
  const res = await axios.get('/api/jobs/pa');

  dispatch({ type: FETCH_JOBS, payload: res.data });
};
