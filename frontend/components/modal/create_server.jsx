import React from 'react';
import SearchBox from './search_box';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      button: "create",
      id: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleServerSelect = this.handleServerSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
      id: null
    }, () => {
      if (this.state.button === "join" && this.state.name.length === 1) {
        this.props.searchServers(this.state);
      }
    })
  }

  handleServerSelect(e, object) {
    e.preventDefault();
    this.setState({
      name: object.name,
      id: object.id
    });
  }

  handleSubmit(type, e) {
    e.preventDefault();
    if (type === "create") {
      this.props.createServer(this.state).then(() => this.props.closeModal());
    } else if ( type === "join" && this.state.id !== null ) {
      this.props.joinServer(this.state).then(() => this.props.closeModal());
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
              <div className="search-box-div"></div>
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
                <SearchBox servers={this.props.servers} query={this.state.name} select={this.handleServerSelect}/>
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
