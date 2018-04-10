import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

const mapOptions = {
  center: {
    latitude: 37.773972,
    longitude: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class ListingMap extends React.Component {
  render() {
    return (
      <div className="mapp" id="map-container" ref="map">
        MAP GOES HERE
      </div>
    );
  }
}

export default withRouter(ListingMap);
