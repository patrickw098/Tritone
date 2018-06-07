import React from 'react';
import { withRouter, NavLink, Redirect } from 'react-router-dom';

class ServerListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  serverLetters(name) {
    let words = name.split(" ");

    let titles = words.map ((word) => word.split("")[0]);

    return titles.join("")
  }

  render() {
    const { server } = this.props;
    const letter = this.serverLetters(server.name);

    if ( server.image_url !== undefined && server.image_url !== null ) {
      return (
        <li className="server-list-item">
          <NavLink activeClassName="active-server" to={`/channels/${server.id}`}>
            <button className="server-icon">
              <img src={server.image_url} />
            </button>
          </NavLink>
        </li>
      )
    } else {
      return (
        <li className="server-list-item">
          <NavLink activeClassName="active-server" to={`/channels/${server.id}`}>
            <button className="server-icon">
              <span>{letter}</span>
            </button>
          </NavLink>
        </li>
      )
    }
  }
}

export default ServerListItem;
