import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { openFooter, closeFooter } from '../../actions/modal_actions';
import { logoutCurrentUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currUserId: state.session.id,
  dropdown: state.ui.footer
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  openFooter: (footer) => dispatch(openFooter(footer)),
  closeFooter: () => dispatch(closeFooter()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
