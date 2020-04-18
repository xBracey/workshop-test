export const setCities = (cities) => ({
  type: "SET_CITIES",
  cities,
});

export const resetCities = (filter) => ({
  type: "RESET_CITIES",
});

export const setLoading = (isLoading) => ({
  type: "SET_LOADING",
});

export const CityFilters = {
  SET_CITIES: "SET_CITIES",
  RESET_CITIES: "RESET_CITIES",
  SET_LOADING: "SET_LOADING",
};
