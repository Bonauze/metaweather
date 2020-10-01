const request = require('request');

const { IP_STACK_API_KEY } = require('./constants.js');

const getRequestSettings = (ipAddress) => ({
  url: `http://api.ipstack.com/${ipAddress}?access_key=${IP_STACK_API_KEY}`,
  method: 'GET',
  json: true,
});

const getCoordinates = async (ipAddress) => {
  return new Promise((resolve, reject) => {
    request(
      getRequestSettings(ipAddress),
      (error, response, body) => {
        if (error || response.statusCode !== 200 || body.success === false) {
          reject(new Error('Could not get coordinates!'));
        }
        resolve({
          latitude: body.latitude,
          longitude: body.longitude,
        });
      });
  });
};

module.exports = getCoordinates;
