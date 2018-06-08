import { connect } from 'react-redux';
import Messages from './messages'
import { fetchChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId,
  channel: state.entities.channels[ownProps.match.params.channelId],
  messages: selectMessages(state, ownProps)
})

const selectMessages = (state, ownProps) => {
  let channel = state.entities.channels[ownProps.match.params.channelId];
  debugger
  let messages = channel.message_ids.map((id) => state.entities.messages[id]);
  return messages;
}

const mapDispatchToProps = dispatch => ({
  fetchChannel: (id) => dispatch(fetchChannel(id))
})

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Messages));
