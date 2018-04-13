import React from "react";
import BookingIndexItem from "./booking_index_item";
import { withRouter } from "react-router-dom";

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllBookings();
    this.props.fetchAllListings();
  }

  render() {
    let allBookings = this.props.bookings.map(booking => {
      let listingItem = this.props.listings.filter(
        listing => listing.id === booking.listing_id
      )[0];
      return (
        <BookingIndexItem
          booking={booking}
          key={booking.id}
          listing={listingItem}
          deleteBooking={this.props.deleteBooking}
        />
      );
    });

    let pastBookings = allBookings.filter(
      obj => Date.parse(obj.props.booking.to_date) < Date.parse(new Date())
    );

    let futureBookings = allBookings.filter(
      obj => Date.parse(obj.props.booking.from_date) >= Date.parse(new Date())
    );

    return (
      <div className="booking-index-wrapper">
        <h1 className="booking-index-header">Here are all your bookings!</h1>
        <div className="future-booking-index-container">
          Your upcoming bookings!
          <div className="booking-index-content">{futureBookings}</div>
        </div>
        <div className="past-booking-index-container">
          Your past bookings!
          <div className="booking-index-content">{pastBookings}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingIndex);
