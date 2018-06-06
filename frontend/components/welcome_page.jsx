import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import GetStartedContainer from './greeting/get_started_container';
import Logo from './greeting/logo';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const WelcomePage = () => {
  return (
    <div>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/" component={GetStartedContainer} />
      <Route path="/" component={Logo} />
      <AuthRoute path="/login" component={LogInContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
    </div>
  )
}


export default WelcomePage;
