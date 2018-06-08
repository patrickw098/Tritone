import { connect } from 'react-redux';
import CreateChannel from './create_channel';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  serverId: ownProps.match.params.serverId
});

const mapDispatchToProps = dispatch => ({
  createChannel: (channel) => dispatch(createChannel(channel))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannel));
