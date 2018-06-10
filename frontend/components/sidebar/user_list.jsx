import React from 'react';
import UserListItem from './user_list_item';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServer(this.props.serverId)
  }

  render() {
    if (this.props.offlineUsers[0] === undefined && this.props.onlineUsers[0] === undefined) {
      return (
        <div className="user-list-container">
        </div>
      )
    } else {
      return (
      <div className="user-list-container" >
        <div className="online-users">
          <ul className="online-ul">
            <h1> Online - {this.props.onlineUsers.length} </h1>
            {this.props.onlineUsers.map ((user) => {
              return <UserListItem key={user.id} user={user} />
            })}
          </ul>
        </div>
        <div className="offline-users">
          <h1> Offline - {this.props.offlineUsers.length} </h1>
          <ul className="offline-ul">
            {this.props.offlineUsers.map ((user) => {
              return <UserListItem key={user.id} user={user} />
            })}
          </ul>
        </div>
      </div>
      )
    }
  }
}

export default UserList;