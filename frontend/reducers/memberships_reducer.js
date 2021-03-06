import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = {}

const membershipsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.server_memberships);
    case RECEIVE_SERVER:
      return Object.assign({}, state, action.payload.server_memberships);
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default membershipsReducer;
