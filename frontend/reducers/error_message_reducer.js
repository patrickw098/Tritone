import { CLEAR_ERRORS } from '../actions/session_actions';
import { ERROR_MESSAGE, CLOSE_MODAL } from '../actions/modal_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = [];

const errorMessageReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case ERROR_MESSAGE:
      return [action.message];
    case CLOSE_MODAL:
      return [];
    case CLEAR_ERRORS:
      return [];
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default errorMessageReducer;
