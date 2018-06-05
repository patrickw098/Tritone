import * as UserApiUtils from '../util/user_api_utils'

export const RECEIVE_USER = "RECEIVE_USER";


//will have to refactor jbuilder later to give back normalized data//
const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const fetchUser = (id) => dispatch => {
  return UserApiUtils.fetchUser(id)
    .then( (res) => dispatch(receiveUser(res)));
}
