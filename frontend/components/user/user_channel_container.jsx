import { connect } from 'react-redux';
import UserChannel from './user_channel';
import { logoutCurrentUser } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  logoutCurrentUser: (id) => dispatch(logoutCurrentUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserChannel)
