import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors,
    formType: 'signup'
    // switchLink: <Link to="/login">Log in</Link>
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (user) => dispatch(signup(user)),
    switchForm: (<button className="switch" onClick={() => dispatch(openModal('login'))}>Log in</button>),
    closeModal: () => dispatch(closeModal())
  };
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

export default withRouter(SignupFormContainer);