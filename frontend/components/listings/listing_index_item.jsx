import React from "react";
import { Link, withRouter } from "react-router-dom";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      city,
      state,
      category,
      description,
      image
    } = this.props.listing;
    return (
      <div className="listing-item-container">
        <Link className="listing-item" to={`/listings/${id}`}>
          <ul className="listing-preview">
            <li className="preview-image">
              <img className="listing-preview-image" src={image} />
            </li>
            <li className="listing-preview-title">{title}</li>
            <li className="listing-preview-city">{city}</li>
            <li className="listing-preview-state">{state}</li>
            <li className="listing-preview-category">{category}</li>
            <li className="listing-preview-description">{description}</li>
            <br />
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
