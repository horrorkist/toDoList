const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  return json;
}

export async function fetchCoinInfo(coinId: string | undefined) {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  const json = await response.json();
  return json;
}

export async function fetchTickers(coinId: string | undefined) {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  const json = await response.json();
  return json;
}

export async function fetchCoinHistory(coinId: string | undefined) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  const response = await fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  const json = await response.json();
  return json;
}
