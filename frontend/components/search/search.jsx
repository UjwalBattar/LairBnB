import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-container">
        <input
          className="search-placeholder"
          placeholder="Try &quot;App-Academy&quot;"
        />
      </div>
    );
  }
}
export default Search;
