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
          <div className="splash-search-container">
            <div className="splash-search">
              
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Splash;