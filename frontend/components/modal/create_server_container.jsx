import { connect } from 'react-redux';
import CreateServer from './create_server';
import { createServer, searchServers, joinServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  servers: selectServers(state)
})
//
const selectServers = (state) => {
  let serverList = Object.values(state.entities.servers);

  let servers = serverList.filter( (server) => server.user_ids.indexOf(state.session.id) === -1 )

  return servers
}

const mapDispatchToProps = dispatch => ({
  createServer: (server) => {
      return dispatch(createServer(server))
    },
  joinServer: (server) => dispatch(joinServer(server)),
  closeModal: () => dispatch(closeModal()),
  searchServers: (server) => dispatch(searchServers(server))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);
