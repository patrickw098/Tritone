import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { server } = this.props;
    const letter = server.name.split("")[0];

    if ( server.image_url !== undefined && server.image_url !== null ) {
      console.log("i'm in here");
      return (
        <li className="server-list-item">
          <button className="server-icon">
            <img src={server.image_url} />
          </button>
        </li>
      )
    } else {
      console.log("your code works");
      return (
        <li className="server-list-item">
          <button className="server-icon">
            <span>{letter}</span>
          </button>
        </li>
      )
    }
  }
}

export default ServerListItem;
