import { connect } from 'react-redux';
import Messages from './messages'
import { fetchChannel } from '../../actions/channel_actions';
import { receiveMessage } from '../../actions/message_actions';
import { receiveServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId,
  channel: state.entities.channels[ownProps.match.params.channelId],
  messages: selectMessages(state, ownProps)
})

const selectMessages = (state, ownProps) => {
  let channel = state.entities.channels[ownProps.match.params.channelId];
  let messages = channel.message_ids.sort().map((id) => state.entities.messages[id]);
  return messages.reverse();
}

const mapDispatchToProps = dispatch => ({
  fetchChannel: (id) => dispatch(fetchChannel(id)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveServer: (server) => dispatch(receiveServer(server)),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Messages));
