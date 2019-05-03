import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


import NavBarContainer2 from '../components/navbar/navbar2_container';
// import LoginFormContainer from '../components/session/login_form_container';
// import SignupFormContainer from '../components/session/signup_form_container';
// import ListingIndexContainer from '../components/listing/listing_index_container';
import SearchContainer from '../components/search/search_container';
import Splash from '../components/splash/splash';
import Modal from '../components/session/modal_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer2 />
    </header>
    <div className="body-container">
      <Switch>
        <Route exact path="/listings" component={SearchContainer} />

        <Route exact path="/" component={Splash} /> 
      </Switch>
    </div>
  </div>
);

export default App;

// Route path="/signup" component={SignupFormContainer}