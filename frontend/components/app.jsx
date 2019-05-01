import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


// import NavBarContainer from '../components/navbar/navbar_container';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import Splash from '../components/splash/splash';

const App = () => (
  <div>
    
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>

      <Route exact path="/" component={Splash} /> 

    
  </div>
);

export default App;

// Route path="/signup" component={SignupFormContainer}