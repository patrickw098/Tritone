import React from 'react';
import { withRouter } from 'react-router-dom';

class Delete extends React.Component {
  constructor(props) {
    super(props);

    this.handleMessage = this.handleMessage.bind(this);
    this.handleChannel = this.handleChannel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleMessage(e) {
    e.preventDefault();
    this.props.deleteMessage(this.props.message.id)
  }

  handleChannel(e) {
    e.preventDefault();
    this.props.deleteChannel(this.props.channel.id);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.openModal("editChannel");
  }


  render() {
    if ( this.props.formType === "message" && this.props.currentUser === this.props.message.author_id ) {
      return (
        <div className="delete-message-div">
          <button className="delete-message-button" onClick={this.handleMessage}><i className="fas fa-trash-alt"></i></button>
        </div>
      )
    } else if ( this.props.formType === "channel" && this.props.currentUser === this.props.channel.creator_id && this.props.channel.name !== "general") {
      return (
        <div className="delete-channel-div">
          <button className="edit-channel-button" onClick={this.handleEdit}><i className="fas fa-edit"></i></button>
          <button className="delete-channel-button" onClick={this.handleChannel}><i className="fas fa-trash-alt"></i></button>
        </div>
      )
    } else {
      return (
        <div className="empty-delete-div">
        </div>
      )
    }
  }
}

export default withRouter(Delete);
