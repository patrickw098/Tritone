import React from 'react';

class ServerOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    if  ( this.state.toggle ) {
      this.setState({
        toggle: false
      })
    } else {
      this.setState({
        toggle: true
      })
    }
  }

  handleDelete(e) {
    e.preventDefault();
  }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveServer(this.props.serverMembershipId);
    this.props.history.push("/channels/user")
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.openModal("editServer");
  }

  render() {
    var component;

    if (this.state.toggle === false) {
      return (
        <div onClick={this.toggleClick} className="server-options-container">
          <i className="fas fa-caret-down"></i>
        </div>
      )
    } else {
      return (
        <div onClick={this.toggleClick} className="server-options-container">
          <i className="fas fa-caret-down"></i>
            <div className="dropdown-box-server">
              <ul className="server-options-ul">
                <li onClick={this.handleEdit}>Edit Server Name</li>
                <li onClick={this.handleLeave}>Leave Server</li>
              </ul>
            </div>
        </div>
      )
    }
  }
}

export default ServerOptions;
