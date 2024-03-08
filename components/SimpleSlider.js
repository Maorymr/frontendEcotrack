import React from "react";
import Slider from "react-slick";
import styles from "../styles/Home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.sliderContainer} style={{ width: "100%" }}>
      <Slider {...settings}>
        <div>
          <img src="/1.png" />
        </div>
        <div>
          <img src="/2.jpg" />
        </div>
        <div>
          <img src="/3.png" />
        </div>
      </Slider>
    </div>
  );
}
