import { updateExchangeRates, UPDATE_EXCHANGE_RATES } from "./exchangeRates";

describe("exchangeRates redux actions", () => {
  it("updateExchangeRates action creator", () => {
    const rates = {
      USD: 1.2,
      CAD: 1.3
    };

    const createdAction = updateExchangeRates(rates);
    expect(createdAction).toEqual({
      type: UPDATE_EXCHANGE_RATES,
      action: rates
    });
  });
});
