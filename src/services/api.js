export const currency = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const JSON = await response.json();
  const JSON_FILTERED = Object.keys(JSON).filter((moeda) => (
    moeda !== 'USDT'
  ));
  return JSON_FILTERED;
};

export const returnApi = async () => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const JSON = await response.json();
    return JSON;
  } catch (error) {
    console.log(error.message);
  }
};
