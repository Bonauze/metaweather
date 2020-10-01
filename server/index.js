const express = require('express');
const path = require('path');

const app = express();

const getCoordinates = require('./get-coordinates.js');
const getLocation = require('./get-location.js');
const getWeather = require('./get-weather.js');

const { PORT } = require('./constants.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.set('trust proxy', true);

app.get('/weather', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  try {
    const { latitude, longitude } = await getCoordinates(req.ip);
    const locations = await getLocation(latitude, longitude);
    const firstCity = locations[0];
    const { woeid } = firstCity ;
    const weather = await getWeather(woeid);

    res.send(JSON.stringify(weather));
  } catch (error) {
    res.status(503);
    res.send({ errorMessage: 'Произошла ошибка при получении данных!' });
  }
});

app.listen(PORT, () => {
  console.log('Server has been started...');
});
