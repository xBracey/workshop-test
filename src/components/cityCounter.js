import React from "react";

class CityCounter extends React.Component {
  render() {
    const { cities } = this.props;

    return cities.length !== 0 ? (
      <p>{`Total cities found: ${cities.length}`}</p>
    ) : null;
  }
}

export default CityCounter;
