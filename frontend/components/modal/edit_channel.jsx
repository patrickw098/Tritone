import React from 'react';
import { withRouter } from 'react-router-dom';

class EditChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.channel

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById("input-id");
    input.focus();
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateChannel(this.state).then(() => this.props.closeModal());
  }

  render() {
    return (
        <div id="edit-channel" className="create-server-container">
          <h1>Enter New Name For {this.props.channel.name}</h1>
            <div className="create-server-div">
            <form onSubmit={(e) => this.handleSubmit(e) }>
              <input id="input-id" value={this.state.name} onChange={this.handleChange} placeholder={this.props.channel.name}/>
            </form>
            <div className="buttons-containers">
              <button className="create-server-form-button" onClick={this.handleSubmit}>Update</button>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(EditChannel);
