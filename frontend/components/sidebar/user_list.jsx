import React from 'react';
import UserListItem from './user_list_item';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchServer(this.props.serverId)
  // }

  render() {
    const { dmServers, dmServerIds, currentUser, dmServer } = this.props;

    if (this.props.offlineUsers[0] === undefined && this.props.onlineUsers[0] === undefined) {
      return (
        <div>
        </div>
      )
    } else if ( this.props.friends === false ) {
      return (
        <div>
        </div>
      )
    } else {
      return (
      <div className="online-user-list-container">
        <div className="user-list-container" >
          <div className="online-users">
            <ul className="online-ul">
              <h1> ONLINE - {this.props.onlineUsers.length} </h1>
              {this.props.onlineUsers[0] !== undefined ?
              ( this.props.onlineUsers.map ((user) => {
                return <UserListItem key={user.id}
                        dmServer={dmServer} dmServers={dmServers}
                        dmServerIds={dmServerIds} currentUser={currentUser}
                        user={user} color={user.avatar_url}/>
              })) : null }
            </ul>
          </div>
          <div className="offline-users">
            <h1> OFFLINE - {this.props.offlineUsers.length} </h1>
            <ul className="offline-ul">
              {this.props.onlineUsers[0] !== undefined ?
              ( this.props.offlineUsers.map ((user) => {
                return <UserListItem key={user.id} dmServer={dmServer}
                      dmServers={dmServers} dmServerIds={dmServerIds}
                      currentUser={currentUser}
                      user={user} color={"gray"}/>
              })) : null }
            </ul>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default UserList;
