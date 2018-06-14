import * as UserApiUtils from '../util/user_api_utils'

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ONLINE_STATUS = "RECEIVE_ONLINE_STATUS"


//will have to refactor jbuilder later to give back normalized data//
const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
})

const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  payload
})

export const receiveOnlineStatus = payload => ({
  type: RECEIVE_ONLINE_STATUS,
  payload
})

export const fetchUser = (id) => dispatch => {
  return UserApiUtils.fetchUser(id)
    .then( (res) => dispatch(receiveUser(res)));
}

export const searchUsers = (user) => dispatch => {
  return UserApiUtils.searchUsers(user)
    .then( (res) => dispatch(receiveUsers(res)))
}

export const updateCurrentUser = user => dispatch => {
  return UserApiUtils.updateUser(user)
    .then( (res) => dispatch(receiveUser(res)))
}
