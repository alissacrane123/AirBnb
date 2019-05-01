
import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors,
    formType: 'login'
    // switchLink: <Link to="/signup">Sign up</Link>
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (user) => dispatch(login(user)),
    switchForm: (<button onClick={() => dispatch(openModal('signup'))}>Sign up</button>),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
