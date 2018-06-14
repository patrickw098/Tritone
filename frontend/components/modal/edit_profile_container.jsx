import { connect } from 'react-redux';
import EditProfile from './edit_profile';
import { updateCurrentUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateCurrentUser(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
