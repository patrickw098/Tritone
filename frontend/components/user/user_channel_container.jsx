import { connect } from 'react-redux';
import UserChannel from './user_channel';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(UserChannel)
