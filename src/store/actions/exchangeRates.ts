export const UPDATE_EXCHANGE_RATES = "UPDATE_EXCHANGE_RATES";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_IN_ERROR_STATE = "SET_IN_ERROR_STATE";

export const updateExchangeRates = (rates: Object) => {
  return {
    type: UPDATE_EXCHANGE_RATES,
    action: rates
  };
};

export const setIsLoading = (isLoading: Boolean) => {
  return {
    type: SET_IS_LOADING,
    action: isLoading
  };
};

export const setInErrorState = (isInErrorState: Boolean) => {
  return {
    type: SET_IS_LOADING,
    action: isInErrorState
  };
};
