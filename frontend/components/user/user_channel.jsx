import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import ChannelListContainer from '../server/channel_list_container';
import FooterContainer from '../footer/footer_container';
import NavBarContainer from '../navbar/navbar_container';
import DmListContainer from '../dms/dms_list_container';
import FriendsContainer from '../friends/friends_container';

class UserChannel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if ( this.props.currentUser.display_name === undefined ) {
      return <Redirect to="/app" />
    } else {
      return (
        <div className="user-channel-main">
          <div className="server-selector-sidebar">
            <ServerListContainer />
          </div>
          <div className="friend-selector-sidebar">
            <div className = "channel-list-div">
              <DmListContainer />
            </div>
            <FooterContainer />
          </div>
          <div className="message-div">
            <NavBarContainer />
            <FriendsContainer />
          </div>
        </div>
      )
    }
  }
}

export default UserChannel;
