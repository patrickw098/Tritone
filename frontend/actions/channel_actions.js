import * as ChannelApiUtils from '../util/channel_api_utils';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
})

const removeChannel = (payload) => ({
  type: REMOVE_CHANNEL,
  payload
})

export const createChannel = channel => dispatch => {
  return ChannelApiUtils.createChannel(channel)
    .then((res) => dispatch(receiveChannel(res)))
}

export const fetchChannel = id => dispatch => {
  return ChannelApiUtils.fetchChannel(id)
    .then((res) => dispatch(receiveChannel(res)))
}

export const deleteChannel = id => dispatch => {
  return ChannelApiUtils.deleteChannel(id)
    .then((res) => dispatch(removeChannel(res)))
}
