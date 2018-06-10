import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserChannelContainer from './user/user_channel_container';
import ServerChannelContainer from './server/server_channel_container';
import LoadingContainer from './loading/loading_container';
import GreetingContainer from "./greeting/greeting_container";
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import GetStartedContainer from './greeting/get_started_container';
import ChannelMessageContainer from './channel/channel_message_container';
import Modal from './modal/modal';
import Logo from './greeting/logo';
import WelcomePage from './welcome_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-start">
    <Modal />
      <Switch>
        <ProtectedRoute path="/app" component={LoadingContainer} />
        <ProtectedRoute exact path="/channels/user" component={UserChannelContainer} />
        <ProtectedRoute exact path="/channels/:serverId/:channelId" component={ChannelMessageContainer} />
        <ProtectedRoute exact path="/channels/:serverId" component={ServerChannelContainer} />
        <Route exact path="/" component={Logo} />
        <AuthRoute path="/login" component={LogInContainer} />
        <AuthRoute path="/signup" component={SignUpContainer} />
        <Redirect to="/" />
      </Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/" component={GetStartedContainer} />
  </div>
);

export default App;
