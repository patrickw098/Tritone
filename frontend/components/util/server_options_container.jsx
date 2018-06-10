import { connect } from 'react-redux';
import ServerOptions from './server_options';
import { withRouter } from 'react-router-dom';
import { leaveServer } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  server: ownProps.server.id,
  serverMembershipId: findMembershipId(state, ownProps)
})

const findMembershipId = (state, ownProps) => {
  const memberships = state.entities.memberships;
  for (let k in memberships) {
    if ( memberships[k].server_id === ownProps.server.id ) {
      return parseInt(k);
    }
  }
}

const mapDispatchToProps = dispatch => ({
  leaveServer: (id) => dispatch(leaveServer(id)),
  openModal: (formType) => dispatch(openModal(formType))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerOptions));
