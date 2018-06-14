import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.closeFooter = this.closeFooter.bind(this);
    this.userProfile = this.userProfile.bind(this);
  }

  closeFooter(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.closeFooter();
    this.props.logout();
  }

  userProfile(e) {
    e.preventDefault();
    this.props.closeFooter();
    this.props.openModal('openProfile');
  }

  render() {
    if (!this.props.dropdown) {
      return null;
    } else {
      return (
        <div className="dropdown-box">
          <ul>
            <li onClick={this.userProfile}> Open Profile </li>
            <li onClick={this.closeFooter}> Log Out </li>
          </ul>
        </div>
      )
    }
  }
}

export default Dropdown;
