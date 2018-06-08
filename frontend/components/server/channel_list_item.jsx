import React from 'react';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li className="channel-name">#{ this.props.channel.name }</li>
    )
  }
}

export default ChannelListItem;
