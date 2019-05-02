import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


// import NavBarContainer from '../components/navbar/navbar_container';
// import LoginFormContainer from '../components/session/login_form_container';
// import SignupFormContainer from '../components/session/signup_form_container';
import ListingIndexContainer from '../components/listing/listing_index_container';
import Splash from '../components/splash/splash';
import Modal from '../components/session/modal_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <Route exact path="/listings" component={ ListingIndexContainer } />

      <Route exact path="/" component={Splash} /> 
    </header>
    
  </div>
);

export default App;

// Route path="/signup" component={SignupFormContainer}