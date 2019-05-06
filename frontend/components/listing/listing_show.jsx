
import React from 'react';
import { Link } from 'react-router-dom';

import listingMap from '../search/listing_map';

class listingShow extends React.Component {


  render() {
    let { listing, listingId } = this.props;

    return (
      <div className="show-body">
        <div className="show-photos-container">
          hi
        </div>

        <div className="show-booking-container">
        </div>

        <div className="show-content-container">
        
          <div className="show-info-container">
          </div>
        
          <div className="show-amenities-container">
          </div>

          <div className="show-reviews-container">
          </div>
        </div>
      </div>
    )
  }

}

export default listingShow;