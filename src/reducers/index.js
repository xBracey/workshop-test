const defaultState = {
  cities: [],
  isLoading: false,
};

const city = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CITIES":
      return { ...state, cities: action.cities, isLoading: false };
    case "RESET_CITIES":
      return defaultState;
    case "SET_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default city;
