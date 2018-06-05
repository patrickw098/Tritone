import React from 'react';

class UserChannel extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this)
  }

  logout(e){
    e.preventDefault();
    this.props.logoutCurrentUser();
  }


  render() {

    return (
      <div className="user-channel-main">
        <footer className="user-footer">
          Welcome {this.props.currentUser.display_name}
          <button onClick={this.logout} className="logout-button">Logout</button>
        </footer>
      </div>
    )
  }
}

export default UserChannel;
