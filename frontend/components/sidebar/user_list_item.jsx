import React from 'react';
import Avatar from '../avatar/avatar';
import { withRouter } from 'react-router-dom';

class UserListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.user.display_name,
      id: this.props.user.id
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let index = this.props.dmServerIds.indexOf(`${this.state.id}`)
    if (this.state.id === this.props.currentUser ) {
      this.props.history.push('/channels/@me')
    } else if ( index !== -1 ) {
      this.props.history.push(`/channels/@me/${this.props.dmServers[this.state.id].channel_id}`);
    } else {
      this.props.dmServer(this.state).then(() =>
        this.props.history.push(`/channels/@me/${this.props.dmServers[this.state.id].channel_id}`));
    }
  }

  render() {
    const { user } = this.props;

    return (
      <li onClick={this.handleClick} className="online-user-list-container-li">
        <Avatar user={user}/>
          <div className="user-name-container">
            <strong>{user.display_name}</strong>
          </div>
      </li>
    )
  }
}

export default withRouter(UserListItem);
