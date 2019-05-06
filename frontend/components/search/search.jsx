import React from 'react';

import ListingMap from './listing_map';
// import ListingMapContainer from './map_container';
import ListingIndex from '../listing/listing_index';
import NavBarContainer from '../navbar/navbar_container';

class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    let { filters, listings, fetchListings, updateFilter, city } = this.props;
    let searchListings = [];

    return (

      <div className="search-container">

        <div className="search-listings">
          <ListingIndex listings={listings} fetchListings={fetchListings} />
        </div>
        
        <div className="search-map">
          <ListingMap city={city} filters={filters} listings={listings} fetchListings={fetchListings} updateFilter={updateFilter} />
          {/* <ListingMapContainer /> */}
        </div>
      </div>
    )
  }
}

export default Search;

// api key= AIzaSyAb1J8_aFITMmAJyOfXWARxFvU_WOdHAHk