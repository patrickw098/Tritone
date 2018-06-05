import * as APIUtils from '../util/session_api_utils';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'


const loginUser = user => (
  {
    type: LOGIN_USER,
    user
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


export const loginCurrentUser = userForm => dispatch => {
  return APIUtils.login(userForm)
    .then(user => dispatch(loginUser(user)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const logoutCurrentUser = () => dispatch => {
  return APIUtils.deleteSession()
    .then(() => dispatch(logoutUser()), error => dispatch(receiveErrors(error.responseJSON)));
};

export const createUser = userForm => dispatch => {
  return APIUtils.signup(userForm)
    .then(user => dispatch(loginUser(user)), error => dispatch(receiveErrors(error.responseJSON)));
};
