import { connect } from 'react-redux';
import UserChannel from './user_channel';
import { logoutCurrentUser } from '../../actions/session_actions';
import { openFooter, closeFooter } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  dropdown: state.ui.footer
});

const mapDispatchToProps = dispatch => ({
  logoutCurrentUser: (id) => dispatch(logoutCurrentUser(id)),
  openFooter: (footer) => dispatch(openFooter(footer)),
  closeFooter: () => dispatch(closeFooter())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserChannel)
