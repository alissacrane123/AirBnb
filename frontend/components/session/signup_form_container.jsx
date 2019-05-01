
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors,
    formType: 'signup',
    switchLink: <Link to="/login">Log in</Link>
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (user) => dispatch(signup(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
