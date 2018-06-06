import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.words = [
      "Riding a capybara",
      "Loading screen is undefined",
      "Stuck in an infinite loop",
      "Fixing 422 errors",
      "Mastering flex-box",
      "Can't read value `name` of undefined"
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
