import { connect } from 'react-redux';
import ServerList from './server_list';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
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
  openModal: (type) => dispatch(openModal('createServer'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
