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
    this.closeOptions = this.closeOptions.bind(this);
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

  closeOptions(event) {
    if (event.key === 'Escape' || event.keyCode === 27 ) {
      this.setState({
        toggle: false
      })
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', (event) => this.closeOptions(event))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event) => this.closeOptions(event));
  }

  handleDelete(e) {
    e.preventDefault();
  }

  handleLeave(e) {
    e.preventDefault();
    this.props.leaveServer(this.props.serverMembershipId);
    this.props.history.push("/channels/@me")
  }

  handleEdit(e) {
    e.preventDefault();
    if ( this.props.server.creator_id === this.props.currentUser ) {
      this.props.openModal("editServer");
    } else {
      this.props.errorMessage("Only the server administrator can edit the server name.")
    }
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
