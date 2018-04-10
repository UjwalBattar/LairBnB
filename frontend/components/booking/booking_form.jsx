import React from "react";
import { withRouter } from "react-router-dom";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="booking-form-container">
        <div className="booking-form">
          BOOOOOKKKIIINNGG FFOOORRRMM GOES HEREEEEE!
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);
