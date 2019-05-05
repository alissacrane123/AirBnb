import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {

  componentDidMount() {
    // this.props.fetchListings();
  }

  render() {
    const listings = this.props.listings.map(listing => (
      <ListingIndexItem key={listing.id} listing={listing} />
    ));

    // const count = listings.count();
    
    return (
      <div className="listings-index-container">

        <div className="listings-index-header">
          <div className="index-logo-container">
            <img className="index-logo" src={'index-logo.png'} />
          </div>
          <div className="index-aside">
            <div className="aside-text">
              There are 3 vans in San Francisco...better get one while ya can!
            </div>
          </div>
        </div>

        <div className="listings-container">

          <div className="listings-header-container">
            <div className="listings-header">
              <p>Introducing VanBnb in San Francisco</p>
            </div>
            {/* <div className="listings-header-aside">
              <p>A selection of vans verified for grooviness</p>
            </div> */}
          </div>

          <ul className="listings-ul">
            {/* <div className="listings-li"> */}
              { listings }
            {/* </div> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListingIndex;