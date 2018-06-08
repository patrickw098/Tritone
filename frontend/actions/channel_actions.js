import * as ChannelApiUtils from '../util/channel_api_utils';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
})

export const createChannel = channel => dispatch => {
  return ChannelApiUtils.createChannel(channel)
    .then((res) => dispatch(receiveChannel(res)))
}
