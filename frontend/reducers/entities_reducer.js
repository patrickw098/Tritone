import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer
  });
