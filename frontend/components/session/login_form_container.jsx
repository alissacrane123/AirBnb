
import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchListings } from '../../actions/listing_actions';

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
    closeModal: () => dispatch(closeModal()),
    fetchListings: () => dispatch(fetchListings({}))
  };
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default withRouter(LoginFormContainer);