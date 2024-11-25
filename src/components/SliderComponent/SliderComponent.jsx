import { Image } from 'antd';
import React from 'react';
import Slider from 'react-slick';

const SliderComponent = ({ arrImage }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  return (
    <Slider {...settings}>
      {
        arrImage.map((item) => {
          return (
            <Image src={item} alt="slider" preview={false} width="100%" height="500px" />
          )
        })
      }
    </Slider>
  )
}

export default SliderComponent
