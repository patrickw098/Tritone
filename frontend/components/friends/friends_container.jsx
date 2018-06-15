import { connect } from 'react-redux';
import Friends from './friends';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  friends: findFriends(state),
  friendReqs: findFriendReqs(state)
})

const findFriends = (state) => {
  let currentUser = state.entities.users[state.session.id]
  let friendsArr = currentUser.friend_ids
  let friends = friendsArr ? friendsArr.map ((friendId) => state.entities.users[friendId]) : []
  return friends
}

const findFriendReqs = (state) => {
  let currentUser = state.entities.users[state.session.id]
  let friendsArr = currentUser.friend_req_ids
  let friends = friendsArr ? friendsArr.map ((friendId) => state.entities.users[friendId]) : []
  return friends
}

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friends))
