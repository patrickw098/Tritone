import { LOGIN_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case LOGIN_USER:
        return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
      case RECEIVE_USER:
        return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
      case RECEIVE_SERVER:
        return Object.assign({}, state, action.payload.users)
      default:
        return state;
  }
};

export default usersReducer;
