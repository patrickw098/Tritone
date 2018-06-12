import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DeleteContainer from '../util/delete_container';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <NavLink activeClassName="selected-channel" to={`/channels/${this.props.serverId}/${this.props.channel.id}`}>
        <li className="channel-name">
          <span>#</span><strong>{ this.props.channel.name }</strong>
          <DeleteContainer channel={this.props.channel} serverId={this.props.serverId} formType={"channel"}/>
        </li>
      </NavLink>
    )
  }
}

export default withRouter(ChannelListItem);
