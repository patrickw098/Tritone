import * as APIUtils from '../util/session_api_utils';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const loginUser = payload => (
  {
    type: LOGIN_USER,
    payload
  }
);

const logoutUser = () => (
  {
    type: LOGOUT_USER
  }
);

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// receiveErrors is dispatched if the AJAX is rejected //
export const loginCurrentUser = userForm => dispatch => {
  return APIUtils.login(userForm)
    .then(user => dispatch(loginUser(user)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const logoutCurrentUser = () => dispatch => {
  return APIUtils.logout()
    .then(() => dispatch(logoutUser()), error => dispatch(receiveErrors(error.responseJSON)));
};

export const createUser = userForm => dispatch => {
  return APIUtils.signup(userForm)
    .then(user => dispatch(loginUser(user)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const clearErrors = () => (
  {
    type: CLEAR_ERRORS
  }
);
