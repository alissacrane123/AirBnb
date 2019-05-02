import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingMap extends React.Component {

  componentDidMount() {
    // this is setting map to SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);

  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }


  render() {

    return (
      <div className="map-container" >
        <div id="map" ref={map => this.mapNode = map}>
          Map
        </div>
      </div>
    )
  }
}

export default ListingMap;