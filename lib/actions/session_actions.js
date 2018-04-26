import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// thunks

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
    .fail(err => (dispatch(receiveErrors(err.responseJSON))))
    .then(user => (dispatch(receiveCurrentUser(user))))
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .fail(err => (dispatch(receiveErrors(err.responseJSON))))
    .then(user => (dispatch(receiveCurrentUser(user))))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => (
    dispatch(removeCurrentUser())
  ))
);

// reg actions

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const removeCurrentUser = () => {
  sessionStorage.removeItem('currentUser');
  return ({type: REMOVE_CURRENT_USER});
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_ERRORS
});
