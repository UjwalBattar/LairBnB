import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import BookingFormContainer from "../booking/booking_form_container";
import ListingMapContainer from "../map/map_container";

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
      image,
      guests,
      beds,
      baths,
      bedrooms
    } = this.props.listing;
    console.log(this.props);
    return (
      <div className="listing-show-page">
        <div className="listing-show-image">
          <img src={image} />
        </div>
        <div className="listing-show-container">
          <p className="listing-show-title">{title}</p>
          <p className="listing-show-city-state">
            {city},&nbsp;&nbsp;{state}
          </p>
          <ul className="listing-show-attributes">
            <li className="listing-show-guests show-attribute">
              {guests}&nbsp;guests
            </li>
            <li className="listing-show-bedrooms show-attribute">
              {bedrooms}&nbsp;bedrooms
            </li>
            <li className="listing-show-beds show-attribute">
              {beds}&nbsp;beds
            </li>
            <li className="listing-show-baths show-attribute">
              {baths}&nbsp;baths
            </li>
          </ul>
          <br />
          <p className="listing-show-description">{description}</p>
          <div className="listing-map-container">
            <ListingMapContainer
              listing={this.props.listing}
              singleListing={true}
            />
          </div>
        </div>
        <aside className="listing-show-booking-form">
          <BookingFormContainer />
        </aside>
      </div>
    );
  }
}
export default withRouter(ListingShow);
