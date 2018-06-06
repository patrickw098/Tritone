import React from 'react';
import { Link } from 'react-router-dom'

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.getStarted = this.getStarted.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.redirectToChannel = this.redirectToChannel.bind(this);
  }

  getStarted(e) {
    e.preventDefault();
    this.props.history.push("/signup");
  }

  demoUser(e) {
    e.preventDefault();
    this.props.loginCurrentUser({ username: "demo_user", password: "fireball42" })
  }

  redirectToChannel(e) {
    e.preventDefault();
    this.props.history.push("/app");
  }

  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return (
        <div className="get-started-div">
          <button onClick={this.getStarted}>
            <h1>Get Started!</h1>
          </button>
          <button onClick={this.demoUser}>
            <h1>Demo User Login</h1>
          </button>
        </div>
      );
    } else {
      return (
        <div className="get-started-div">
          <button onClick={this.redirectToChannel}>
            <h1>Open App!</h1>
          </button>
        </div>
      )
    }
  }
}

export default GetStarted;
