import React from "react";
import BookingIndexItem from "./booking_index_item";
import { withRouter } from "react-router-dom";

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllBookings();
    this.props.fetchAllListings();
  }

  render() {
    // debugger;

    let allBookings = this.props.bookings.map(booking => {
      // debugger;
      // if (this.props.listings !== undefined) debugger;
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

    return (
      <div className="booking-index-wrapper">
        <h1 className="booking-index-header">Here are all your bookings!</h1>
        <div className="booking-index-container">
          <div className="booking-index-content">{allBookings}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingIndex);
