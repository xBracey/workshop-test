import React from "react";
import "./app.css";
import { CityCounter, Search, Loader, Cities } from "./components";
import { connect } from "react-redux";
import { setCities, setLoading, resetCities } from "./actions";

class App extends React.Component {
  render() {
    const {
      cities,
      isLoading,
      setCities,
      setLoading,
      resetCities,
    } = this.props;

    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1> Thomas Brace - Workshop Test </h1>

          <Search
            setCities={setCities}
            setLoading={setLoading}
            resetCities={resetCities}
          />
          <CityCounter cities={cities} />
          <Loader isLoading={isLoading} />
          <Cities cities={cities} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCities: (cities) => dispatch(setCities(cities)),
  setLoading: () => dispatch(setLoading()),
  resetCities: () => dispatch(resetCities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
