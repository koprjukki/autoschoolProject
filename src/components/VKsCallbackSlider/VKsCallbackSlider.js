import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import callbacks from "../../json/callbacks.json";
import css from "./VKsCallbackSlider.module.css";

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
      //   className: "slider center",
      dots: true,
      infinite: true,
      focusOnSelect: true,
      centerMode: true,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   variableWidth: true,
      //   autoplay: true,
      //   speed: 1000,
      //   autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: true,
      //       },
      //     },
      //     {
      //       breakpoint: 600,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2,
      //       },
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //       },
      //     },
      //   ],
    };
    return (
      <div className={css.sliderWraper}>
        <h2>
          Відгуки тих, хто вже
          <br /> впевнено їздить!
        </h2>

        <Slider {...settings}>
          {callbacks.map((callback) => (
            <div key={callback.name} className={css.callBackWraper}>
              <h3 className={css.name}>{callback.name}</h3>
              <p className={css.status}>{callback.status}</p>
              <p className={css.callbackText}>{callback.callbackText}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
