import React from 'react';
import DropdownContainer from './dropdown_container'

class Footer extends React.Component {
  toggleDropdown(e) {
    e.preventDefault();
    this.props.toggleFooter();
  }

  render() {
    return (
      <footer className="user-footer">
        <h3>{this.props.currentUser.display_name}</h3>
          <button onClick={(e) => this.toggleDropdown(e)} className="logout-button">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </button>
        <DropdownContainer />
      </footer>
    )
  }
}

export default Footer;