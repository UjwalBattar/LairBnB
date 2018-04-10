import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

class ListingMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
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
