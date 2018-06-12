import { LOGIN_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case LOGIN_USER:
        return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
      case RECEIVE_USER:
        return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
      case RECEIVE_USERS:
        return Object.assign({}, state, action.payload.users);
      case RECEIVE_SERVER:
        return Object.assign({}, state, action.payload.users);
      case RECEIVE_MESSAGE:
        return Object.assign({}, state, action.payload.users);
      case RECEIVE_CHANNEL:
        return Object.assign({}, state, action.payload.users);
      default:
        return state;
  }
};

export default usersReducer;
