import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel_id: props.channelId,
      body: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      channel_id: newProps.channelId
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state)
      .then(() => this.setState({ body: "" }));
  }

  render() {
    return (
      <div className="create-message-div">
        <form className="create-message-form">
          <input value={this.state.body} placeholder="Enter Message!" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}></button>
        </form>
      </div>
    )
  }
}

export default MessageInput;
