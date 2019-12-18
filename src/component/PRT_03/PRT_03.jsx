import './style.scss';

import React from 'react';

const PRT_03 = () => {
  return (
    <div className='PRT03'>
      <div className="container PRT03__box">
        <p className="Text__medium">
          ALL what you need
        </p>
        <p className="Text__large">
          YOU CAN
          <span>
            TRACK
          </span>
        </p>
        <div className="PRT03__parameters">
          <div className="PRT03__parameters-position">
            <div>
              <p className="Text__extraMedium">
                74 <span className='Text__mediumSmall'>
                m/s
              </span>
              </p>
              <p className="Text__small">
                strike speed
              </p>
            </div>
            <div>
              <p className="Text__extraMedium">
                82 <span>
                    %
                  </span>
              </p>
              <p className="Text__small">
                strike accuracy
              </p>
            </div>
            <div>
              <p className="Text__extraMedium">
                2428 <span className='Text__mediumSmall'>
                    kkal
                  </span>
              </p>
              <p className="Text__small">
                calories burned
              </p>
            </div>
          </div>
          <div className="PRT03__parameters-position">
            <div>
              <p className="Text__extraMedium">
                458 <span className='Text__mediumSmall'>
                    total hits
                  </span>
              </p>
              <p className="Text__small">
                number of strikes
              </p>
            </div>
            <div>
              <p className="Text__bigSmall">
                MEN/ <span>TSUKI</span>/ DO/ <span>KOTE</span>
              </p>
              <p className="Text__small">
                strike speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRT_03;