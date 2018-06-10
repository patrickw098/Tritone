import { connect } from 'react-redux';
import EditServer from './edit_server';
import { updateServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  server: state.entities.servers[findServer(state, ownProps)]
});

const findServer = (state, ownProps) => {
  let pathArr = ownProps.location.pathname.split("/");
  let num = pathArr[pathArr.length - 2];
  return parseInt(num);
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  updateServer: (server) => dispatch(updateServer(server))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditServer));
