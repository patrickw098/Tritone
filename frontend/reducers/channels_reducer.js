import { RECEIVE_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_DM_SERVER } from '../actions/server_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = {};

const channelsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_SERVER:
        return Object.assign({}, state, action.payload.channels);
      case RECEIVE_USER:
        return Object.assign({}, state, action.payload.channels);
      case RECEIVE_CHANNEL:
        return Object.assign({}, state, action.payload.channels);
      case RECEIVE_MESSAGE:
        return Object.assign({}, state, action.payload.channels);
      case REMOVE_CHANNEL:
        let newState = Object.assign({}, state);
        delete newState[action.payload.channels.id];
        return newState;
      case RECEIVE_DM_SERVER:
        return Object.assign({}, state, action.payload.channels);
      case REMOVE_MESSAGE:
        return Object.assign({}, state, action.payload.channels)
      case LOGOUT_USER:
        return initialState;
      default:
        return state;
  }
};

export default channelsReducer;
