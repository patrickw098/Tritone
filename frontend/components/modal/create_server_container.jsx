import { connect } from 'react-redux';
import CreateServer from './create_server';
import { createServer, searchServers } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  createServer: (server) => {
      return dispatch(createServer(server))
    },
  joinServer: "join server",
  closeModal: () => dispatch(closeModal()),
  searchServers: (server) => dispatch(searchServers(server))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);
