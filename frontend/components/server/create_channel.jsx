import React from 'react';

class CreateChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      server_id: props.serverId,
      name: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      server_id: newProps.serverId
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state)
      .then(() => this.setState({ name: "" }));
  }

  render() {
    return (
      <li className="create-channel-li">
        <form className="create-form">
          <input value={this.state.name} placeholder="Create New Channel!" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Create!</button>
        </form>
      </li>
    )
  }
}

export default CreateChannel;
