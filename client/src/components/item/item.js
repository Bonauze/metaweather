import React from 'react';

import { ItemData } from '../../types.js';

const convertDigit = (number) => Math.floor(number * 10) / 10;
const getFormattedDate = (date) => new Date(date).toLocaleString('ru', { year: 'numeric', month: 'long', day: 'numeric' });

const Item = (props) => {
  const { applicable_date, min_temp, max_temp, the_temp, wind_speed, weather_state_abbr, weather_state_name, wind_direction_compass } = props;

  const rowStyle = { marginBottom: '50px' };
  const imgStyle = { width: '100px', marginRight: '25px', marginBottom: '15px' };
  const tdStyle = { width: '320px' };

  const iconUrl = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;

  return (
    <div className="row" style={rowStyle}>
      <div className="col s12">
        <div className="row">
          <div className="col s12 valign-wrapper">
            <img src={iconUrl} alt={weather_state_name} title={weather_state_name} style={imgStyle} />
            <h5>{getFormattedDate(applicable_date)}</h5>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td style={tdStyle}>Текущая температура</td>
              <td>{convertDigit(the_temp)}&nbsp;&deg;C</td>
            </tr>
            <tr>
              <td style={tdStyle}>Минимальная температура</td>
              <td>{convertDigit(min_temp)}&nbsp;&deg;C</td>
            </tr>
            <tr>
              <td style={tdStyle}>Максимальная температура</td>
              <td>{convertDigit(max_temp)}&nbsp;&deg;C</td>
            </tr>
            <tr>
              <td style={tdStyle}>Скорость ветра</td>
              <td>{convertDigit(wind_speed)}&nbsp;м/сек</td>
            </tr>
            <tr>
              <td style={tdStyle}>Направление ветра</td>
              <td>{wind_direction_compass}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = ItemData;
