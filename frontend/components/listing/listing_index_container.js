import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import React from 'react';
import { fetchListings } from '../../actions/listing_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);