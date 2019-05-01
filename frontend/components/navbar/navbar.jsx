import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedInButtons = (
      <div className="nav-buttons">
        <button className="nav-button" onClick={this.props.logout}>Logout</button>
        <button>Help</button>
        
      </div>
    );

    const loggedOutButtons = (
      <div className="nav-buttons">
        <Link to={'/login'}>Log in</Link>
        <Link to={'/signup'}>Sign up</Link>
      </div>
    );

    return (
      <header>
        <div className="nav-container">

        
          { this.props.currentUser ? loggedInButtons : loggedOutButtons }

          <div className="nav-logo-container">
            <div class="nav-logo">
              <img class="logo" src={'logo2.png'} />
            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default NavBar;