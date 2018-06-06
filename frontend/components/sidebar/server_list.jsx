import React from 'react';
import ServerListItem from './server_list_item';

class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }

  render() {
    return (
      <ul className="server-list-ul">
        <li className="user-page-li"><button className="user-page-button"><i className="fa fa-users" aria-hidden="true"></i></button></li>
          { this.props.servers.map((server) => {
            return <ServerListItem key={server.id} server={server} />
          })}
        <li><button className="create-server-button">+</button></li>
      </ul>
    )
  }
}


export default ServerList;
