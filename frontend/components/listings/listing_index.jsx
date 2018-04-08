import React from "react";

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllListings();
  }

  render() {
    return <div>"hello"</div>;
  }
}

export default ListingIndex;
