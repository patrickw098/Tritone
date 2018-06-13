import { connect } from 'react-redux';
import ChannelMessage from './channel_message';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = dispatch => ({
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, null)(ChannelMessage)
