import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { createUser } from './actions/session_actions';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createUser = createUser;
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
