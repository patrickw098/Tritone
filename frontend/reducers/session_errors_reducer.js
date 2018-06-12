import { RECEIVE_ERRORS, LOGIN_USER, CLEAR_ERRORS } from '../actions/session_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = [];

const sessionsErrorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionsErrorReducer;
