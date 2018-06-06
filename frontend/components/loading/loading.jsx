import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentWillReceiveProps() {
    if ( this.props.currentUser ) {
      setTimeout(() => this.props.history.push('/channels/user'), 2000);
    }
  }

  render() {
    return (
      <div className="loading-box">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default withRouter(Loading);
