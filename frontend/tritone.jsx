import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { createUser } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createUser = createUser;
  const root = document.getElementById('root');

  ReactDOM.render(<h1>Welcome to Tritone</h1>, root);
});
