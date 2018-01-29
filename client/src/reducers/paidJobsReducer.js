import { FETCH_PAID_JOBS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PAID_JOBS:
      return action.payload || false;
    default:
      return state;
  }
}
