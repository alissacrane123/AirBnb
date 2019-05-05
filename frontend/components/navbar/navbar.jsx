import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let openModal = this.props.openModal;

    const loggedInButtons = (
      <div className="nav-buttons">
        <button className="nav-button" onClick={this.props.logout}>Logout</button>
        {/* <button>Help</button>       */}
      </div>
    );


    const loggedOutButtons = (
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => openModal('login')}>Log in</button>
        <button className="nav-button" onClick={() => openModal('signup')}>Sign up</button>
        {/* <button>Helpy</button> */}
      </div>
    );

    return (
      <header>
        <div className="nav-container">

        
          { this.props.currentUser ? loggedInButtons : loggedOutButtons }

          <div className="nav-logo-container">
            <div className="nav-logo">
              <img className="logo" src={'splash-logo.png'} />
            </div>
          </div>

        </div>
      </header>
    )
  }
}

export default NavBar;