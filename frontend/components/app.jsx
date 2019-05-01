import React from 'react';
import { Route } from 'react-router-dom';

import NavBarContainer from '../components/navbar/navbar_container';
import LoginFormContainer from '../components/session/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>ShareBnb</h1>
      <NavBarContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />

  </div>
);

export default App;

// Route path="/signup" component={SignupFormContainer}