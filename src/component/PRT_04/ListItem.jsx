import React from 'react';
import { connect } from 'react-redux';

const ListItem = ({shareDataList}) => {

  return (
    <ul className="PRT04__list">
      {
        shareDataList.map((item, idx) => {
          return (
            <li key={idx}>
              <span className='Text__bigSmall'>
                { idx < 10 ? `00${idx + 1}`: idx + 1 }
              </span>
              <p className='Text__small'>
                {item}
              </p>
            </li>
          )
        })
      }
    </ul>
  )
};

export default connect(
  ({shareDataList}) => ({
    shareDataList
  })
)(ListItem);
