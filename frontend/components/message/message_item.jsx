import React from 'react';
import DeleteContainer from '../util/delete_container';
import Avatar from '../avatar/avatar';

class MessageItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let time = this.props.message.created_at.slice(0,20);
    let image = <i className="fab fa-discord"></i>

    return (
      <li className="message-li">
        <div className="message-content">
          <div className="message-icon">
            <Avatar />
          </div>
          <div className="message-items-container">
            <h3 className="message-author">{this.props.message.author}
              <span className="timestamp">{time}</span>
            </h3>
            <h3 className="message-text"> {this.props.message.body}</h3>
          </div>
          <DeleteContainer formType={"message"} message={this.props.message}/>
        </div>
      </li>
    )
  }
}

export default MessageItem;
