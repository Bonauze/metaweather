import React from 'react';

import { ListData } from '../../types.js';

import Item from '../item/item.js';

const List = (props) => {
  const { title, consolidated_weather } = props;

  const titleStyle = { marginBottom: '30px' };

  return (
    <React.Fragment>
      <h3 style={titleStyle}>{title}</h3>

      {consolidated_weather.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </React.Fragment>
  );
};

export default React.memo(List);

List.propTypes = ListData;
