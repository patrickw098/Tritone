import { connect } from 'react-redux';
import DmMessage from './dm_message';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  channelIds: findChannelIds(state)
});

const findChannelIds = state => {
  let values = Object.values(state.entities.dmServers);
  let channel_ids = values.map((object) => object.channel_id);
  return channel_ids;
}

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, null)(DmMessage))
