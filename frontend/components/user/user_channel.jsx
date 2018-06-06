import React from 'react';
import { Redirect } from 'react-router-dom';

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
    if ( this.props.currentUser.display_name === undefined ) {
      return <Redirect to="/app" />
    } else {
      return (
        <div className="user-channel-main">
          <div className="server-selector-sidebar">
          </div>
          <div className="friend-selector-sidebar">
            <footer className="user-footer">
              <h3>{this.props.currentUser.display_name}</h3>
              <button onClick={this.logout} className="logout-button"><i class="fa fa-cog" aria-hidden="true"></i></button>
            </footer>
          </div>
          <div className="message-div">
          </div>
        </div>
      )
    }
  }
}

export default UserChannel;
