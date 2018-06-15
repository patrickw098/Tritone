import React from 'react';
import ServerListItem from '../sidebar/server_list_item';
import Avatar from '../avatar/avatar';

class FriendsListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { friend } = this.props;

    let index = this.props.dmServerIds.indexOf(`${friend.id}`)
    if ( index !== -1 ) {
      this.props.history.push(`/channels/@me/${this.props.dmServers[friend.id].channel_id}`);
    } else {
      this.props.dmServer(friend).then(() =>
        this.props.history.push(`/channels/@me/${this.props.dmServers[friend.id].channel_id}`));
    }
  }

  render() {
    const { friend, mutualServers } = this.props;

    return (
      <li className="friend-list-li">
        <div id="first-friend-li" className="friend-list-li-content">
          <div className="friend-name" onClick={this.handleClick}>
            <div className="avatar-friend-list">
              <Avatar color={friend.avatar_url} />
              <span>
                { friend.display_name }
              </span>
            </div>
          </div>
          <div className="mutual-servers-div">
            <ul>
              { mutualServers.map ((server) => {
                return <div className="mutual-servers-icon" key={server.id}><ServerListItem server={server} /></div>
              })}
            </ul>
          </div>
        </div>
      </li>
    )
  }
}

export default FriendsListItem;
