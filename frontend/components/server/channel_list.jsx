import React from 'react';
import ChannelListItem from './channel_list_item';
import ServerOptionsContainer from '../util/server_options_container'
import { withRouter, Redirect } from 'react-router-dom';
import CreateChannelContainer from './create_channel_container'

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchServer(this.props.serverId);
  }

  componentWillReceiveProps(newProps) {
    if ( newProps.match.path === "/channels/:serverId" ) {
      // this.props.fetchChannel(newProps.channels[0].id);
      // this.props.history.push(`/channels/${newProps.serverId}/${newProps.channels[0].id}`);
    }
  }

  render() {
    if (this.props.channels[0] === undefined) {
      return <div className="channel-list"><ul className="channel-list-ul"></ul></div>
    } else {
      return (
        <div className="channel-list">
          <div className="channel-list-header">
            <h1 className="server-name"><span className="header-span">{this.props.server.name}</span><ServerOptionsContainer server={this.props.server} /> </h1>
          </div>
          <div className="channel-list-body">
            <ul className="channel-list-ul">
              {this.props.channels.map ((channel) => {
                return <ChannelListItem key={channel.id} channel={channel} serverId={this.props.serverId}/>
              })}
              <CreateChannelContainer />
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(ChannelList);
