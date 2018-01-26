import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_CURRENT_USER:
      let toBeRemoved;
      toBeRemoved = null;
      return merge({}, { toBeRemoved });
    case RECEIVE_CURRENT_USER:
      let currentUser;
      if (sessionStorage.getItem('currentUser') != null) {
        currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      }else{
        sessionStorage.setItem('currentUser', JSON.stringify(action.currentUser))
        currentUser = action.currentUser;
      }
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;