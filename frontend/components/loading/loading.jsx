import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("hello", this.props.userId)
    this.props.fetchUser(this.props.userId)
  }

  componentWillReceiveProps() {
    console.log( this.props.currentUser )
    if ( this.props.currentUser ) {
      console.log("yayyyy");
      this.props.history.push('/channels/user');
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
