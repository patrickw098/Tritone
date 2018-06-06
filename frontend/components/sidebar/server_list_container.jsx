import { connect } from 'react-redux';
import ServerList from './server_list';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  servers: userServers(state)
})

const userServers = (state) => {
  let user = state.entities.users[state.session.id];

  let servers = user.server_ids.map((id) => state.entities.servers[id]);

  return servers;
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
