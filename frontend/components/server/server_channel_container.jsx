import { connect } from 'react-redux';
import ServerChannel from './server_channel';
import { fetchServer } from '../../actions/server_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  serverId: ownProps.match.params.serverId,
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = dispatch => ({
  fetchServer: (id) => dispatch(fetchServer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerChannel)
