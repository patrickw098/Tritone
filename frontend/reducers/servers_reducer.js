import { RECEIVE_SERVER, REMOVE_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const initialState = {};

const serversReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_USER:
        return Object.assign({}, state, action.payload.servers);
      case RECEIVE_SERVER:
        return Object.assign({}, state, action.payload.servers);
      case REMOVE_SERVER:
        const newServer = Object.assign({}, state);
        delete newServer(action.payload.serverId);
        return newServer;
      case RECEIVE_ALL_SERVERS:
        return Object.assign({}, state, action.payload.servers);
      default:
        return state;
  }
};

export default serversReducer;
