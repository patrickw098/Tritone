import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case RECEIVE_CHANNEL:
        return Object.assign({}, state, action.payload.messages);
      case RECEIVE_MESSAGE:
        return Object.assign({}, state, action.payload.messages);
      case REMOVE_MESSAGE:
        let newState = Object.assign({}, state);
        delete newState[action.payload.message.id];
        return newState;
      default:
        return state;
  }
};

export default messagesReducer;
