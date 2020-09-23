import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

// this is an array of errors
const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

//my thunk action creators go here

export const signupUser = user => dispatch => (
  APIUtil.signupUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const loginUser = user => dispatch => (
  APIUtil.loginUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const logoutUser = () => dispatch => (
  APIUtil.logoutUser().then(() => (
    dispatch(logoutCurrentUser())
  ))
);

export const loginDemoUser = () => dispatch => (
  APIUtil.demoUser()
  .then(user => dispatch(receiveCurrentUser(user)))
);
