import { connect } from 'react-redux';
import UserSearch from './user_search';
import { withRouter } from 'react-router-dom';
import { searchUsers } from '../../actions/user_actions';
import { dmServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.users),
  currentUser: state.session.id,
  dmServers: state.entities.dmServers,
  dmServerIds: Object.keys(state.entities.dmServers)
})

const mapDispatchToProps = dispatch => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  dmServer: (user) => dispatch(dmServer(user)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));
