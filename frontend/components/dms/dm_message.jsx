import React from 'react';
import { Redirect } from 'react-router-dom';
import ServerListContainer from '../sidebar/server_list_container';
import ChannelListContainer from '../server/channel_list_container';
import FooterContainer from '../footer/footer_container';
import DmNavBarContainer from '../navbar/dm_navbar_container';
import DmListContainer from '../dms/dms_list_container';
import MessagesContainer from '../message/messages_container';
import MessageInputContainer from '../message/message_input_container';


class DmMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if ( this.props.currentUser.display_name === undefined ) {
      return <Redirect to="/app" />
    } else if (this.props.channelIds.indexOf(parseInt(this.props.match.params.channelId)) === -1 ){
      return <Redirect to="/channels/@me" />
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
            <DmNavBarContainer />
            <div className="messages-main-body">
              <div className="messages-sub-body">
                <div className="messages">
                  <MessagesContainer />
                </div>
                <div className="message-input-div">
                  <MessageInputContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default DmMessage;
