interface RatesHTTPResponse {
  rates: Object;
}

export const getRates = (): Promise<RatesHTTPResponse> => {
  return fetch("https://api.exchangeratesapi.io/latest").then(res =>
    res.json()
  );
};
