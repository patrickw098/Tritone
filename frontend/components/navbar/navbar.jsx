import React from 'react';

class NavBar extends React.Component {
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
        <h1 className="channel-name-header"><span>#</span> {this.props.channel.name}</h1>
      </div>
      )
    }
  }
}

export default NavBar;
