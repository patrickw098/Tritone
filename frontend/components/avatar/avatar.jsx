import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.colors = ['red', 'blue', 'black', 'yellow', 'purple', 'orange', 'green']
  }

  render() {
    let { user } = this.props;
    let randomColor

    if ( user !== undefined ) {
      randomColor = user.avatar_url || 'gray';
    } else if ( this.props.color ){
      randomColor = this.props.color;
    } else {
      let index = Math.floor( Math.random() * this.colors.length )
      randomColor = this.colors[index];
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
