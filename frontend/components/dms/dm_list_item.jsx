import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DeleteContainer from '../util/delete_container';
import Avatar from '../avatar/avatar';

class DmListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <NavLink activeClassName="selected-channel" to={`/channels/@me/${this.props.dmServer.channel_id}`}>
        <li id="dm-channel-name" className="channel-name">
          <div className="dm-channel-name">
            <Avatar />
            <strong>{ this.props.dmServer.name }</strong>
          </div>
        </li>
      </NavLink>
    )
  }
}

export default withRouter(DmListItem);
