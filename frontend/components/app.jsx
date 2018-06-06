import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserChannelContainer from './user/user_channel_container';
import LoadingContainer from './loading/loading_container';
import Modal from './modal/modal';
import Logo from './greeting/logo';
import WelcomePage from './welcome_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-start">
    <Modal />
    <Switch>
      <ProtectedRoute path="/app" component={LoadingContainer} />
      <ProtectedRoute path="/channels/user" component={UserChannelContainer} />
      <Route exact path="/" component={WelcomePage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
