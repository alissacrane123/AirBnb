import { connect } from 'react-redux';
// import ListingIndex from '../listing/listing_index';
// import React from 'react';
import Search from './search';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings),
    city: state.ui.filters.city,
    bounds: state.ui.bounds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);