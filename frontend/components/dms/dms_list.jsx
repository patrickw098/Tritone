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

    return (
      <div className="channel-list">
        <div className="">
          <h1 className="dms-list-header">
            <button onClick={this.searchUsers} className="search-user-button">Find or start a conversation</button>
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

export default withRouter(DmList);
