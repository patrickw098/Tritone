import React from 'react';
import { withRouter } from 'react-router-dom';

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="error-message" className="create-server-container">
          <h1 className="error-message-modal">{this.props.message}</h1>
        </div>
    )
  }
}

export default withRouter(ErrorMessage);
