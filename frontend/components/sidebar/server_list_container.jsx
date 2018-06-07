import { connect } from 'react-redux';
import ServerList from './server_list';
import { fetchUser } from '../../actions/user_actions';
import { fetchServer } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  currentServer: ownProps.match.params.serverId,
  servers: userServers(state),
  allServers: state.entities.servers
});

const userServers = (state) => {
  let user = state.entities.users[state.session.id];
  let servers = user.server_ids.map((id) => state.entities.servers[id]);
  return servers;
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchServer: (id) => dispatch(fetchServer(id)),
  openModal: (type) => dispatch(openModal('createServer'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerList));
