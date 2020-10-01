const request = require('request');

const getRequestSettings = (latitude, longitude) => ({
  url: `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`,
  method: 'GET',
  json: true,
});

const getLocation = async (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    request(
      getRequestSettings(latitude, longitude),
      (error, response, body) => {
        if (error || response.statusCode !== 200 || body.success === false) {
          reject(new Error('Could not get location!'));
        }
        resolve(body);
    });
  });
};

module.exports = getLocation;
