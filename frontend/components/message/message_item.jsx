import React from 'react';

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
            {image}
          </div>
          <div className="message-items-container">
            <h3 className="message-author">{this.props.message.author}
              <span className="timestamp">{time}</span>
            </h3>
            <h3 className="message-text"> {this.props.message.body}</h3>
          </div>
        </div>
      </li>
    )
  }
}

export default MessageItem;
