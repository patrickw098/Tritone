import { connect } from 'react-redux';
import EditChannel from './edit_channel';
import { updateChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  channel: state.entities.channels[findChannel(state, ownProps)]
});

const findChannel = (state, ownProps) => {
  let pathArr = ownProps.location.pathname.split("/");
  let num = pathArr[pathArr.length - 1];
  return parseInt(num);
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  updateChannel: (channel) => dispatch(updateChannel(channel))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditChannel));
