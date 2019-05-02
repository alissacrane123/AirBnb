export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    let listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing )

    listings.filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing))

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
          .forEach(listingId => this.removeMarker(this.markers[listingId]))
  }

  createMarkerFromListing(listing) {
    let latLng = { lat: listing.lat, lng: listing.lng };

    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      listingId: listing.id,
      title: listing.name
    });

    marker.setMap(this.map);
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}