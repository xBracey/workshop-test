import React from "react";
import "./app.css";
import SearchBar from "./components/searchBar";

const validationRegex = /^[A-Za-z]+$/;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,
      searchText: "",
      validText: true,
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.submitText = this.submitText.bind(this);
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
      window.alert(
        "Search text is not valid, please only use alphanumeric characters with no spaces!"
      );
    }
  }

  submitQuery() {
    return;
  }

  validateText() {
    const { searchText } = this.state;

    console.log(validationRegex);

    return searchText.match(validationRegex);
  }

  render() {
    const { searchText, validText } = this.state;

    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1> Thomas Brace - Workshop Test</h1>

          <form onSubmit={this.submitText}>
            <SearchBar
              onTextChange={this.onTextChange}
              searchText={searchText}
              validText={validText}
            />
            <input type="submit" value="search" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
