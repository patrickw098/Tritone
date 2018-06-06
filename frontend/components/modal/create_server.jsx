import React from 'react';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      creator_id: props.user.id
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className="create-server-container">
        <h1>So you want a new server?</h1>
          <div className="create-server-div">
            <label>Enter Server Name</label>
            <input value={this.state.name} onChange={this.handleChange} />
            <button className="create-server-form-button" onClick={this.handleSubmit}> Create Server </button>
          </div>
      </div>
    )
  }

}

export default CreateServer;
