import './style.scss';

import React from 'react';

const LeftComponent = () => {
  return (
    <div className="Component__left">
      <p className="Text__extraLarge Component__header-text ">
        improve
        <span>
          kendo
        </span>
      </p>
      <div className='Component__rectangle'>
      </div>
      <p className="Text__extraSmall Component__text">
         Smart tsuba that allows you
        <span>to track</span>
        all your shinai movement
      </p>
    </div>
  )
};

export default LeftComponent;