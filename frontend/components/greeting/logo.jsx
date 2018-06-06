import React from 'react';

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.clickLogo = this.clickLogo.bind(this);
  }

  clickLogo(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="logo-container">
        <button>
          <h1 onClick={this.clickLogo}><i className="fab fa-discord"></i>Tritone </h1>
        </button>
      </div>
    )
  }
}

export default Logo;
