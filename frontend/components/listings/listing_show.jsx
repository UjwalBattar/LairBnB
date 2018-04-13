import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import BookingFormContainer from "../booking/booking_form_container";
import ListingMapContainer from "../map/map_container";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchSingleListing(this.props.match.params.listingId);
  }

  render() {
    if (!this.props.listing || !this.props.listing.host) return null;
    const {
      title,
      image,
      city,
      state,
      category,
      price,
      description,
      amenities,
      rules,
      guests,
      beds,
      baths,
      bedrooms,
      host
    } = this.props.listing;

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
          <section className="listing-show-host-container">
            <img className="listing-show-host-profile-pic" src={host.image} />

            <p className="listing-show-host-username">
              Hosted &nbsp;by &nbsp;{host.username}
            </p>
          </section>
          <p className="listing-show-description">{description}</p>

          <div className="listing-map-container">
            <ListingMapContainer
              listing={this.props.listing}
              singleListing={true}
            />
          </div>
        </div>
        <aside className="listing-show-booking-form">
          <BookingFormContainer listing={this.props.listing} />
        </aside>
      </div>
    );
  }
}
export default withRouter(ListingShow);
