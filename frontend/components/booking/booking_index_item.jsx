import React from "react";
import { Link } from "react-router-dom";

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // debugger;
    const { booking, listing } = this.props;
    const { id, from_date, to_date, guests } = booking;
    const formFromDate = new Date(from_date).toLocaleDateString();
    const formToDate = new Date(to_date).toLocaleDateString();
    if (!listing) return "...";
    return (
      <div className="booking-index-item-container">
        <Link className="booking-item" to={`/listings/${listing.id}`}>
          <ul className="booking-preview">
            <li className="b-preview-image">
              <img className="booking-preview-image" src={listing.image} />
            </li>
            <li className="booking-preview-title">At &nbsp;{listing.title}</li>
            <div className="booking-preview-city-state">
              {listing.city}, &nbsp;{listing.state}
            </div>
            <div className="booking-preview-guests">
              For &nbsp;{guests} &nbsp;{guests === 1 ? "guest" : "guests"}
            </div>
            <li className="booking-preview-dates">
              From &nbsp;<span className="booking-date">{formFromDate}</span>
              &nbsp;to &nbsp;<span className="booking-date">{formToDate}</span>
            </li>
          </ul>
        </Link>
        <br />
        <a
          className="booking-delete-link"
          onClick={() => this.props.deleteBooking(id)}
        >
          Cancel Booking
        </a>
      </div>
    );
  }
}

export default BookingIndexItem;
