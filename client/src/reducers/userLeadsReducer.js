import { FETCH_USER_LEADS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_LEADS:
      return action.payload || false;
    default:
      return state;
  }
}
