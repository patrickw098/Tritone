import React from 'react';

class UserChannel extends React.Component {
  constructor(props) {
    super(props);
  }

  logout(e){
    e.preventDefault();
    this.props.logoutCurrentUser();
  }


  render() {
    <div className="user-channel-main">
      <footer className="user-footer">
        Welcome {this.props.currentUser}
        <button onClick={this.logout} className="logout-button">Logout</button>
      </footer>
    </div>
  }
}

export default UserChannel;
