import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_CHANNEL:
        return Object.assign({}, state, action.payload.messages);
      case RECEIVE_MESSAGE:
        return Object.assign({}, state, action.payload.messages);
      default:
        return state;
  }
};

export default messagesReducer;
