import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import membershipsReducer from './memberships_reducer';
import dmServersReducer from './dms_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    memberships: membershipsReducer,
    dmServers: dmServersReducer
  });
