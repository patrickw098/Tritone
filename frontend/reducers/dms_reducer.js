import { RECEIVE_DM_SERVER } from '../actions/server_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = {};

const dmServersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.dms)
    case RECEIVE_DM_SERVER:
      return Object.assign({}, state, action.payload.dms)
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}

export default dmServersReducer;
