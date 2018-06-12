import React from 'react';
import ServerListItem from './server_list_item';
import { withRouter, NavLink } from 'react-router-dom';

class ServerList extends React.Component {
  constructor(props) {
    super(props);

      this.goToUserPage = this.goToUserPage.bind(this);
      this.openServerModal = this.openServerModal.bind(this);
  }

  componentDidMount() {
    if ( this.props.match.params.serverId !== undefined ) {
      this.props.fetchServer(this.props.match.params.serverId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.serverId !== this.props.match.params.serverId ) {
      this.props.fetchServer(newProps.match.params.serverId);
    }
  }

  goToUserPage(e) {
    e.preventDefault();
    this.props.history.push('/channels/@me')
  }

  openServerModal(e) {
    e.preventDefault();
    this.props.openModal('createServer');
  }

  render() {
    return (
      <ul className="server-list-ul">
        <li className="user-page-li">
          <NavLink activeClassName="active" to="/channels/@me">
            <button className="user-page-button">
              <i className="fa fa-users" aria-hidden="true">
              </i>
            </button>
          </NavLink>
        </li>
          { this.props.servers.map((server) => {
            return <ServerListItem key={server.id} server={server} />
          })}
        <li><button className="create-server-button" onClick={this.openServerModal}>+</button></li>
      </ul>
    )
  }
}


export default withRouter(ServerList);
