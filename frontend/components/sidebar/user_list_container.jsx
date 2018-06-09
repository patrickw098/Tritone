import { connect } from 'react-redux';
import UserList from './user_list';
import { withRouter } from 'react-router-dom';
import { fetchServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => ({
  offlineUsers: selectOfflineUsers(state, ownProps),
  onlineUsers: selectOnlineUsers(state, ownProps),
  serverId: ownProps.match.params.serverId
})

const selectOfflineUsers = (state, ownProps) => {
  let serverId = ownProps.match.params.serverId
  let userArr = state.entities.servers[serverId].user_ids
  let users = []

  userArr.forEach( (id) => {
    let user = state.entities.users[id]
    if ( user.online_status === "offline" ) {
      users.push(user.display_name)
    }
  })

  return users
}

const selectOnlineUsers = (state, ownProps) => {
  let serverId = ownProps.match.params.serverId
  let userArr = state.entities.servers[serverId].user_ids
  let users = []
  userArr.forEach( (id) => {
    let user = state.entities.users[id]
    if ( user.online_status === "online" ) {
      users.push(user.display_name)
    }
  })

  return users
}

const mapDispatchToProps = dispatch => ({
  fetchServer: (id) => dispatch(fetchServer(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
