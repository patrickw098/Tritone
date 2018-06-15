import { connect } from 'react-redux';
import FriendsListItem from './friends_list_item';
import { withRouter } from 'react-router-dom';
import { dmServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  mutualServers: findMutualServers(state, ownProps),
  dmServers: state.entities.dmServers,
  dmServerIds: Object.keys(state.entities.dmServers)
})

const findMutualServers = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  let friend = ownProps.friend;

  let mutualServerArr = currentUser.server_ids.filter (id => friend.server_ids.indexOf(id) !== -1 )

  return mutualServerArr.map((id) => state.entities.servers[id])
}

const mapDispatchToProps = dispatch => ({
  dmServer: (user) => dispatch(dmServer(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsListItem))
