import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="splash">
        
        <header>
          <NavBarContainer />
        </header>

        <div>
          <p>MODAL FORMS</p>
          <p>SEARCH FORM</p>

        </div>
      </div>
    )
  }
}

export default Splash;