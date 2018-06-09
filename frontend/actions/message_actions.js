export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
import { createMessage, deleteMessage } from '../util/message_api_utils'

export const receiveMessage = (payload) => ({
  type: RECEIVE_MESSAGE,
  payload
})

export const removeMessage = payload => ({
  type: REMOVE_MESSAGE,
  payload
})

export const createNewMessage = message => dispatch => {
  return createMessage(message)
    .then((res) => dispatch(receiveMessage(res)));
}

export const deleteThisMessage = message => dispatch => {
  return deleteMessage(message)
    .then((res) => dispatch(removeMessage(res)));
}
