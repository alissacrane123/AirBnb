import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {
  return (
    <div className="list-item-container">
      <ul className="list-item-ul">
        <div className="list-item-content">
          <Link className="list-item-link" to={`/api/listings/${listing.id}`}>

            <div className="list-item-photo">
               
            </div>
            <div className="list-item-info">

              <ul className="item-info-ul">
                <div className="item-name">
                  {listing.name}
                </div>

                <div className="list-item-price">
                  ${listing.price} per day
                </div>
              </ul>
            </div>

          </Link>
        </div>
      </ul>

    </div>
  )
}

export default ListingIndexItem;