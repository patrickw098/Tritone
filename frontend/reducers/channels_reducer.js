import { RECEIVE_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const initialState = {};

const channelsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_SERVER:
        return Object.assign({}, state, action.payload.channels);
      case RECEIVE_USER:
        return Object.assign({}, state, action.payload.channels);
      default:
        return state;
  }
};

export default channelsReducer;
