import { connect } from 'react-redux';
import SearchBox from './search_box';

const mapStateToProps = state => ({
  selectedServers: selectServers(state),
})

const selectServers = (state) => {
  let serverList = []
  state.entities.servers.forEach( (server) => {
    if ( !server.user_ids.includes?(state.session.id)) {
      serverlist.push(server)
    }
  })

  return serverList
}

export default connect(mapStateToProps, null)(SearchBox);
