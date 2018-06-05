import { connect } from 'react-redux';
import { loginCurrentUser } from '../../actions/session_actions';
import GetStarted from './get_started';

const mapStateToProps = state => ({
  currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({
  loginCurrentUser: (userForm) => dispatch(loginCurrentUser(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);
