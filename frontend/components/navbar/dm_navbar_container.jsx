import { connect } from 'react-redux';
import DmNavbar from './dm_navbar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  name: findDmName(state, ownProps)
})

const findDmName = (state, ownProps) => {
  let dms = Object.values(state.entities.dmServers);
  let selected = []
  dms.forEach( (dm) => {
    if (dm.channel_id === parseInt(ownProps.match.params.channelId)) {
      selected.push(dm);
    }
  })

  return selected[0].name
}

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DmNavbar));
