import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.colors = ['red', 'blue', 'black', 'gray', 'purple', 'orange', 'green']
  }

  render() {
    let { user } = this.props;
    let randomColor

    if ( user !== undefined ) {
      randomColor = user.avatar_url || 'gray';
    } else if ( this.props.color ){
      randomColor = this.props.color;
    } else {
      randomColor = "gray";
    }

    return (
      <div id="avatar-container">
        <div id="avatar-circle">
          <i className={`fab fa-discord ${randomColor}`}></i>
        </div>
      </div>
    )
  }
}

export default Avatar;
