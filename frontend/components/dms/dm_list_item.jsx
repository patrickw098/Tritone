import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DeleteContainer from '../util/delete_container';

class DmListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <NavLink activeClassName="selected-channel" to={`/channels/@me/${this.props.dmServer.channel_id}`}>
        <li className="channel-name">
          <strong>{ this.props.dmServer.name }</strong>
        </li>
      </NavLink>
    )
  }
}

export default withRouter(DmListItem);
