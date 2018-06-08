import { connect } from 'react-redux';
import UserChannel from './user_channel';
import { logoutCurrentUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  dropdown: state.ui.footer
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(UserChannel)
