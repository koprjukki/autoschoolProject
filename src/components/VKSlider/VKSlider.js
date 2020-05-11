import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./VKSlider.module.css";

import { cars } from "../../Resourses/images";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class MySlider extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      focusOnSelect: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className={css.sliderWraper}>
        <h2>
          Наші автомобілі
          <br /> в гарному стані!
        </h2>
        <Slider {...settings}>
          {cars.map((car) => (
            <div key={car} className={css.imgWraper}>
              <img height="250px" src={car} alt="car" />
            </div>
          ))}
        </Slider>
        <h3>
          Всі автомобілі доглянуті <br /> та готові навчати нових водіїв!
        </h3>
      </div>
    );
  }
}
