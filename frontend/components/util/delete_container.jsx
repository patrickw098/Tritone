import { connect } from 'react-redux';
import Delete from './delete';
import { deleteThisMessage } from '../../actions/message_actions';
import { deleteChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
  deleteMessage: (id) => dispatch(deleteThisMessage(id)),
  deleteChannel: (id) => dispatch(deleteChannel(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Delete));
