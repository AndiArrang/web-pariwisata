import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/banner.jpeg';
import image2 from '../../assets/banner2.jpg';
import image3 from '../../assets/banner3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
