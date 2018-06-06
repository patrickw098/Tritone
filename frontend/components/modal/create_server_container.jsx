import { connect } from 'react-redux';
import CreateServer from './create_server';
import { createServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  formType: "createServer"
})

const mapDispatchToProps = dispatch => ({
  createServer: (server) => {
      return dispatch(createServer(server))
    },
  joinServer: "join server",
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);
