import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_CHANNEL:
        return Object.assign({}, state, action.payload.messages);
      default:
        return state;
  }
};

export default messagesReducer;
