import { connect } from 'react-redux';
import { createUser, loginCurrentUser, logoutCurrentUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createUser: (userForm) => dispatch(createUser(userForm)),
  loginCurrentUser: (userForm) => dispatch(loginCurrentUser(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
