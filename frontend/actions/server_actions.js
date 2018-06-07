import * as ServerApiUtils from '../util/server_api_utils';

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";

const receiveServer = (payload) => ({
  type: RECEIVE_SERVER,
  payload
})

const removeServer = (serverId) => ({
  type: REMOVE_SERVER,
  serverId
})

const receiveAllServers = (payload) => ({
  type: RECEIVE_ALL_SERVERS,
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

export const deleteServer = (id) => dispatch => {
  return ServerApiUtils.deleteServer(id)
    .then((res) => dispatch(removeServer(res.id)))
}

export const searchServers = (server) => dispatch => {
  return ServerApiUtils.searchServer(server)
    .then((res) => dispatch(receiveAllServers(res)))
}
