import React from 'react';
import MessageItem from './message_item';
import ActionCable from 'actioncable';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.channelId);
    this.setUpSubscription(this.props.channelId, this.props.receiveMessage);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.channelId !== this.props.channelId) {
      this.props.fetchChannel(newProps.channelId);
      this.setUpSubscription(newProps.channelId, newProps.receiveMessage);
    }
  }

  setUpSubscription(channelId, receiveMessage) {
    const cable = ActionCable.createConsumer();
    cable.subscriptions.create({
      channel: 'ChatChannel',
      room: `${channelId}`
    }, {
      connected: function() {
      },
      disconnected: function() {
      },
      received: ({ payload }) => {
        receiveMessage(payload)
      },
    });
  }

  combineMessages(messages) {
    let newMessages = [];
    var i = 0;

    while ( i < messages.length) {
      let message = messages[i];
      let next = messages[i+1];
      let last = messages[i+2];
      if ( next === undefined ) break;

      if ( message.author_id === next.author_id ) {
        message.body += next.body;

        if (message.author_id === last.author_id ) {
          message.body += last.body;

          i++;
        }

        i++;
      }

      newMessages.push(message);
      i++
    }

    return newMessages;
  }

  render() {
    if ( this.props.messages[0] === undefined ) {
      return (
        <div className="messages-box">
        </div>
      )
    } else {
      let messages = this.props.messages;

      return (
        <div className="messages-box">
          <ul className="messages-ul">
            { messages.map ((message) => {
              return <MessageItem key={message.id} message={message} />
            })}
          </ul>
        </div>
      )
    }
  }
}

export default Messages;
