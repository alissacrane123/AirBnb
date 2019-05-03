import React from 'react';
import { connect } from 'react-redux';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false
    };
  }

  render() {
    // if (!this.props.modal) return null;

    // let component;
    // switch (this.props.modal) {
    //   case 'login':
    //     component = <LoginFormContainer />;
    //     break;
    //   case 'signup':
    //     component = <SignupFormContainer />;
    //     break;
    //   default:
    //     return null;
    // }

    if (!this.props.modal) return null;


    if (this.props.modal === 'login'){
      return (
        <div className="modal-background" onClick={this.props.closeModal} >
          <div className="modal-child-login" onClick={e => e.stopPropagation()}>
            <div className="X-login">
              X
            </div>
            <div className="modal-form-login">
              <div className="fb-google">
                <div className="session-button-login"></div>
                <div className="session-button-login"></div>
                
              </div>
              <div className="login-line">
              _____________________________________________________________________________________
              </div>
              <LoginFormContainer />

            </div>
          </div>
        </div>
      )
    } else if (this.props.modal === 'signup') {
      return (
        <div className="modal-background" onClick={this.props.closeModal} >
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <div className="X">
              X
            </div>
            <div className="modal-form">
              <SignupFormContainer />
            </div>
          </div>
        </div>
      )
    }

    // return (
    //   <div className="modal-background" onClick={this.props.closeModal} >
    //     <div className="modal-child" onClick={e =>  e.stopPropagation()}>
    //       <div className="X">
    //         X
    //       </div>
    //       <div className="modal-form">
    //         { component }
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}

export default Modal;