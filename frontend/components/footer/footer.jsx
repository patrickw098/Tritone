import React from 'react';
import DropdownContainer from './dropdown_container'
import Avatar from '../avatar/avatar'

class Footer extends React.Component {
  toggleDropdown(e) {
    e.preventDefault();
    this.props.toggleFooter();
  }



  render() {
    return (
      <footer className="user-footer">
        <h3><Avatar user={this.props.currentUser}/>
          <div className="user-name-div">
            <div>{this.props.currentUser.display_name.slice(0,15)}</div>
            <div className="identifier">{"#" + Math.floor(1957 + parseInt(this.props.currentUser.id))}</div>
          </div>
        </h3>
          <button onClick={(e) => this.toggleDropdown(e)} className="logout-button">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </button>
        <DropdownContainer />
      </footer>
    )
  }
}

export default Footer;
