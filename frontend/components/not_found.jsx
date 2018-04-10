import React from "react";
import { withRouter } from "react-router-dom";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1380434066i/873922.jpg" />
      </div>
    );
  }
}

export default withRouter(NotFound);
