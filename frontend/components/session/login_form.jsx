import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.submitForm(this.state);
  }

  render() {

    return (
      <div className="login-form-div">
        {this.props.errors}
        <form className="login-form">
          <div className="form-inner-div">
            <h1 className="login-form-header">{this.props.welcomeMessage[0]}</h1>
            <h2 className="login-form-subheader">{this.props.welcomeMessage[1]}</h2>
            <label><div>USERNAME</div>
              <input type="text" onChange={this.handleChange('username')} value={this.state.username}></input>
            </label>
            <label><div>PASSWORD</div>
              <input type="password" onChange={this.handleChange('password')} value={this.state.password}></input>
            </label>
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
            <div className="register-text">{this.props.welcomeMessage[2]} <Link to={this.props.welcomeMessage[3]}>{this.props.welcomeMessage[4]}</Link></div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
