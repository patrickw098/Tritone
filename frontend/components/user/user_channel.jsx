import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import ChannelListContainer from '../server/channel_list_container';
import FooterContainer from '../footer/footer_container';

class UserChannel extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this)
  }

  logout(e){
    e.preventDefault();
    if ( this.props.dropdown ) {
      this.props.closeFooter();
    } else {
      this.props.openFooter(true);
    }
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
            </div>
            <FooterContainer />
          </div>
          <div className="message-div">
          </div>
        </div>
      )
    }
  }
}

export default UserChannel;
