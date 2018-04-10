import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleListing(this.props.match.params.listingId);
  }

  render() {
    const {
      title,
      city,
      state,
      category,
      description,
      image
    } = this.props.listing;

    return (
      <ul className={`listing-${title}`}>
        <li className={`${title}-image`}>
          <img src={image} />
        </li>
        <li>{title}</li>
        <li>{city}</li>
        <li>{state}</li>
        <li>{category}</li>
        <li>{description}</li>
        <br />
      </ul>
    );
  }
}
export default withRouter(ListingShow);
