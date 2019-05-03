import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {
  return (
    <div className="list-item-container">
      <ul className="list-item-ul">
        <div className="list-item-content">
          <div className="list-item-photo">
            Photo 
          </div>
          <div className="list-item-info">
            <Link to={`/api/listings/${listing.id}`}>{listing.name}</Link>

            <div className="list-item-description">
              {listing.description}
            </div>

            <div className="list-item-price">
              Price: ${listing.price}
            </div>
          </div>
        </div>
      </ul>

    </div>
  )
}

export default ListingIndexItem;