import { UPDATE_EXCHANGE_RATES } from "../actions/exchangeRates";
import reducer, { initialState } from "./index";

describe("redux reducer", () => {
  it("reducer update ratesInformation", () => {
    const action = {
      type: UPDATE_EXCHANGE_RATES,
      action: {
        USD: 1.2,
        CAD: 1.3
      }
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({
      ratesInformation: [
        { currency: "USD", rate: 1.2, key: "USD" },
        { currency: "CAD", rate: 1.3, key: "CAD" }
      ],
      isLoading: false,
      isInErrorMode: false
    });
  });
});
