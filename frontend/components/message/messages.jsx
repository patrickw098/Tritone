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
    let consumer = ActionCable.createConsumer();
    consumer.subscriptions.create({
      channel: 'ChatChannel',
      room: `${channelId}`
    }, {
      received: ({ payload, command }) => {
        switch (command) {
          case "update_message":
            this.props.receiveMessage(payload);
            break;
          case "redirect_to_server":
            this.props.history.push(`/channels/${payload}`);
            break;
          case "update_users":
            this.props.receiveServer(payload);
            break;
          default:
            console.log(`Unknown command, ${command}`)
        }
      }
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
