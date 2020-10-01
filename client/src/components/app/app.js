import React, { useState } from 'react';
import classNames from 'classnames';

import List from '../list/list.js';
import Preloader from '../preloader/preloader.js';

import API from '../../api.js';

const renderPreloader = (isLoading) => {
  return (
    <div className="row">
      <div className="col s12">
        <Preloader isVisible={isLoading} />
      </div>
    </div>
  );
};

const renderButton = (handleButtonClick, isLoading) => {
  const buttonClasses = classNames({
    'waves-effect waves-light btn-large': true,
    'disabled': isLoading,
  });

  return (
    <div className="row">
      <div className="col s12 center-align">
        <a onClick={handleButtonClick} className={buttonClasses}><i className="material-icons right">cloud</i>Получить прогноз погоды</a>
      </div>
    </div>
  );
};

const renderErrorMessage = (isError) => {
  if (!isError) {
    return null;
  }

  return (
    <div className="row">
      <div className="col s12 center-align red darken-2 white-text">
        <p>Произошла ошибка. Пожалуйста, попробуйте позже!</p>
      </div>
    </div>
  );
};

const renderList = (data) => {
  if (!data) {
    return null;
  }

  return (
    <div className="row">
      <div className="col s12">
        <List {...data} />
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleButtonClick = async () => {
    setData(null);
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await API.getWeather();
      setData(response);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      {renderPreloader(isLoading)}
      {renderButton(handleButtonClick, isLoading)}
      {renderErrorMessage(isError)}
      {renderList(data)}
    </div>
  );
};

export default App;
