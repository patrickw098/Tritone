import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import UserChannelContainer from './user/user_channel_container'

const App = () => (
  <div className="app-start">
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/" render={() => <section className="home-page-body"></section>}/>
    <Route path="/login" component={LogInContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/channels/user" component={UserChannelContainer} />
  </div>
);

export default App;
