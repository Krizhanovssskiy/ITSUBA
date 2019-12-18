import './style.scss';

import React from 'react';
import ListItem from './ListItem';
import CustomSlider from "./CustomSlider";

const PRT_04 = ({shareDataList}) => {

  return (
    <div className="PRT04">
      <div className="container PRT04__box">
        <div>
          <p className="Text__medium">
            How it works
          </p>
          <p className="Text__large">
            Share your data
            <span>
            with your friends
          </span>
          </p>

          <ListItem />
        </div>

        <CustomSlider />
      </div>
    </div>
  )
};

export default PRT_04;