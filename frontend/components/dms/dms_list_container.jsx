import { connect } from 'react-redux';
import DmList from './dms_list';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    serverId: ownProps.match.params.serverId,
    server: state.entities.servers[ownProps.match.params.serverId],
    dmServers: Object.values(state.entities.dmServers)
  })
}

const selectDms = (state, ownProps) => {
  let server = state.entities.servers[ownProps.match.params.serverId];
  let channels = server.channel_ids.map((id) => state.entities.channels[id]);
  return channels;
}



const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DmList));
