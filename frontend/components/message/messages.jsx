import React from 'react';
import MessageItem from './message_item';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("channelAJAX");
    this.props.fetchChannel(this.props.channelId);
  }

  render() {
    debugger;
    if ( this.props.messages[0] === undefined ) {
      return (
        <div className="messages-box">
        </div>
      )
    } else {
      console.log("i'm here");
      return (
        <div className="messages-box">
          <ul className="messages-ul">
            { this.props.messages.map ((message) => {
              return <MessageItem key={message.id} message={message} />
            })}
          </ul>
        </div>
      )
    }
  }
}

export default Messages;
