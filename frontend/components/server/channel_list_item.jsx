import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  selectChannel(e) {
    e.preventDefault();

  }

  render () {
    return (
      <NavLink activeClassName="selected-channel" to={`/channels/${this.props.serverId}/${this.props.channel.id}`}>
        <li className="channel-name">
          <span>#</span> { this.props.channel.name }
        </li>
      </NavLink>
    )
  }
}

export default withRouter(ChannelListItem);
