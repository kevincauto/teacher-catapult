import { FETCH_SCHOOLS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SCHOOLS:
      return action.payload || false;
    default:
      return state;
  }
}
