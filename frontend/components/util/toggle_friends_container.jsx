import { connect } from 'react-redux';
import ToggleFriends from 'toggle_friends';
import { toggleFriends, resetFriends } from '../../actions/modal_actions';

const mapStatetoProps = state => ({
  friends: state.ui.friends
})

const mapDispatchToProps = dispath => ({
  toggleFriends: () => dispatch(toggleFriends()),
  resetFriends: () => dispatch(resetFriends())
})

export default connect(mapStatetoProps,mapDispatchToProps)(ToggleFriends)
