import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import FooterContainer from '../footer/footer_container';
import ChannelListContainer from './channel_list_container';
import NavBarContainer from '../navbar/navbar_container';

class ServerChannel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.serverId)
  }

  componentWillReceiveProps(newProps) {
    if ( newProps.serverId !==  this.props.serverId ) {
      this.props.fetchServer(this.props.serverId)
    } else {
      this.props.history.push(`/channels/${this.props.serverId}/${this.props.server.channel_ids[0]}`)
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
            <NavBarContainer />
          </div>
        </div>
      )
    }
  }
}

export default ServerChannel;
