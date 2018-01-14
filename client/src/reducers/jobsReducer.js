import { FETCH_JOBS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload || false;
    default:
      return state;
  }
}
