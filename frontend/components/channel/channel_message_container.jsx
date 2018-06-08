import { connect } from 'react-redux';
import ChannelMessage from './channel_message';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(ChannelMessage)
