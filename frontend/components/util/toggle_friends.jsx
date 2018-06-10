import React from 'react';

class ToggleFriends extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.props.resetFriends();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.toggleFriends();
  }

  render() {
    return(
      <div className="toggle-friends-div" onClick={this.handleClick}>
        <i className="fas fa-user-cog"></i>
      </div>
    )
  }
}

export default ToggleFriends;
