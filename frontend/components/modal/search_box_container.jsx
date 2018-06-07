import { connect } from 'react-redux';
import SearchBox from './search_box';

const mapStateToProps = state => ({
  selectedServers: selectServers(state),
})

const selectServers = (state) => {
  let serverlist = []
  state.entities.servers.forEach( (server) => {
    if ( server.user.includes?(state.session.id))

    serverlist.push
  })
}
