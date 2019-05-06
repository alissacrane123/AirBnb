import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ListingShowContainer from './listing_show_container';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listingId = this.props.listing.id
    this.props.history.push(`/listings/${listingId}`)
  }

  render() {
    let {listing} = this.props;

    return (
    <div className="list-item-container">
      <ul className="list-item-ul">
        <div className="list-item-content">
          <div className="list-item-link" onClick={this.handleClick} >

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

          </div>
        </div>
      </ul>

    </div>
  )}
}

export default withRouter(ListingIndexItem);