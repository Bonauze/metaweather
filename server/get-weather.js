const request = require('request');

const getRequestSettings = (woeid) => ({
  url: `https://www.metaweather.com./api/location/${woeid}/`,
  method: 'GET',
  json: true,
});

const getWeather = async (woeid) => {
  return new Promise((resolve, reject) => {
    request(
      getRequestSettings(woeid),
      (error, response, body) => {
        if (error || response.statusCode !== 200 || body.success === false) {
          reject(new Error('Could not get weather!'));
        }
        resolve(body);
    });
  });
};

module.exports = getWeather;
