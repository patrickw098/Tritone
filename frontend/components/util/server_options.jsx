import React from 'react';

class ServerOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false;
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  toggleClick() {
    if  ( this.state.toggle ) {
      this.setState({
        toggle: false;
      })
    } else {
      this.setState({
        toggle: true;
      })
    }
  }

  handleDelete(e) {
    e.preventDefault();
  }

  handleLeave(e) {
    e.preventDefault();
  }

  handleEdit(e) {
    e.preventDefault();
  }

  render() {
    let component;

    if ( currentUser.id === server.creator_id ) {
      component = <div onClick={this.handleDelete}>Delete Server</div>
    }

    if (toggle === false) {
      return (
        <div onClick={this.toggleClick} className="server-options-container">
          <i className="fas fa-caret-down"></i>
        </div>
      )
    } else {
      return (
        <div onClick={this.toggleClick} className="server-options-container">
          <i className="fas fa-caret-down"></i>
            <ul className="server-options-ul">
              <li onClick={this.handleLeave}>Leave Server</li>
              <li onClick={this.handleEdit}>Edit Server</li>
              <li>{component}</li>
            </ul>
        </div>
      )
    }
  }
}
