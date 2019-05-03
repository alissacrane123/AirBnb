import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

class NavBar2 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let openModal = this.props.openModal;

    const loggedInButtons = (
      <div className="nav2-buttons-container">
        <button className="nav2-button" onClick={this.props.logout}>Logout</button>
      </div>
    );


    const loggedOutButtons = (
      <div className="nav2-buttons-container">
        <button className="nav2-button" onClick={() => openModal('login')}>Log in</button>
        <button className="nav2-button" onClick={() => openModal('signup')}>Sign up</button>
        <button className="nav2-button">Help me</button>
      </div>
    );

    if (this.props.location.pathname === '/') {
      return null;
    } else {
        return (
          <header className="nav2-head">
            <div className="nav2-container">

              <div className="nav2-search-container">
                <div className="nav2-logo">
                  <img className="logo2" src={'other-logo2.png'} />
                </div>

                <div className="nav2-search-outer">
                  <div className="nav2-search-inner">
                    <input type="text" placeholder="Try &quot;Mars&quot;" id="nav2-search" />
                  </div>
                </div>
                
              </div>

              {this.props.currentUser ? loggedInButtons : loggedOutButtons}

            </div>
          </header>
        )
    } 
  }
}

export default NavBar2;





// render() {
//   let openModal = this.props.openModal;

//   const loggedInButtons = (
//     <div className="nav2-buttons-container">
//       <button className="nav2-button" onClick={this.props.logout}>Logout</button>
//       <button>Help</button>
//     </div>
//   );


//   const loggedOutButtons = (
//     <div className="nav2-buttons-container">
//       <button className="nav2-button" onClick={() => openModal('login')}>Log in</button>
//       <button className="nav2-button" onClick={() => openModal('signup')}>Sign up</button>
//       <button>Helpy</button>
//     </div>
//   );

//   if (this.props.location.pathname === '/') {
//     return null;
//   } else {
//     return (
//       <header>
//         <div className="nav2-container">

//           {this.props.currentUser ? loggedInButtons : loggedOutButtons}

//           <div className="nav2-logo-container">
//             <div className="nav2-search">
//               <input type="text" placeholder="Try anywhere!" id="nav2-search" />
//             </div>

//             <div className="nav2-logo">
//               <img className="logo2" src={'other-logo.png'} />
//             </div>
//           </div>

//         </div>
//       </header>