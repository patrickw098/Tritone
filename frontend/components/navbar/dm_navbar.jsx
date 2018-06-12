import React from 'react';
import ToggleFriendsContainer from '../util/toggle_friends_container';

class DmNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if ( this.props.channel === undefined ) {
      return (
        <div className="navbar-header">
        </div>
      )
    } else {
    return (
      <div className="navbar-header">
        <h1 className="channel-name-header"><span>@</span>{this.props.name.slice(0,120)}</h1>
      </div>
      )
    }
  }
}

export default DmNavBar;
