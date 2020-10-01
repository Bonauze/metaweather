import React from 'react';

const Preloader = ({ isVisible }) => {
  const style = { visibility: isVisible ? 'visible': 'hidden' };

  return (
    <div className="progress" style={style}>
      <div className="indeterminate" />
    </div>
  );
};

export default React.memo(Preloader);
