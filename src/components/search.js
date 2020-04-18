import React from "react";
import SearchInput from "./searchInput";

const validationRegex = /^[A-Za-z]+$/;
const apiEndpoint = "https://jsonmock.hackerrank.com/api/cities/?city=";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      validText: true,
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.submitText = this.submitText.bind(this);
    this.apiResponse = this.apiResponse.bind(this);
  }

  onTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  submitText(event) {
    event.preventDefault();

    const validated = this.validateText();

    if (validated) {
      this.submitQuery();
    } else {
      this.props.resetCities();
      window.alert(
        "Please provide the valid input. Search text is not valid, please only use alphanumeric characters with no spaces!"
      );
    }
  }

  apiResponse(response) {
    response.json().then((cities) => {
      this.props.setCities(cities.data);
    });
  }

  submitQuery() {
    const { searchText } = this.state;

    this.props.setLoading();

    fetch(`${apiEndpoint}${searchText}`, {
      method: "GET",
    }).then(this.apiResponse);
  }

  validateText() {
    const { searchText } = this.state;

    return searchText.match(validationRegex);
  }

  render() {
    const { searchText, validText } = this.state;

    return (
      <form onSubmit={this.submitText}>
        <SearchInput
          onTextChange={this.onTextChange}
          searchText={searchText}
          validText={validText}
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}

export default Search;
