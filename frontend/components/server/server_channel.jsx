import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import Dropdown from '../footer/dropdown_container';
import ChannelListContainer from './channel_list_container';

class ServerChannel extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    this.props.closeFooter();
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
            <footer className="user-footer">
              <h3>{this.props.currentUser.display_name}</h3>
              <button onClick={this.logout} className="logout-button"><i className="fa fa-cog" aria-hidden="true"></i></button>
              <Dropdown />
            </footer>
          </div>
          <div className="message-div">
          </div>
        </div>
      )
    }
  }
}

export default ServerChannel;