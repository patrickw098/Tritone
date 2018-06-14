import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import ChannelListContainer from '../server/channel_list_container';
import FooterContainer from '../footer/footer_container';
import NavBarContainer from '../navbar/navbar_container';
import DmListContainer from '../dms/dms_list_container';

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
            <div className="no-friends-div">
              <h1 className="no-friends">No Friends Yet...</h1>
              <i className="far fa-frown"></i>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default UserChannel;
