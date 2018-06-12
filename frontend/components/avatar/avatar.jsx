import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { user } = this.props;

    return (
      <div id="avatar-container">
        <div id="avatar-circle">
          <i className={`fab fa-discord ${this.props.color}`}></i>
        </div>
      </div>
    )
  }
}

export default Avatar;
