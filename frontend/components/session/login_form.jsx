import React from 'react';
import { Redirect, Link, Route } from 'react-router-dom';
import Logo from '../greeting/logo';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    let input = document.getElementById("form-input-id");
    input.focus();
  }

  handleChange(type) {
    return (e) => {
      this.setState( {
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(() =>
      this.props.history.push('/app')
    )
  }

  render() {
    let error1;
    let error2;

    if ( this.props.errors ) {
      if ( this.props.errors.length === 1 && this.props.errors[0].indexOf("Password") !== -1 ) {
        error2 = this.props.errors[0];
      } else {
        error1 = this.props.errors[0];
        error2 = this.props.errors[1];
      }
    }

    return (
      <div>
        <Route path="/" component={Logo} />
        <div className="login-form-div">
          <form className="login-form">
            <div className="form-inner-div">
              <h1 className="login-form-header">{this.props.welcomeMessage[0]}</h1>
              <h2 className="login-form-subheader">{this.props.welcomeMessage[1]}</h2>
              <label><div>USERNAME<span className="form-errors">{error1}</span></div>
                <input id="form-input-id" type="text" onChange={this.handleChange('username')} value={this.state.username}></input>
              </label>
              <label><div>PASSWORD<span className="form-errors">{error2}</span></div>
                <input type="password" onChange={this.handleChange('password')} value={this.state.password}></input>
              </label>
              <button onClick={this.handleSubmit}>{this.props.formType}</button>
              <div className="register-text">{this.props.welcomeMessage[2]} <Link to={this.props.welcomeMessage[3]}>{this.props.welcomeMessage[4]}</Link></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
