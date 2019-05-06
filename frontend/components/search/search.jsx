import React from 'react';

import ListingMap from './listing_map';
import ListingIndex from '../listing/listing_index';
import NavBarContainer from '../navbar/navbar_container';

class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    let {  listings, fetchListings, updateFilter, city } = this.props;
    let searchListings = [];

    return (

      <div className="search-container">

        <div className="search-listings">
          <ListingIndex listings={listings} fetchListings={fetchListings} />
        </div>
        
        <div className="search-map">
          <ListingMap city={city} listings={listings} updateFilter={updateFilter} />
        </div>
      </div>
    )
  }
}

export default Search;

// api key= AIzaSyAb1J8_aFITMmAJyOfXWARxFvU_WOdHAHk