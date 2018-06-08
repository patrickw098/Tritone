import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="message-li">
        <h3 className="message-text">{this.props.message.author_id}{this.props.message.body}</h3>
      </li>
    )
  }
}

export default MessageItem;
