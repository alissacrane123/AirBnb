import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing
// import { login, logout, signup } from './util/session_api_util';
// import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  
  // testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // testing end

  ReactDOM.render(<Root store={store} />, rootEl);
});

// rendering Root component into #root container 
// passing store as a prop