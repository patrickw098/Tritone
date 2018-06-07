import React from 'react';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      button: "create"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    }, () => {
      if (this.state.button === "join") {
        this.props.searchServers(this.state);
      }
    })
  }

  handleSubmit(type, e) {
    e.preventDefault();
    if (type === "create") {
      this.props.createServer(this.state).then(() => this.props.closeModal());
    }
  }

  switchButtons(type, e) {
    e.preventDefault();
    this.setState({
      name: "",
      button: type
    })
  }

  render() {
    if (this.state.button === "create" ) {
      return (
        <div className="create-server-container">
          <h1>Create Server</h1>
            <div className="create-server-div">
              <input value={this.state.name} onChange={this.handleChange} />
              <div className="buttons-containers">
                <button className="create-server-form-button" onClick={(e) => this.handleSubmit("create", e)}> Create Server </button>
                or
                <button className="join-server-form-button" onClick={(e) => this.switchButtons("join", e)}> Join Server </button>
              </div>
            </div>
        </div>
      )
    } else {
      return (
        <div className="join-server-container">
          <h1>Join Server</h1>
            <div className="join-server-div">
              <input value={this.state.name} onChange={this.handleChange} />
              <div className="search-box-div">
              </div>
              <div className="buttons-containers">
                <button className="create-server-form-button" onClick={(e) => this.switchButtons("create", e)}> Create Server </button>
                or
                <button className="join-server-form-button" onClick={(e) => this.handleSubmit("join", e)}> Join Server </button>
              </div>
            </div>
        </div>
      )
    }
  }

}

export default CreateServer;
