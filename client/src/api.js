const API = {
  getWeather: async () => {
    const response = await fetch('/weather');
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error(json.errorMessage);
  },
};

export default API;
