import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.serverId);
  }

  render() {
    if (this.props.channels === undefined) {
      return <div className="channel-list"><ul className="channel-list-ul"></ul></div>
    } else {
      return (
        <div className="channel-list">
          <div className="channel-list-header">
            <h1 className="server-name">{this.props.server.name}</h1>
          </div>
          <div className="channel-list-body">
            <ul className="channel-list-ul">
              {this.props.channels.map ((channel) => {
                return <ChannelListItem key={channel.id} channel={channel} />
              })}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default ChannelList;
