import { connect } from 'react-redux';
import UserSearch from './user_search';
import { withRouter } from 'react-router-dom';
import { searchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.users),
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
  searchUsers: (query) => dispatch(searchUsers(query))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));
