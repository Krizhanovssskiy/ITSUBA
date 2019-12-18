import './style.scss'

import React from 'react';
import SubscriptionForm from '../SubscriptionForm';

const RightComponent = () => {

  return (
    <div className="Component__right">
      <div className="Component__logo-box">
        <div className='Component__logo-square'/>
        <h1 className="Text__extraLarge">
          itsuba
        </h1>
      </div>

      <SubscriptionForm />

      <p className="Text__extraLarge Component__footer-text ">
        enjoy
        <span>
          kendo
        </span>
      </p>
    </div>
  )
};

export default RightComponent;