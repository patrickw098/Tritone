import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import FooterContainer from '../footer/footer_container';
import ChannelListContainer from './channel_list_container';

class ServerChannel extends React.Component {
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
    } else if (this.props.currentUser.server_ids.indexOf(parseInt(this.props.match.params.serverId)) === -1 ){
      return <Redirect to="/channels/user" />
    } else {
      return (
        <div className="user-channel-main">
          <div className="server-selector-sidebar">
            <ServerListContainer />
          </div>
          <div className="friend-selector-sidebar">
            <div className = "channel-list-div">
              <ChannelListContainer />
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

export default ServerChannel;
