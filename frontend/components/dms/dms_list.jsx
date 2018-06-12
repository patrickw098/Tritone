import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import UserSearchContainer from './user_search_container';
import DmListItem from './dm_list_item';

class DmList extends React.Component {
  constructor(props) {
    super(props);

    this.searchUsers = this.searchUsers.bind(this);
  }

  searchUsers() {
    this.props.openModal("searchUsers");
  }

  render() {
    const { dmServers } = this.props;

    if (this.props.dmServers[0] === undefined) {
      return <div className="channel-list"><ul className="channel-list-ul"></ul></div>
    } else {
      return (
        <div className="channel-list">
          <div className="channel-list-header">
            <h1 className="server-name">
              <button onClick={this.searchUsers} className="search-user-button">Search for User</button>
            </h1>
          </div>
          <div className="channel-list-body">
            <ul className="channel-list-ul">
              { dmServers.map ((dmServer) => {
                return <DmListItem key={dmServer.server_id} dmServer={dmServer}/>
              })}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(DmList);
