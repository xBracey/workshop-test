import React from "react";

class Cities extends React.Component {
  formatCities() {
    const stateCities = {};
    const { cities } = this.props;

    if (cities.length === 0) {
      return [];
    }

    cities.forEach((city) => {
      if (stateCities.hasOwnProperty(city.state)) {
        stateCities[city.state] = [...stateCities[city.state], city.city];
      } else {
        stateCities[city.state] = [city.city];
      }
    });

    return stateCities;
  }

  renderCities(cities) {
    return (
      <>
        {cities.map((city, index) => (
          <p className="city" key={index}>
            {city}
          </p>
        ))}
      </>
    );
  }

  renderState(state, cities) {
    return (
      <div className="table" key={state}>
        <h3>{state}</h3>
        <div className="city-list">{this.renderCities(cities)}</div>
      </div>
    );
  }

  render() {
    const { cities } = this.props;

    if (!cities || !cities.length) {
      return null;
    }

    const stateCities = this.formatCities();

    const states = Object.entries(stateCities).map(([state, cities]) =>
      this.renderState(state, cities)
    );

    return <div className="cities">{states}</div>;
  }
}

export default Cities;
