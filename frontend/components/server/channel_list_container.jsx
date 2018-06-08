import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions';
import ChannelList from './channel_list';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    serverId: ownProps.match.params.serverId,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: serverChannels(state, ownProps)
  })
}

const serverChannels = (state, ownProps) => {
  let server = state.entities.servers[ownProps.match.params.serverId];
  let channels = server.channel_ids.map((id) => state.entities.channels[id]);
  return channels;
}



const mapDispatchToProps = dispatch => ({
  fetchServer: (id) => dispatch(fetchServer(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
