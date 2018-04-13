import React from "react";
import { Link } from "react-router-dom";

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { booking, listing } = this.props;
    const { id, from_date, to_date } = booking;
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
            <li className="booking-preview-dates">
              From &nbsp;{from_date} &nbsp;to &nbsp;{to_date}
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
