import React from 'react';
import MessageItem from './message_item';
import ActionCable from 'actioncable';
import Avatar from '../avatar/avatar';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChannel(this.props.channelId);
    this.setUpSubscription(this.props.channelId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.channelId !== this.props.channelId) {
      this.props.fetchChannel(newProps.channelId);
      this.subscription.unsubscribe();
      this.setUpSubscription(newProps.channelId);
    }
  }

  componentWillUnMount(){
    this.subscription.unsubscribe();
  }

  setUpSubscription(channelId) {
    const { receiveMessage, history, receiveOnlineStatus, removeMessage } = this.props;

    this.consumer = ActionCable.createConsumer();
    this.subscription = this.consumer.subscriptions.create({
      channel: 'ChatChannel',
      room: `${channelId}`
    }, {
      received: ({ payload, command }) => {
        switch (command) {
          case "update_message":
            receiveMessage(payload);
            break;
          case "redirect_to_server":
            history.push(`/channels/${payload}`);
            break;
          case "update_users":
            receiveOnlineStatus(payload);
            break;
          case "delete_message":
            removeMessage(payload);
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
    const { users } = this.props;

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
              return <MessageItem key={message.id} message={message} author={users[message.author_id]}/>
            })}
            <li className="beginning-of-messages">
              <i className="fas fa-angle-double-left"></i>
                <span> </span>Beginning of messages<span> </span>
              <i className="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </div>
      )
    }
  }
}

export default Messages;
