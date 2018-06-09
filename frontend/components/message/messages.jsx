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

  render() {
    if ( this.props.messages[0] === undefined ) {
      return (
        <div className="messages-box">
        </div>
      )
    } else {
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
