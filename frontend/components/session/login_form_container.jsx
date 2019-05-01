
import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session.errors,
    formType: 'login'
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (user) => dispatch(login(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
