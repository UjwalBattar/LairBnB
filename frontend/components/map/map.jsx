/* global google:false */

import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

const getCoordsObj = latLng => ({
  latitude: latLng.lat(),
  longitude: latLng.lng()
});

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  // console.log(this.props);
  componentDidMount() {
    // set the map to show SF

    const mapOptions = {
      center: {
        lat: this.props.listing.latitude
          ? this.props.listing.latitude
          : 37.7758,
        lng: this.props.listing.longitude
          ? this.props.listing.longitude
          : -122.435
      }, // this is SF
      zoom: 13
    };

    debugger;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    if (this.props.singleListing) {
      this.MarkerManager.createMarkerFromListing(this.props.listing);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(Object.values(this.props.listings));
    }
  }
  componentDidUpdate() {
    if (this.props.singleListing) {
      const targetListingKey = Object.keys(this.props.listings)[0];
      const targetListing = this.props.listings[targetListingKey];
      this.MarkerManager.updateMarkers([targetListing]);
    } else {
      this.MarkerManager.updateMarkers(Object.values(this.props.listings));
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { latitude: north, longitude: east },
        southWest: { latitude: south, longitude: west }
      };
      this.props.updateFilter("bounds", bounds);
    });
  }

  handleMarkerClick(listing) {
    this.props.history.push(`listings/${listing.id}`);
  }

  render() {
    return (
      <div
        className="map-container"
        id="map-container"
        ref={map => (this.mapNode = map)}
      />
    );
  }
}

export default withRouter(ListingMap);
