import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)