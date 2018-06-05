import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import UserChannelContainer from './user/user_channel_container';
import GetStartedContainer from './greeting/get_started_container';
import LoadingContainer from './loading/loading_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-start">
    <Route exact path="/" component={GreetingContainer} />
    <Route exact path="/" component={GetStartedContainer} />
    <Route path="/" render={() => <section className="home-page-body"></section>}/>
    <AuthRoute path="/login" component={LogInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <ProtectedRoute path="/app" component={LoadingContainer} />
    <ProtectedRoute path="/channels/user" component={UserChannelContainer} />
  </div>
);

export default App;
