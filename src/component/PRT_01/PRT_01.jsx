import './style.scss';
import React from 'react';

import LeftComponent from '../LeftAndRightComponents/LeftComponent';
import RightComponent from '../LeftAndRightComponents/RightComponent';

const PRT_01 = () => {
  return(
      <div className='PRT01'>
        <div className="container PRT01__box">
          <LeftComponent />
          <RightComponent />
        </div>
      </div>
  )
};

export default PRT_01;