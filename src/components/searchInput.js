import React from "react";

class SearchInput extends React.Component {
  render() {
    const { onTextChange, searchText } = this.props;

    return (
      <input
        onChange={onTextChange}
        className="search-bar"
        type="text"
        value={searchText}
      />
    );
  }
}

export default SearchInput;
