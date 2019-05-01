import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedInButtons = (
      <ul>
        <button>Help</button>
        <button className="nav-button" onClick={this.props.logout}>Logout</button>
      </ul>
    );

    const loggedOutButtons = (
      <ul>
        <Link to={'/login'}>Log in</Link>
        <Link to={'/signup'}>Sign up</Link>

      </ul>
    );

    return (
      <header>
        <div className="nav-bar">
          <nav className="nav-bar-buttons">
            
            { this.props.currentUser ? loggedInButtons : loggedOutButtons }
            
          </nav>
        </div>
      </header>
    )
  }
}

export default NavBar;