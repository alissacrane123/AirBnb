import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import NavBar2 from './navbar2';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    currentUser: state.session.id,
    filters: state.ui.filters,
    listings: Object.values(state.entities.listings)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
}

const NavBar2Container = connect(mapStateToProps, mapDispatchToProps)(NavBar2);

export default withRouter(NavBar2Container);