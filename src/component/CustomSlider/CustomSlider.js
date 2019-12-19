import './style.scss';

import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import { connect } from 'react-redux';

class CustomSlider extends Component {
  render() {
    const settings =  {
      duration: 100,
      initialSlide: 1,
      centerPadding: 140,
      // dots: true,
      wheel: true,
    };
    const { carousel } = this.props;
    return (
        <Slider  className='Carousel' { ...settings }>
            {
              carousel.map(item => (
                <div key={item.id} className='Carousel__item'>
                  <img src={item.urlImg} alt=""/>
                </div>)
              )
            }
        </Slider>
    );
  }
}

export default connect(
  ({carousel}) => ({
    carousel
  })
)(CustomSlider)