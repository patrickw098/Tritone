import * as ServerApiUtils from '../util/server_api_utils';

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_DM_SERVER = "RECEIVE_DM_SERVER";

export const receiveServer = (payload) => ({
  type: RECEIVE_SERVER,
  payload
});

const removeServer = (serverId) => ({
  type: REMOVE_SERVER,
  serverId
});

const receiveAllServers = (payload) => ({
  type: RECEIVE_ALL_SERVERS,
  payload
});

const receiveDmServer = payload => ({
  type: RECEIVE_DM_SERVER,
  payload
})

export const fetchServer = (id) => dispatch => {
  return ServerApiUtils.fetchServer(id)
    .then((res) => dispatch(receiveServer(res)))
}

export const createServer = (server) => dispatch => {
  return ServerApiUtils.createServer(server)
    .then((res) => dispatch(receiveServer(res)))
}

export const updateServer = (server) => dispatch => {
  return ServerApiUtils.updateServer(server)
    .then((res) => dispatch(receiveServer(res)))
}

export const searchServers = (server) => dispatch => {
  return ServerApiUtils.searchServer(server)
    .then((res) => dispatch(receiveAllServers(res)))
}

export const joinServer = (server) => dispatch => {
  return ServerApiUtils.joinServer(server)
    .then((res) => dispatch(receiveServer(res)))
}

export const leaveServer = (id) => dispatch => {
  return ServerApiUtils.leaveServer(id)
    .then((res) => {
      dispatch(receiveServer(res))
    })
}

export const dmServer = (user) => dispatch => {
  return ServerApiUtils.createDm(user)
    .then((res) => {
      dispatch(receiveDmServer(res))
    })
}
