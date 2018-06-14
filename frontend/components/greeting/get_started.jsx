import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    }

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
    this.setState({
      username: "demo_user"
    })

    this.props.loginCurrentUser({ username: "demo_user", password: "fireball42" })
  }

  redirectToChannel(e) {
    e.preventDefault();
    this.props.history.push("/app");
  }

  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      if (this.state.username === null) {
        return (
          <div className="get-started-div">
            <h1> Tritone, a discord app clone </h1>
            <div className="get-started-button-container">
              <button disabled={this.state.username} className="demo-user" onClick={this.demoUser}>
                <h2>Demo User Log In</h2>
              </button>
              <button disabled={this.state.username} className="get-started-button" onClick={this.getStarted}>
                <h2>Get Started!</h2>
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="get-started-div">
            <h1> Tritone, a discord app clone </h1>
            <div className="get-started-button-container">
              <button disabled={this.state.username} id="logging-in" className="demo-user">
                <h2>Logging In...</h2>
              </button>
              <button disabled={this.state.username} className="get-started-button">
                <h2>Get Started!</h2>
              </button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <Redirect to="/app" />
      )
    }
  }
}

export default GetStarted;
