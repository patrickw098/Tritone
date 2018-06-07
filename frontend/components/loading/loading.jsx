import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.words = [
      "Riding a capybara",
      "Loading screen is undefined",
      "Stuck in an infinite loop, Stuck in an infinite loop, Stuck",
      "Fixing 422 errors",
      "Mastering flex-box",
      "Can't read value name of undefined",
      "Syntax error, unexpected token , ",
      "React child needs a key",
      "Trying to render an object",
      "Can't call method 'then' on undefined",
      "Likely forgot to export",
      "Reducer needs a type",
      "Normalizing state"
    ]

    this.state = {
      word: ""
    }

  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
    let idx = Math.floor(Math.random() * this.words.length);
    this.setState({
      word: this.words[idx]
    })
  }

  componentWillReceiveProps() {
    if ( this.props.currentUser ) {
      setTimeout(() => this.props.history.push('/channels/user'), 2000);
    }
  }

  render() {
    return (
      <div className="loading-box">
        <div className="spinner-container">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <h1>{this.state.word}</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Loading);
