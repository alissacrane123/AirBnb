import React from 'react';
import MarkerManager from '../../util/marker_manager';


const locations = { 
  sb: {
    center: { lat: 34.4208, lng: -119.6982 }, // this is SF
    zoom: 13
  }
}

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    // this.mapOptions = 
  }

  componentDidMount() {   
    // this is setting map to SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // if (this.props.city === 'santa barbara') {
    //   mapOptions = locations.sb;
    // }

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
    // if (this.props.city === 'santa barbara') {
    //   mapOptions = locations.sb;
    // }
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