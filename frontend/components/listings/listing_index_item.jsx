import React from "react";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
        <li className={`${title}-${image}`}>
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

export default ListingIndexItem;
