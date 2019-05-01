import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    currentUser: state.session.id 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);