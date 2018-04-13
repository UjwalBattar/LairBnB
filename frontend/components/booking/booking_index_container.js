import { connect } from "react-redux";
import BookingIndex from "./booking_index";
import { uniq } from "lodash";
import { fetchAllBookings, deleteBooking } from "../../actions/booking_actions";
import { fetchSingleUser } from "../../actions/user_actions";
import { fetchAllListings } from "../../actions/listing_actions";

const mapStateToProps = ({ session, entities }) => {
  const bookings = Object.values(entities.bookings).filter(
    booking => booking.guest_id === session.currentUser.id
  );
  const listings = uniq(
    bookings.map(booking => entities.listings[booking.listing_id])
  ).filter(listing => listing !== undefined);

  return {
    currentUser: session.currentUser,
    bookings,
    listings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBookings: data => dispatch(fetchAllBookings(data)),
    fetchAllListings: data => dispatch(fetchAllListings(data)),
    deleteBooking: id => dispatch(deleteBooking(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
