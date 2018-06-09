export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
import { createMessage } from '../util/message_api_utils'

export const receiveMessage = (payload) => ({
  type: RECEIVE_MESSAGE,
  payload
})

export const createNewMessage = message => dispatch => {
  return createMessage(message)
    .then((res) => dispatch(receiveMessage(res)));
}
