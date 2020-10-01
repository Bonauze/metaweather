import PropTypes from 'prop-types';

const ItemData = {
  applicable_date: PropTypes.string.isRequired,
  min_temp: PropTypes.number.isRequired,
  max_temp: PropTypes.number.isRequired,
  the_temp: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
  weather_state_abbr: PropTypes.string.isRequired,
  weather_state_name: PropTypes.string.isRequired,
  wind_direction_compass: PropTypes.string.isRequired,
};

const ListData = {
  title: PropTypes.string.isRequired,
  consolidated_weather: PropTypes.arrayOf(
    PropTypes.shape({
      ...ItemData,
      id: PropTypes.number.isRequired,
    })
  ),
};

export { ItemData, ListData };
