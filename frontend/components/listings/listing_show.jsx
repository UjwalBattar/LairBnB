import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import BookingFormContainer from "../booking/booking_form_container";
class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleListing(this.props.match.params.listingId);
  }

  render() {
    if (!this.props.listing) return null;

    const {
      title,
      city,
      state,
      category,
      description,
      image
    } = this.props.listing;

    return (
      <div className="listing-show-page">
        <div className="listing-show-image">
          <img src={image} />
        </div>
        <div className="listing-show-container">
          <p className="listing-show-title">{title}</p>
          <p className="listing-show-city">{city}</p>
          <p className="listing-show-state">{state}</p>
          <p className="listing-show-category">{category}</p>
          <br />
          <p className="listing-show-description">{description}</p>
        </div>
        <aside className="listing-show-booking-form">
          <BookingFormContainer />
        </aside>
      </div>
    );
  }
}
export default withRouter(ListingShow);
