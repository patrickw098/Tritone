import { connect } from 'react-redux';
import MessageInput from './message_input';
import { withRouter } from 'react-router-dom';
import { createNewMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.match.params.channelId
})

const mapDispatchToProps = dispatch => ({
  createMessage: (message) => dispatch(createNewMessage(message))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageInput));
